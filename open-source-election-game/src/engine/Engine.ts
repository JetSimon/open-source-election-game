import AnswerEffectType from "./models/AnswerEffectType";
import AnswerModel from "./models/AnswerModel";
import ScenarioModel from "./models/ScenarioModel";
import CandidateController from "./controllers/CandidateController";
import ScenarioController from "./controllers/ScenarioController";
import FinalResultsModel from "./models/FinalResultsModel";
import EndingModel from "./models/EndingModel";
import QuestionModel from "./models/QuestionModel";
import CandidateModel from "./models/CandidateModel";
import ThemeModel from "./models/ThemeModel";

const tuningMultiplier = (x: number) => 1 * x;

/**
 * Controls which part of the game the player is in
 */
enum GameState {
    Uninitialized,
    CandidateSelection,
    Election
}

/**
 * The main engine that runs the logic for the game. Should be entirely separate from the View and should have no knowledge of how the player is using it.
 */
class Engine {
    gameState = GameState.Uninitialized;

    /**
     * Index of current side
     */
    sideIndex = 0;

    /**
     * Index of current question
     */
    currentQuestionIndex = 0;

    scenarioController: ScenarioController = new ScenarioController();

    /**
     * Currently loaded ScenarioModel
     */
    currentScenario: ScenarioModel | null = null;

    /**
     * Id of the player's running mate. -1 if unset.
     */
    runningMateId : number = -1;

    /**
     * TODO: Any variable in counters will be shown on screen. Only supports number variables.
     * https://github.com/JetSimon/open-source-election-game/issues/38
     */
    counters : Map<string, number> = new Map();

    /**
     * Is the player currently waiting to pick a state before moving on to the next question?
     */
    waitingToPickState : boolean = false;

    /**
     * Called when the game ends and ending slides/results are calculated. Is set from the method of the same name in a scenario's logic.js
     */
    createEnding : null | ((engine : Engine, results : FinalResultsModel) => EndingModel) = null;

    /**
     * Called when the an answer is chosen. Is set from the method of the same name in a scenario's logic.js. Used for CYOA purposes.
     */
    onAnswerPicked : null | ((engine : Engine, answerPicked : AnswerModel) => void) = null;

    /**
     * To be hooked into from a host site to know when an achievement is unlocked.
     */
    onAchievementUnlocked : null | ((scenarioController : ScenarioController, achievementName : string) => void) = null;

    /**
     * Range of RNG.
     */
    rng : number = 0.025;
    useRng : boolean = true;

    /**
     * Loads a ScenarioModel into the engine
     * @category Core
     * @param newScenario The ScenarioModel to load
     * @param asObserver If this is true, then the margins are also loaded and the GameState is set to Election. Used for when you want to view the map without actually playing the game
     */
    loadScenario(newScenario: ScenarioModel, asObserver = false) {
        this.currentQuestionIndex = 0;
        this.scenarioController.loadScenario(newScenario, 0);
        this.currentScenario = newScenario;
        this.gameState = GameState.CandidateSelection;
        this.runningMateId = -1;

        if(asObserver) {
            this.updateStates();
            this.gameState = GameState.Election;
        }
    }

    /**
     * Finalizes loading the scenario after loadScenario is called. Sets which candidate is the player and who their running mate is.
     * @category Core
     * @param newSideIndex Used to lookup a side in the ScenarioModel's scenarioSides. Loads that sides questions into the game.
     * @param runningMateId The id of the running mate of the player.
     * @returns 
     */
    setScenarioSide(newSideIndex: number, runningMateId : number) {
        if (this.currentScenario == null) {
            console.error("Cannot side current scenario side, current scenario is null");
            return;
        }

        if (newSideIndex == -1) {
            console.error("Provided side index was -1");
            return;
        }

        this.runningMateId = runningMateId;
        this.sideIndex = newSideIndex;
        this.scenarioController.loadScenario(this.currentScenario, this.sideIndex);
        this.gameState = GameState.Election;
        this.updateStates();
    }

    /**
     * @category Utility
     * @returns 
     */
    getCurrentSide() {
        return this.scenarioController.model.scenarioSides[this.sideIndex];
    }
    
    /**
     * @category Utility
     * @returns 
     */
    makeEmptyCandidateModel() : CandidateModel {
        return {
            id: -1,
            firstName: "missing",
            lastName: "no",
            party: "error",
            homeState: "error",
            color: "#000000",
            runningMate: false,
            isPlayable: false,
            issueScores: [],
            description: "this is the empty candidate model to return when errors happen",
            imageUrl: "",
            runningMateIds: []
        }
    }

    /**
     * @category Utility
     * @returns 
     */
    getPlayerCandidateController(): CandidateController {
        const playerCans = this.scenarioController.getCandidates().filter((x) => x.getId() == this.getCurrentSide().playerId);
        if (playerCans.length > 0) {
            return playerCans[0];
        }
        console.error("Could not get player candidate!");
        return new CandidateController(this.makeEmptyCandidateModel());
    }

    /**
     * @category Utility
     * @returns 
     */
    getPlayerRunningMateModel(): CandidateModel {
        return this.getCandidateModelById(this.runningMateId);
    }

    /**
     * @category Utility
     * @param candidateId 
     * @returns 
     */
    getCandidateModelById(candidateId : number): CandidateModel {
        if(this.currentScenario == null) {
            console.error("Current scenario is null, cannot get running mate!");
            return this.makeEmptyCandidateModel();
        }

        const playerCans = this.currentScenario.candidates.filter((x) => x.id == candidateId);
        if (playerCans.length > 0) {
            return playerCans[0];
        }
        console.error("Could not get candidate model with id", candidateId);
        return this.makeEmptyCandidateModel();
    }

    /**
     * @category Utility
     * @returns Returns the QuestionModel of the current question, if the currentQuestionIndex is invalid, returns null
     */
    getCurrentQuestion() : QuestionModel | null {
        if (this.currentQuestionIndex < 0 || this.currentQuestionIndex >= this.scenarioController.getNumberOfQuestions()) {
            return null;
        }

        return this.scenarioController.questions[this.currentQuestionIndex];
    }

    /**
     * @category Utility
     * @returns The number of questions in this scenario, includes questions added with CYOA
     */
    getNumberOfQuestions() {
        return this.scenarioController.getNumberOfQuestions();
    }

    /**
     * Updates the polling in each state. Used for example after the player chooses a question and those margins need to be updated.
     * @category Core
     */
    updateStates() {
        for (const stateController of this.scenarioController.stateControllers) {
            stateController.update(this.scenarioController, this.getRngRange());
        }
    }

    /**
     * 
     * @returns Returns a string of the opinions of each state for each candidate
     * @category Debug
     */
    getStateOpinionsString() {
        let output = "";

        for (const stateController of this.scenarioController.stateControllers) {
            output += stateController.getOpinionString() + "\n\n";
        }

        return output;
    }

    /**
     * @category Debug
     * @param stateId 
     * @returns 
     */
    getStateOpinionString(stateId: number): string {
        const state = this.scenarioController.getStateControllerByStateId(stateId);
        return state != null ? state.getOpinionString() : "";
    }

    /**
     * @category Debug
     * @param stateId 
     * @returns 
     */
    getStateOpinionData(stateId: number): Map<number, number> {
        const state = this.scenarioController.getStateControllerByStateId(stateId);
        return state != null ? state.opinions : new Map();
    }

    /**
     * Applies all the answer effects of an AnswerModel and then updates each state in the scenario
     * @category Core
     * @param selectedAnswer The answer to apply
     * @returns 
     */
    applyAnswer(selectedAnswer: AnswerModel | null) {
        if (selectedAnswer == null) {
            console.error("Tried to apply a null AnswerModel!");
            return;
        }

        for (const answerEffect of selectedAnswer.answerEffects) {
            try {
                const answerEffectType: AnswerEffectType = AnswerEffectType[answerEffect.answerEffectType as keyof typeof AnswerEffectType];
                if (answerEffectType == AnswerEffectType.Global) {
                    this.scenarioController.changeCandidateGlobalModifier(answerEffect.candidateId, tuningMultiplier(answerEffect.amount));
                }
                else if (answerEffectType == AnswerEffectType.Issue) {
                    const candidate = this.scenarioController.getCandidateByCandidateId(answerEffect.candidateId);
                    if(candidate != undefined && candidate != null) {
                        candidate.changeIssueScore(answerEffect.issueId, tuningMultiplier(answerEffect.amount));
                    }
                    else {
                        this.getPlayerCandidateController().changeIssueScore(answerEffect.issueId, tuningMultiplier(answerEffect.amount));
                    }
                    
                }
                else if (answerEffectType == AnswerEffectType.State) {
                    const state = this.scenarioController.getStateControllerByStateId(answerEffect.stateId);
                    if(state != null) {
                        state.changeCandidateStateModifier(answerEffect.candidateId, tuningMultiplier(answerEffect.amount));
                    }
                    else {
                        console.error("When trying to apply effects, state not found with id", answerEffect.stateId);
                    }
                }
            }
            catch (e) {
                console.error("Error while trying to apply answer effect", e, "\neffect:", JSON.stringify(answerEffect));
            }

        }

        this.updateStates();

        if(this.onAnswerPicked != null) {
            this.onAnswerPicked(this, selectedAnswer);
        }
    }

    /**
     * Increments currentQuestionIndex by one
     * @category Utility
     */
    nextQuestion() {
        this.currentQuestionIndex++;
    }

    /**
     * @category Utility
     * @returns Returns true if the currentQuestionIndex >= number of questions in the scenario
     */
    isGameOver() {
        return this.currentQuestionIndex >= this.scenarioController.getNumberOfQuestions();
    }

    /**
     * @category Utility
     * @param abbr The abbreviation for the state as defined in data.json
     * @returns The id of the state as defined in data.json
     */
    getStateIdFromAbbr(abbr: string): number {
        const arr = this.scenarioController.model.states.filter((x) => x.abbr == abbr);
        if (arr.length == 0) {
            return -1;
        }

        return arr[0].id;
    }

    /**
     * @category Utility
     * @param id 
     * @returns 
     */
    getCandidateControllerByCandidateId(id: number) {
        return this.scenarioController.getCandidateByCandidateId(id);
    }

    /**
     * @category Core
     * @returns Returns a FinalResultsModel for the final results of a game
     */
    getFinalResults(): FinalResultsModel {

        const popularVotes = new Map<number, number>();
        const electoralVotes = new Map<number, number>();

        for (const candidate of this.scenarioController.getCandidates()) {
            let totalPopularVotes = 0;
            let totalElectoralVotes = 0;
            for (const stateController of this.scenarioController.stateControllers) {
                totalPopularVotes += stateController.getOpinionForCandidate(candidate.getId()) * stateController.model.popularVotes;

                if (stateController.getHighestCandidate(this) == candidate) {
                    totalElectoralVotes += stateController.model.electoralVotes;
                }
            }
            totalPopularVotes = Math.round(totalPopularVotes);
            popularVotes.set(candidate.getId(), totalPopularVotes);
            electoralVotes.set(candidate.getId(), totalElectoralVotes);
        }

        return {
            "popularVotes": popularVotes,
            "electoralVotes": electoralVotes,
            "candidates":this.scenarioController.getCandidates(),
            "totalElectoralVotes": this.getTotalElectoralVotes(),
            "totalPopularVotes": this.getTotalPopularVotes()
        };
    }

    /**
     * Called when calculating the results of a game, returns an EndingModel to create slides out of
     * @category Core
     * @returns 
     */
    getEnding(): EndingModel {
        if(this.createEnding == null) {
            return {
                slides: [{
                    imageUrl: "",
                    endingText: "createEnding is null. Make sure to override createEnding in logic.tsx",
                    endingHeader: "Error!"
                }]
            }
        }
        return this.createEnding(this, this.getFinalResults());
    }

    /**
     * @category Utility
     * @returns Returns a Set of ids for candidates who have valid sides in the current ScenarioModel
     */
    getSetOfIdsOfCandidatesWithSides() : Set<number> {
        if (this.currentScenario == null) {
            return new Set<number>();;
        }

        return new Set<number>(this.currentScenario.scenarioSides.map((side) => side.playerId));
    }

    /**
     * @category Utility
     * @returns Returns range for RNG. So if value returned in 0.01, then you would += (0.01 / 2) to state polls
     */
    getRngRange() {
        return this.useRng ? this.rng : 0;
    }

    /**
     * Calls the onAchievementUnlocked method with the achievementName and the current ScenarioController. The Engine does not handle the logic of if an achivement is already unlocked, or storing achievements. That is left to the host site.
     * @category Core
     * @param achievementName 
     */
    unlockAchievement(achievementName : string) {
        if(this.onAchievementUnlocked != null) {
            this.onAchievementUnlocked(this.scenarioController, achievementName);
        }
        else {
            console.warn("Did not unlock achievement with name '" + achievementName + "' because onAchievementUnlocked is null");
        }
    }

    // UTILS FOR CYOA

    /**
     * @category CYOA Utility Functions
     * @param url 
     */
    setNewBackgroundImage(url : string) {
        this.scenarioController.theme.backgroundImageUrl = url;
    }

    /**
     * @category CYOA Utility Functions
     * @param url 
     */
    setNewHeaderImage(url : string) {
        this.scenarioController.theme.headerImageUrl = url;
    }

    /**
     * Sets new image for player candidate from url
     * @category CYOA Utility Functions
     * @param url 
     * @returns 
     */
    setNewPlayerCandidateImage(url : string) {
        const playerIndex = this.scenarioController.candidateControllers.indexOf(this.getPlayerCandidateController());
        
        if(playerIndex == -1) {
            console.error("While trying to set new candidate image, could not get player candidate index")
            return;
        }

        this.scenarioController.candidateControllers[playerIndex].model.imageUrl = url;
    }

    /**
     * Sets new name for player candidate
     * @param firstName 
     * @param lastName 
     * @returns 
     * @category CYOA Utility Functions
     */
    setNewPlayerCandidateName(firstName : string, lastName : string) {
        const playerIndex = this.scenarioController.candidateControllers.indexOf(this.getPlayerCandidateController());
        
        if(playerIndex == -1) {
            console.error("While trying to set new candidate name, could not get player candidate index")
            return;
        }

        this.scenarioController.candidateControllers[playerIndex].model.firstName = firstName;
        this.scenarioController.candidateControllers[playerIndex].model.lastName = lastName;
    }

    /**
     * Sets new image for running mate (shown on banner)
     * @category CYOA Utility Functions
     * @param url
     */
    setNewRunningMateImage(url : string) {
        this.getPlayerRunningMateModel().imageUrl = url;
    }

    /**
     * Sets new name for running mate (shown on banner)
     * @param firstName 
     * @param lastName 
     * @category CYOA Utility Functions
     */
    setNewRunningMateName(firstName : string, lastName : string) {
        this.getPlayerRunningMateModel().firstName = firstName;
        this.getPlayerRunningMateModel().lastName = lastName;
    }

    /**
     * @category CYOA Utility Functions
     * @param newTheme 
     */
    setNewTheme(newTheme : ThemeModel) {
        this.scenarioController.theme = newTheme;
    }

    /**
     * 
     * @param question The question to insert
     * @param index The index before the question you want to insert. For example if you are on index 3 and you want to insert a question at index 6, put index 5
     * @category CYOA Utility Functions
     */
    insertNewQuestionAfterIndex(question : QuestionModel, index : number) {
        this.scenarioController.questions.splice(index + 1, 0, question);
    }

    /**
     * Inserts question as the next question the player will see
     * @param question The question to insert
     * @category CYOA Utility Functions
     */
    insertNewQuestionNext(question : QuestionModel) {
        this.insertNewQuestionAfterIndex(question, this.currentQuestionIndex);
    }

    /**
     * Removes question from the list of questions.
     * @param questionId The id of the question to remove
     * @category CYOA Utility Functions
     */
    removeQuestionById(questionId : number) {
        this.scenarioController.questions = this.scenarioController.questions.filter((x) => x.id != questionId);
    }

    // UTILS FOR ENDINGS

    /**
     * 
     * @returns Total number of popular votes for the scenario
     * @category Ending Utility Functions
     */
    getTotalPopularVotes() {
        let total = 0;
        for (const stateController of this.scenarioController.getStates()) {
            total += stateController.model.popularVotes;
        }
        return total;
    }

    /**
     * 
     * @returns Total number of electoral votes for the scenario
     * @category Ending Utility Functions
     */
    getTotalElectoralVotes() {
        let total = 0;
        for (const stateController of this.scenarioController.getStates()) {
            total += stateController.model.electoralVotes;
        }
        return total;
    }

    /**
     * 
     * @param results The results of the election
     * @returns The player candidate's number of popular votes, if player candidate is undefined then returns 0
     * @category Ending Utility Functions
     */
    getPlayerPv(results : FinalResultsModel) {
        return results.popularVotes.get(this.getPlayerCandidateController().getId()) ?? 0;
    }

    /**
     * 
     * @param results The results of the election
     * @returns The player candidate's number of electoral votes, if player candidate is undefined then returns 0
     * @category Ending Utility Functions
     */
    getPlayerEv(results : FinalResultsModel) {
        return results.electoralVotes.get(this.getPlayerCandidateController().getId()) ?? 0;
    }

    
    /**
     * 
     * @param results The results of the election
     * @returns Did the player have the most PV (note not > 50%, just the most)
     * @category Ending Utility Functions
     */
    playerWonPv(results : FinalResultsModel) {
        const mostPv = Math.max(...Array.from(results.popularVotes.values()));
        return this.getPlayerPv(results) == mostPv;
    }

    /**
     * 
     * @param results The results of the election
     * @returns Is player EV > total EV / 2
     * @category Ending Utility Functions
     */
    playerWonEv(results : FinalResultsModel) {
        return this.getPlayerEv(results) > this.getTotalElectoralVotes() / 2;
    }
    
    /**
     * 
     * @param results The results of the election
     * @returns Was the player's # of electoral votes >= amount?
     * @category Ending Utility Functions
     */
    playerEvAtLeast(results : FinalResultsModel, amount : number) {
        return this.getPlayerEv(results) >= amount;
    }

    /**
     * 
     * @param results  The results of the election
     * @returns The ratio of PV the player got (range [0, 1])
     * @category Ending Utility Functions
     */
    getPlayerPvPercentage(results : FinalResultsModel) {
        const pv = results.popularVotes.get(this.getPlayerCandidateController().getId()) ?? 0;
        return pv / this.getTotalPopularVotes();
    }
}

export { Engine, GameState };
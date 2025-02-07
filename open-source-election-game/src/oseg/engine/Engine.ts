import { makeSeed, Seed, seededRandom } from "../utils/MathUtils";
import { CandidateController } from "./controllers/CandidateController";
import { ScenarioController } from "./controllers/ScenarioController";
import { CustomViewCreator } from "./CustomView";
import { AnswerEffectType } from "./models/AnswerEffectType";
import { AnswerModel } from "./models/AnswerModel";
import { CandidateModel } from "./models/CandidateModel";
import { Difficulty, getMultiplierFromDifficulty } from "./models/Difficulty";
import { EndingModel } from "./models/EndingModel";
import { FinalResultsModel } from "./models/FinalResultsModel";
import { HistoricalResultsModel } from "./models/HistoricalResultsModel";
import { QuestionModel } from "./models/QuestionModel";
import { ScenarioModel } from "./models/ScenarioModel";
import { ScenarioSideModel } from "./models/ScenarioSideModel";
import { SongModel } from "./models/SongModel";
import { StateModel } from "./models/StateModel";
import { ThemeModel } from "./models/ThemeModel";

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

    /**
     * How much visiting a state boosts that state's opinion of you
     */
    visitBonus: number = 0.02;

    difficulty: Difficulty = Difficulty.Normal;

    gameState = GameState.Uninitialized;

    /**
     * Index of current side
     */
    sideIndex = 0;

    /**
     * Index of current question
     */
    currentQuestionIndex = 0;

    /**
     * Display number of current question, also how many questions the player has actually answered
     */
    currentQuestionNumber = 1;

    scenarioController: ScenarioController = new ScenarioController();

    /**
     * Currently loaded ScenarioModel
     */
    currentScenario: ScenarioModel | null = null;

    /**
     * Id of the player's running mate. -1 if unset.
     */
    runningMateId: number = -1;

    /**
     * Any variable in counters will be shown on screen. Only supports number variables.
     * Use setCounter, setCounter methods
     */
    counters: Map<string, number> = new Map();

    /**
     * Holds the display names for counters, if a display name is not defined it defaults to the counter's key + value
     */
    counterDisplayNames: Map<string, string> = new Map();

    /**
     * Is the player currently waiting to pick a state before moving on to the next question?
     */
    waitingToPickState: boolean = false;

    /**
     * Called when the user presses "next"
     */
    onCandidateSelectionStarted: null | ((engine: Engine) => void) = null;

    /**
     * Called when the scenario side is first set (played has chose their running mate and pressed start game)
     */
    onScenarioStarted: null | ((engine: Engine) => void) = null;

    /**
     * Called when the game ends and ending slides/results are calculated. Is set from the method of the same name in a scenario's logic.js
     */
    createEnding: null | ((engine: Engine, results: FinalResultsModel) => EndingModel) = null;

    /**
     * Called when the an answer is chosen. Is set from the method of the same name in a scenario's logic.js. Used for CYOA purposes.
     */
    onAnswerPicked: null | ((engine: Engine, answerPicked: AnswerModel) => void) = null;

    /**
     * To be hooked into from a host site to know when an achievement is unlocked.
     */
    onAchievementUnlocked: null | ((engine: Engine, achievementName: string) => void) = null;

    /**
     * Range of RNG.
     */
    rng: number = 0.025;
    useRng: boolean = true;
    seed = Date.now().toString();
    randomState: Seed = makeSeed(this.seed);
    random = seededRandom(this.randomState);

    isShuffled = false;

    answers: number[] = [];
    visits: number[] = [];

    logToConsole: boolean = true;

    localizations = new Map<string, string>();

    tooltips = new Map<string, string>();

    /**
     * How much a running mate contributes to opinion (1 is the same as a normal candidate)
     */
    runningMateWeight = 0.5;

    waitingToSelectNewRunningMate = false;

    initialScenarioName : null | string = null;

    setSeed(seed: string) {
        this.seed = seed;
        this.randomState = makeSeed(this.seed);
        this.random = seededRandom(this.randomState);
    }

    getSeed(): string {
        return this.seed;
    }

    getVisits(): number[] {
        return this.visits;
    }
    getAnswers(): number[] {
        return this.answers;
    }

    customViews : Map<string, CustomViewCreator> = new Map();

    /**
     * Loads a ScenarioModel into the engine
     * @category Core
     * @param newScenario The ScenarioModel to load
     * @param asObserver If this is true, then the margins are also loaded and the GameState is set to Election. Used for when you want to view the map without actually playing the game
     */
    loadScenario(newScenario: ScenarioModel, asObserver: boolean) {
        newScenario = JSON.parse(JSON.stringify(newScenario));
        this.waitingToPickState = false;
        this.waitingToSelectNewRunningMate = false;
        this.currentQuestionIndex = 0;
        this.runningMateId = -1;
        this.currentScenario = newScenario;
        this.initialScenarioName = newScenario.scenarioName;
        this.scenarioController.loadScenario(this, newScenario, 0, false);
        this.gameState = GameState.CandidateSelection;
        this.counters = new Map<string, number>();
        this.counterDisplayNames = new Map<string, string>();
        this.tooltips = new Map<string, string>();
        
        if(newScenario.tooltips != undefined) {
            for(const tooltip of newScenario.tooltips) {
                this.tooltips.set(tooltip.key, tooltip.value);
            }
        }

        if (asObserver == true) {
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
    setScenarioSide(newSideIndex: number, runningMateId: number, isShuffled: boolean) {
        if (this.currentScenario == null) {
            console.error("Cannot side current scenario side, current scenario is null");
            return;
        }

        if (newSideIndex == -1) {
            console.error("Provided side index was -1");
            return;
        }

        // Make sure seed is consistent
        this.setSeed(this.seed);

        this.isShuffled = isShuffled;

        this.answers = [];
        this.visits = [];

        this.runningMateId = runningMateId;
        this.sideIndex = newSideIndex;

        this.scenarioController.loadScenario(this, this.currentScenario, this.sideIndex, this.isShuffled);

        const playerId = this.getPlayerCandidateController().getId();
        this.scenarioController.setCandidateGlobalModifier(
            playerId,
            this.scenarioController.getGlobalModifierForCandidate(playerId) * getMultiplierFromDifficulty(this.difficulty)
        );

        this.currentQuestionNumber = 1;
        this.currentQuestionIndex = 0;
        this.goToNextValidQuestion();

        this.gameState = GameState.Election;
        this.updateStates();

        if (this.onScenarioStarted != null) {
            try {
                this.onScenarioStarted(this);
            }
            catch (e) {
                alert("Error while running onScenarioStarted from logic.js, see console for more details");
                console.error("onScenarioStarted error:", e);
            }
        }
    }

    /**
     * @category Utility
     * @returns 
     */
    getCurrentSide(): ScenarioSideModel | null {

        if (this.scenarioController.model.scenarioSides.length == 0) {
            return null;
        }

        return this.scenarioController.model.scenarioSides[this.sideIndex];
    }

    /**
     * Adds tooltips to any string
     * @param s 
     */
    addTooltips(s : string, positionRelative : boolean = true) : string {
        const sortedKeys = Array.from(this.tooltips.keys()).sort((a, b) => a.length - b.length);
        let finalString = s;
        for(const key of sortedKeys) {
            const tooltip = `<span ${positionRelative ? "style='position:relative'" : ""} class="InGameTooltip">${key}<span class="InGameTooltipText">${this.tooltips.get(key)}</span></span>`
            finalString = finalString.replace(key, tooltip);
        }
        return finalString;
    }

    /**
     * @category Utility
     * @returns 
     */
    makeEmptyCandidateModel(): CandidateModel {
        return {
            id: -1,
            firstName: "Candidate",
            lastName: "Not Found",
            party: "error",
            homeState: "error",
            color: "#000000",
            issueScores: [],
            description: "this is the empty candidate model to return when errors happen",
            imageUrl: "",
            runningMateIds: [],
            startingGlobalMultiplier: 0,
        };
    }

    /**
     * @category Utility
     * @returns 
     */
    getPlayerCandidateController(): CandidateController {
        const currentSide = this.getCurrentSide();
        if (currentSide != null) {
            const playerCans = this.scenarioController.getCandidates().filter((x) => x.getId() == currentSide.playerId);
            if (playerCans.length > 0) {
                return playerCans[0];
            }
        }

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
    getCandidateModelById(candidateId: number): CandidateModel {
        if (this.currentScenario == null) {
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
    getCurrentQuestion(): QuestionModel | null {
        if (this.currentQuestionIndex < 0 || this.currentQuestionIndex >= this.scenarioController.questions.length) {
            return null;
        }

        return this.scenarioController.questions[this.currentQuestionIndex];
    }

    /**
     * @category Utility
     * @returns The number of ENABLED questions in this scenario, includes questions added with CYOA
     */
    getNumberOfEnabledQuestions() {
        return this.scenarioController.getNumberOfEnabledQuestions();
    }

    /**
     * Updates the polling in each state. Used for example after the player chooses a question and those margins need to be updated.
     * @category Core
     */
    updateStates() {
        for (const stateController of this.scenarioController.stateControllers) {

            const runningMateMap = new Map();

            const playerController = this.getPlayerCandidateController();
            const playerId = playerController.getId();
            if (playerId != -1 && this.runningMateId != -1) {
                runningMateMap.set(playerId, this.runningMateId);
            }

            for (const candidate of this.scenarioController.getCandidates()) {
                if (!runningMateMap.has(candidate.getId())) {
                    if (candidate.model.runningMateIds.length > 0) {
                        runningMateMap.set(candidate.getId(), candidate.model.runningMateIds[0]);
                    }
                }
            }

            stateController.update(this, this.getRngRange(), runningMateMap);
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

        this.answers.push(selectedAnswer.id);

        for (const answerEffect of selectedAnswer.answerEffects) {

            const answerAmount = answerEffect.amount;

            try {
                const answerEffectType: AnswerEffectType = AnswerEffectType[answerEffect.answerEffectType as keyof typeof AnswerEffectType];
                if (answerEffectType == AnswerEffectType.Global) {
                    this.scenarioController.changeCandidateGlobalModifier(answerEffect.candidateId, answerAmount);
                }
                else if (answerEffectType == AnswerEffectType.Issue) {
                    const candidate = this.scenarioController.getCandidateByCandidateId(answerEffect.candidateId);
                    if (candidate != undefined && candidate != null) {
                        candidate.changeIssueScore(answerEffect.issueId, answerAmount);
                    }
                    else {
                        if(this.logToConsole) {
                            console.warn("Id " + answerEffect.candidateId + " could not find a valid candidate, applying to player");
                        }
                        this.getPlayerCandidateController().changeIssueScore(answerEffect.issueId, answerAmount);
                    }

                }
                else if (answerEffectType == AnswerEffectType.State) {
                    const state = this.scenarioController.getStateControllerByStateId(answerEffect.stateId);
                    if (state != null) {
                        state.changeCandidateStateModifier(answerEffect.candidateId, answerAmount);
                    }
                    else {
                        console.error("When trying to apply effects, state not found with id", answerEffect.stateId);
                    }
                }
                else if (answerEffectType == AnswerEffectType.SetQuestionEnabled) {
                    if (answerEffect.questionEnabled != undefined && answerEffect.questionId != undefined) {
                        for (const question of this.scenarioController.questions.filter((x) => x.id == answerEffect.questionId)) {
                            question.enabled = answerEffect.questionEnabled;
                        }
                    }
                    else {
                        console.error("Cannot enable question as questionEnabled or questionId is undefined");
                    }
                }
                else if (answerEffectType == AnswerEffectType.TctIssue) {
                    const amount = answerEffect.amount;
                    const weight = answerEffect.weight ?? 1;
                    const candidate = answerEffect.candidateId;
                    const issue = answerEffect.issueId;

                    for (const state of this.scenarioController.getStates()) {
                        const stateIssueScore = state.issueScores.getIssueScoreForIssue(issue);
                        const stateWeight = state.issueScores.getWeightForIssue(issue);
                        const diff = Math.abs(amount - stateIssueScore);
                        const dist = -diff + 1; // Between range -1 to 1
                        const opinionDelta = dist * weight * stateWeight / 50; // Dividing by this much because TCT has weights that are like 3, which is pretty big (3 / 50 for example is 0.06 modifier which is more reasonable)
                        state.changeCandidateStateModifier(candidate, opinionDelta);
                    }
                }
                else {
                    console.error("Got unknown AnswerEffect type", answerEffectType);
                }
            }
            catch (e) {
                console.error("Error while trying to apply answer effect", e, "\neffect:", JSON.stringify(answerEffect));
            }

        }

        this.updateStates();

        if (this.onAnswerPicked != null) {
            try {
                this.onAnswerPicked(this, selectedAnswer);
            }
            catch (e) {
                alert("Error while running onAnswerPicked, see console for details");
                console.error("onAnswerPicked error:", e);
            }

        }
    }

    /**
     * Get a string you've defined previously to be rendered as another string
     * Returns the same string if a localization is not set yet
     * @category Utility
     * @param key 
     * @returns The localization
     */
    getLocalization(key: string): string {
        return this.localizations.get(key) ?? key;
    }

    /**
     * Set a string you want to be rendered in game as another string. May not work for all strings in game, but will be updated until it does.
     * You probably want to call all these in onScenarioStarted or the optional "onCandidateSelectionStarted" function.
     * @category Utility
     * @param oldValue 
     * @param newValue 
     */
    setLocalization(oldValue: string, newValue: string) {
        this.localizations.set(oldValue, newValue);
    }

    /**
    * Increments question index until an enabled question is found
    * @category Utility
    */
    goToNextValidQuestion() {
        function shouldSkipQuestion(question: QuestionModel) {
            return question.enabled != undefined && !question.enabled;
        }

        while (this.currentQuestionIndex < this.scenarioController.questions.length && shouldSkipQuestion(this.scenarioController.questions[this.currentQuestionIndex])) {
            this.currentQuestionIndex++;
        }
    }

    /**
     * Increments the current question index at least once, and keeps going if the current question is disabled
     * @category Utility
     */
    nextQuestion() {
        this.currentQuestionIndex++;
        this.currentQuestionNumber++;
        this.goToNextValidQuestion();
    }

    /**
     * @category Utility
     * @returns Returns true if the currentQuestionIndex >= number of questions in the scenario
     */
    isGameOver() {
        return this.currentQuestionIndex >= this.scenarioController.questions.length;
    }

    /**
     * @category Utility
     * @param abbr The abbreviation for the state as defined in data.json
     * @returns The id of the state as defined in data.json
     */
    getStateIdFromAbbr(abbr: string): number {
        const arr = this.scenarioController.model.states.filter((x : StateModel) => x.abbr == abbr);
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
                totalPopularVotes += stateController.getPvsForCandidate(candidate);
                totalElectoralVotes += stateController.getEvsForCandidate(this, candidate);
            }
            totalPopularVotes = Math.round(totalPopularVotes);
            popularVotes.set(candidate.getId(), totalPopularVotes);
            electoralVotes.set(candidate.getId(), totalElectoralVotes);
        }

        return {
            "popularVotes": popularVotes,
            "electoralVotes": electoralVotes,
            "candidates": this.scenarioController.getCandidates(),
            "totalElectoralVotes": this.getTotalElectoralVotes(),
            "totalPopularVotes": this.getTotalPopularVotes()
        };
    }

    /**
     * @category Utility?
     * @returns Returns a FinalResultsModel for the defined historical results 
     */
    getHistoricalResults(): HistoricalResultsModel | undefined {
        return this.scenarioController.getHistoricalResults();
    }

    /**
     * Called when calculating the results of a game, returns an EndingModel to create slides out of
     * @category Core
     * @param overrideEv for editor, when user changes electoral votes, changes the ending based on the ev
     * @param overridePv for editor, when user changes popular votes, changes ending based on pv
     * @returns 
     */
    getEnding(overrideEv: Map<number, number> | null = null, overridePv: Map<number, number> | null = null): EndingModel {
        if (this.createEnding == null) {
            return {
                slides: [{
                    imageUrl: "",
                    endingText: "createEnding is null. Make sure to override createEnding in logic.tsx",
                    endingHeader: "Error!"
                }]
            };
        }

        try {
            const results = this.getFinalResults();
        
            if (overrideEv) {
                for (const [candidateId, ev] of overrideEv.entries()) {
                    results.electoralVotes.set(candidateId, ev);
                }
            }
            
            if (overridePv) {
                let totalVote = 0;
                for (const [candidateId, pv] of overridePv.entries()) {
                    results.popularVotes.set(candidateId, pv);
                    totalVote += pv;
                }
                results.totalPopularVotes = totalVote;
            }

            const ending = this.createEnding(this, results);
            return ending;
        }
        catch (e: unknown) {
            alert("Error while running createEnding, please check your logic.js code and the console for more details");
            console.error("createEnding error:", e);

            let message: string = "Error";

            if (typeof e === "string") {
                message = e;
            }
            else if (e instanceof Error) {
                message = e.message;
            }

            return {
                slides: [{
                    imageUrl: "",
                    endingText: message,
                    endingHeader: "Error!"
                }]
            };
        }
    }

    /**
     * @category Utility
     * @returns Returns a Set of ids for candidates who have valid sides in the current ScenarioModel
     */
    getSetOfIdsOfCandidatesWithSides(): Set<number> {
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
    unlockAchievement(achievementName: string) {
        if (this.onAchievementUnlocked != null) {
            this.onAchievementUnlocked(this, achievementName);
        }
        else {
            if (this.logToConsole) {
                console.warn("Did not unlock achievement with name '" + achievementName + "' because onAchievementUnlocked is null");
            }
        }
    }

    // UTILS FOR CYOA

    /**
     * @category CYOA Utility Functions
     * @param scenarioName 
     */
    setScenarioName(scenarioName: string) {
        this.scenarioController.model.scenarioName = scenarioName;
    }

    /**
     * @category CYOA Utility Functions
     * @param quote 
     */
    setQuote(quote: string) {
        this.scenarioController.theme.quote = quote;
    }

    /**
     * Triggers a midgame VP switch
     * @category CYOA Utility Functions
     */
    showRunningMateSelectionScreen() {
        this.waitingToSelectNewRunningMate = true;
    }

    /**
     * Sets the display name for a counter (a counter's display name defaults to its key)
     * Useful if you want to provide special context to a counter
     * @param key 
     * @param displayName 
     */
    setCounterDisplayName(key: string, displayName: string) {
        if (!this.counters.has(key)) {
            console.error("Counters does not have key " + key + " to set display name for");
            return;
        }

        this.counterDisplayNames.set(key, displayName);
    }

    /**
     * Sets counter value with key 'key' to 'amount'
     * @category CYOA Utility Functions
     * @param key 
     * @param amount 
     */
    setCounter(key: string, amount: number) {
        this.counters.set(key, amount);
    }

    /**
     * @category CYOA Utility Functions
     * @param key 
     * @returns Value in counters with key 'key' or -1 if that key does not exist
     */
    getCounter(key: string): number {
        return this.counters.get(key) ?? -1;
    }

    /**
     * Adds amount to counter with key 'key'. Does nothing and logs an error if this counter hasn't been defined using setCounter yet.
     * @param key 
     * @param amount 
     * @category CYOA Utility Functions
     */
    addCounter(key: string, amount: number) {
        if (!this.counters.has(key)) {
            console.error("Tried to add to counter with key " + key + " that does not exist. Doing nothing.");
            return;
        }

        this.setCounter(key, this.getCounter(key) + amount);
    }

    /**
     * @category CYOA Utility Functions
     * @param url 
     */
    setNewBackgroundImage(url: string) {
        this.scenarioController.theme.backgroundImageUrl = url;
    }

    /**
     * @category CYOA Utility Functions
     * @param url 
     */
    setNewHeaderImage(url: string) {
        this.scenarioController.theme.headerImageUrl = url;
    }

    /**
     * Sets new image for player candidate from url
     * @category CYOA Utility Functions
     * @param url 
     * @returns 
     */
    setNewPlayerCandidateImage(url: string) {
        const playerIndex = this.scenarioController.candidateControllers.indexOf(this.getPlayerCandidateController());

        if (playerIndex == -1) {
            console.error("While trying to set new candidate image, could not get player candidate index");
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
    setNewPlayerCandidateName(firstName: string, lastName: string) {
        const playerIndex = this.scenarioController.candidateControllers.indexOf(this.getPlayerCandidateController());

        if (playerIndex == -1) {
            console.error("While trying to set new candidate name, could not get player candidate index");
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
    setNewRunningMateImage(url: string) {
        this.getPlayerRunningMateModel().imageUrl = url;
    }

    /**
     * Sets new name for running mate (shown on banner)
     * @param firstName 
     * @param lastName 
     * @category CYOA Utility Functions
     */
    setNewRunningMateName(firstName: string, lastName: string) {
        this.getPlayerRunningMateModel().firstName = firstName;
        this.getPlayerRunningMateModel().lastName = lastName;
    }

    /**
     * @category CYOA Utility Functions
     * @param newTheme 
     */
    setNewTheme(newTheme: ThemeModel) {
        this.scenarioController.theme = newTheme;
    }

    /**
     * @category CYOA Utility Functions
     * @param answerIds array of answer id numbers to check if answered
     * @returns true if all answers have been answers
     */
    hasAnswered(answerIds: number[]) {
        const answered = new Set(this.answers);
        for (const answerId of answerIds) {
            if (!answered.has(answerId)) {
                return false;
            }
        }
        return true;
    }

    /**
     * @category CYOA Utility Functions
     * @param answerIds array of answer id numbers to check if any answered
     * @returns true if any answers have been answers
     */
    hasAnsweredAny(answerIds: number[]) {
        const answered = new Set(this.answers);
        for (const answerId of answerIds) {
            if (answered.has(answerId)) {
                return true;
            }
        }
        return false;
    }

    /**
     * 
     * @param question The question to insert
     * @param index The index before the question you want to insert. For example if you are on index 3 and you want to insert a question at index 6, put index 5
     * @category CYOA Utility Functions
     */
    insertNewQuestionAfterIndex(question: QuestionModel, index: number) {
        this.scenarioController.questions.splice(index + 1, 0, question);
    }

    /**
     * Inserts question as the next question the player will see
     * @param question The question to insert
     * @category CYOA Utility Functions
     */
    insertNewQuestionNext(question: QuestionModel) {
        this.insertNewQuestionAfterIndex(question, this.currentQuestionIndex);
    }

    /**
     * Removes question from the list of questions.
     * @param questionId The id of the question to remove
     * @category CYOA Utility Functions
     */
    removeQuestionById(questionId: number) {
        this.scenarioController.questions = this.scenarioController.questions.filter((x) => x.id != questionId);
    }

    /**
     * Adds amount to candidate global multiplier with id 'id'
     * @param id 
     * @param amount 
     * @category CYOA Utility Functions
     */
    addCandidateGlobalMultiplier(id: number, amount: number) {
        this.scenarioController.changeCandidateGlobalModifier(id, amount);
    }

    /**
     * Overrides both texts on the bottom banner
     * @param line1 
     * @param line2 
     * @category CYOA Utility Functions
     */
    setBottomBannerOverrideText(line1: string, line2: string) {
        this.setBottomBannerOverrideTextLine1(line1);
        this.setBottomBannerOverrideTextLine2(line2);
    }

    /**
     * Override line 1 of the banner at the bottom
     * @param line1 
     * @category CYOA Utility Functions
     */
    setBottomBannerOverrideTextLine1(line1: string) {
        this.scenarioController.bannerOverrideLine1 = line1;
    }

    /**
     * Override line 2 of the banner at the bottom
     * @param line2 
     * @category CYOA Utility Functions
     */
    setBottomBannerOverrideTextLine2(line2: string) {
        this.scenarioController.bannerOverrideLine2 = line2;
    }

    /**
     * Enables or disables a question by id
     * @param id 
     * @param isEnabled 
     * @category CYOA Utility Functions
     */
    setQuestionEnabledById(id: number, isEnabled: boolean) {
        for (const question of this.scenarioController.questions) {
            if (question.id == id) {
                question.enabled = isEnabled;
            }
        }
    }

    /**
     * Enables or disables an answer by id
     * @param id 
     * @param isEnabled 
     */
    setAnswerEnabledById(id: number, isEnabled: boolean) {
        for (const question of this.scenarioController.questions) {
            for (const answer of question.answers) {
                if(answer.id == id) {
                    answer.enabled = isEnabled;
                }
            }
        }
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
    getPlayerPv(results: FinalResultsModel) {
        return results.popularVotes.get(this.getPlayerCandidateController().getId()) ?? 0;
    }

    /**
     * 
     * @param results The results of the election
     * @returns The player candidate's number of electoral votes, if player candidate is undefined then returns 0
     * @category Ending Utility Functions
     */
    getPlayerEv(results: FinalResultsModel) {
        return results.electoralVotes.get(this.getPlayerCandidateController().getId()) ?? 0;
    }


    /**
     * 
     * @param results The results of the election
     * @returns Did the player have the most PV (note not > 50%, just the most)
     * @category Ending Utility Functions
     */
    playerWonPv(results: FinalResultsModel) {
        const mostPv = Math.max(...Array.from(results.popularVotes.values()));
        return this.getPlayerPv(results) == mostPv;
    }

    /**
     * 
     * @param results The results of the election
     * @returns Is player EV > total EV / 2
     * @category Ending Utility Functions
     */
    playerWonEv(results: FinalResultsModel) {
        return this.getPlayerEv(results) > results.totalElectoralVotes / 2;
    }

    /**
     * 
     * @param results The results of the election
     * @returns Was the player's # of electoral votes >= amount?
     * @category Ending Utility Functions
     */
    playerEvAtLeast(results: FinalResultsModel, amount: number) {
        return this.getPlayerEv(results) >= amount;
    }

    /**
     * 
     * @param results 
     * @returns true if no one got >= total EV / 2
     * @category Ending Utility Functions
     */
    isDeadlock(results: FinalResultsModel) {
        for (const ev of results.electoralVotes.values()) {
            if (ev > results.totalElectoralVotes / 2) {
                return false;
            }
        }

        return true;
    }

    /**
     * 
     * @param results  The results of the election
     * @returns The ratio of PV the player got (range [0, 1])
     * @category Ending Utility Functions
     */
    getPlayerPvPercentage(results: FinalResultsModel) {
        const pv = results.popularVotes.get(this.getPlayerCandidateController().getId()) ?? 0;
        return pv / results.totalPopularVotes;
    }

    /**
     * Get the id of the candidate with the most pv
     * @param results 
     * @category Ending Utility Functions
     */
    getIdOfHighestPv(results : FinalResultsModel) {
        let highestCandidate = -1;
        let highestPv = 0;
        for(const candidate of results.candidates) {
            const pv = results.popularVotes.get(candidate.getId())!;
            if(pv > highestPv) {
                highestCandidate = candidate.getId();
                highestPv = pv;
            }
        }
        return highestCandidate;
    }

    /**
     * Get the id of the candidate with the most ev
     * @param results 
     * @category Ending Utility Functions
     */
    getIdOfHighestEv(results: FinalResultsModel) {
        let highestCandidate = -1;
        let highestEv = 0;
        for(const candidate of results.candidates) {
            const ev = results.electoralVotes.get(candidate.getId())!;
            if(ev > highestEv) {
                highestCandidate = candidate.getId();
                highestEv = ev;
            }
        }
        return highestCandidate;
    }

    /**
     * Set a new music playlist. Good to use for song switches for endings.
     * @param music 
     * @category Ending Utility Functions
     */
    setNewMusic(music: SongModel[]) {
        if (this.currentScenario != null) {
            this.currentScenario.music = music;
        }
    }

    /**
     * Add a song to the music playlist
     * @param song 
     * @category Ending Utility Functions
     */
    addNewSong(song: SongModel) {
        if (this.currentScenario != null) {
            this.currentScenario.music.push(song);
        }
    }

    /**
     * Returns true if the candidate with candidateId is polling highest in the state with id stateId. Can also be used midgame.
     * @category Ending Utility Functions
     * @param candidateId 
     * @param stateId 
     * @returns 
     */
    candidateWonState(candidateId: number, stateId: number): boolean {
        const state = this.scenarioController.getStateControllerByStateId(stateId);
        if (state == null) {
            console.error("No state found with id " + stateId + " when checking who won. Returning false.");
            return false;
        }

        const highest = state.getHighestCandidate(this);
        if (highest == null) {
            console.error("Highest candidate was null while trying to tell who won state. Returning false.");
            return false;
        }

        return highest.getId() == candidateId;
    }

    // Advanced Modding Functions - For when you don't want to make a fork of OSEG but you wanna do something advanced

    /**
     * Adds a custom view (button to game bottom bar tab) with inner html set to innerHtml
     * @param viewName  
     * @param customViewCreator 
     * @category Advanced Modding Functions
     */
    addCustomView(viewName : string, customViewCreator : CustomViewCreator) {
        this.customViews.set(viewName, customViewCreator);
    }

    /**
     * Removes custom view with name viewName
     * @param viewName 
     * @category Advanced Modding Functions
     */
    removeCustomView(viewName : string) {
        this.customViews.delete(viewName);
    }

    /**
     * Sets a flag in the user's local storage. Can be used for unlockables in mods, persisting data. Does not save between accounts.
     * Only works if the scenario has already been loaded in (should always work)
     * Safer than accessing localStorage yourself (handles edgecases, makes sure the flag name is unique to your scenario)
     * @param flag 
     * @param value 
     * @category Advanced Modding Functions
     * @returns 
     */
    setLocalStorageFlag(flag : string, value : boolean) {
        if(this.initialScenarioName == null) {
            console.error("Cannot set local storage flag, scenario name is null");
            return;
        }

        try {
            localStorage.setItem(this.initialScenarioName + "/" + flag, value ? "1" : "0");
        }
        catch(e) {
            console.error("Could not set local storage flag:", e);
        }
    }

    /**
     * Gets a flag in the user's local storage. Can be used for unlockables in mods, persisting data. Does not save between accounts.
     * Only works if the scenario has already been loaded in (should always work)
     * Safer than accessing localStorage yourself (handles edgecases, makes sure the flag name is unique to your scenario)
     * @param flag 
     * @param value 
     * @category Advanced Modding Functions
     * @returns 
     */
    getLocalStorageFlag(flag : string) : boolean {
        if(this.initialScenarioName == null) {
            console.error("Cannot get local storage flag" + flag + ", scenario name is null");
            return false;
        }

        try {
            const res = localStorage.getItem(this.initialScenarioName + "/" + flag);
            if(res == null) {
                console.error("Flag with name " + flag + " does not exist. Returning false.")
                return false;
            }

            return res == "1";
        }
        catch(e) {
            console.error("Could not get local storage flag:", e);
            return false;
        }
    }
}

export { Engine, GameState };


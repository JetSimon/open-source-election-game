import AnswerEffectType from "../models/AnswerEffectType";
import AnswerModel from "../models/AnswerModel";
import ScenarioModel from "../models/ScenarioModel";
import CandidateController from "./controllers/CandidateController";
import ScenarioController from "./controllers/ScenarioController";
import FinalResultsModel from "../models/FinalResultsModel";
import EndingModel from "../models/EndingModel";
import QuestionModel from "../models/QuestionModel";
import CandidateModel from "../models/CandidateModel";

const fromTct = (x: number) => 2 * x; // We are importing scenarios from TCT rn, sometimes we may need to multiply effects by this to have it apply here

enum GameState {
    Uninitialized,
    CandidateSelection,
    Election
}

class Engine {
    mapUrl : string = "";
    gameState = GameState.Uninitialized;
    sideIndex = 0;
    currentQuestionIndex = 0;
    scenarioController: ScenarioController = new ScenarioController();
    currentScenario: ScenarioModel | null = null;

    runningMateId : number = -1;

    counters : Map<string, number> = new Map();

    waitingToPickState : boolean = false;

    createEnding : null | ((engine : Engine, results : FinalResultsModel) => EndingModel) = null;
    onAnswerPicked : null | ((engine : Engine, answerPicked : AnswerModel) => void) = null;

    loadScenario(newScenario: ScenarioModel) {
        this.currentQuestionIndex = 0;
        this.scenarioController.loadScenario(newScenario, 0);
        this.currentScenario = newScenario;
        this.gameState = GameState.CandidateSelection;
        this.runningMateId = -1;
    }

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

    getSide() {
        return this.scenarioController.model.scenarioSides[this.sideIndex];
    }
    
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

    getPlayerCandidateController(): CandidateController {
        const playerCans = this.scenarioController.getCandidates().filter((x) => x.getId() == this.getSide().playerId);
        if (playerCans.length > 0) {
            return playerCans[0];
        }
        console.error("Could not get player candidate!");
        return new CandidateController(this.makeEmptyCandidateModel());
    }

    getPlayerRunningMateModel(): CandidateModel {
        return this.getCandidateModelById(this.runningMateId);
    }

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

    getCurrentQuestion() {
        if (this.currentQuestionIndex < 0 || this.currentQuestionIndex >= this.scenarioController.getNumberOfQuestions()) {
            return null;
        }

        return this.scenarioController.questions[this.currentQuestionIndex];
    }

    getNumberOfQuestions() {
        return this.scenarioController.getNumberOfQuestions();
    }

    updateStates() {
        for (const stateController of this.scenarioController.stateControllers) {
            stateController.update(this.scenarioController);
        }
    }

    printStateOpinions() {
        console.log(this.getStateOpinionsString());
    }

    getStateOpinionsString() {
        let output = "";

        for (const stateController of this.scenarioController.stateControllers) {
            output += stateController.getOpinionString() + "\n\n";
        }

        return output;
    }

    getStateOpinionString(stateId: number): string {
        const state = this.scenarioController.getStateControllerByStateId(stateId);
        return state != null ? state.getOpinionString() : "";
    }

    getStateOpinionData(stateId: number): Map<number, number> {
        const state = this.scenarioController.getStateControllerByStateId(stateId);
        return state != null ? state.opinions : new Map();
    }

    applyAnswer(selectedAnswer: AnswerModel | null) {
        if (selectedAnswer == null) {
            console.error("Tried to apply a null AnswerModel!");
            return;
        }

        for (const answerEffect of selectedAnswer.answerEffects) {
            try {
                const answerEffectType: AnswerEffectType = AnswerEffectType[answerEffect.answerEffectType as keyof typeof AnswerEffectType];
                if (answerEffectType == AnswerEffectType.Global) {
                    this.scenarioController.changeCandidateGlobalModifier(answerEffect.candidateId, fromTct(answerEffect.amount));
                }
                else if (answerEffectType == AnswerEffectType.Issue) {
                    this.scenarioController.getCandidateByCandidateId(answerEffect.candidateId).changeIssueScore(answerEffect.issueId, fromTct(answerEffect.amount));
                }
                else if (answerEffectType == AnswerEffectType.State) {
                    const state = this.scenarioController.getStateControllerByStateId(answerEffect.stateId);
                    if(state != null) {
                        state.changeCandidateStateModifier(answerEffect.candidateId, fromTct(answerEffect.amount));
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

    nextQuestion() {
        this.currentQuestionIndex++;
    }

    isGameOver() {
        return this.currentQuestionIndex >= this.scenarioController.getNumberOfQuestions();
    }

    getStateIdFromAbbr(abbr: string): number {
        const arr = this.scenarioController.model.states.filter((x) => x.abbr == abbr);
        if (arr.length == 0) {
            return -1;
        }

        return arr[0].id;
    }

    getCandidateControllerByCandidateId(id: number) {
        return this.scenarioController.getCandidateByCandidateId(id);
    }

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
            "electoralVotes": electoralVotes
        };
    }

    getEnding(): EndingModel {
        if(this.createEnding == null) {
            return {
                slides: [{
                    imageUrl: "",
                    endingText: "createEnding is null. Make sure to override createEnding in logic.tsx"
                }]
            }
        }
        return this.createEnding(this, this.getFinalResults());
    }

    getSetOfIdsOfCandidatesWithSides() {
        if (this.currentScenario == null) {
            return new Set<number>();;
        }

        return new Set<number>(this.currentScenario.scenarioSides.map((side) => side.playerId));
    }

    // UTILS FOR CYOA
    insertNewQuestionNext(question : QuestionModel) {
        this.scenarioController.questions.splice(this.currentQuestionIndex + 1, 0, question);
    }

    removeQuestionById(questionId : number) {
        this.scenarioController.questions = this.scenarioController.questions.filter((x) => x.id != questionId);
    }

    // UTILS FOR ENDINGS
    getTotalPopularVotes() {
        let total = 0;
        for (const stateController of this.scenarioController.getStates()) {
            total += stateController.model.popularVotes;
        }
        return total;
    }

    getTotalElectoralVotes() {
        let total = 0;
        for (const stateController of this.scenarioController.getStates()) {
            total += stateController.model.electoralVotes;
        }
        return total;
    }

    getPlayerPv(results : FinalResultsModel) {
        return results.popularVotes.get(this.getPlayerCandidateController().getId()) ?? 0;
    }

    getPlayerEv(results : FinalResultsModel) {
        return results.electoralVotes.get(this.getPlayerCandidateController().getId()) ?? 0;
    }

    playerWonPv(results : FinalResultsModel) {
        return this.getPlayerPv(results) > this.getTotalPopularVotes() / 2;
    }

    playerWonEv(results : FinalResultsModel) {
        return this.getPlayerEv(results) > this.getTotalElectoralVotes() / 2;
    }

    playerEvAtLeast(results : FinalResultsModel, amount : number) {
        return this.getPlayerEv(results) >= amount;
    }
}

export { Engine, GameState };
import AnswerEffectType from "../models/AnswerEffectType";
import AnswerModel from "../models/AnswerModel";
import ScenarioModel from "../models/ScenarioModel";
import CandidateController from "./controllers/CandidateController";
import ScenarioController from "./controllers/ScenarioController";
import FinalResultsModel from "../models/FinalResultsModel";
import EndingModel from "../models/EndingModel";

const fromTct = (x: number) => 2 * x; // We are importing scenarios from TCT rn, sometimes we may need to multiply effects by this to have it apply here

enum GameState {
    Uninitialized,
    CandidateSelection,
    Election
}

class Engine {
    gameState = GameState.Uninitialized;
    sideIndex = 0;
    currentQuestionIndex = 0;
    scenarioController: ScenarioController = new ScenarioController();
    currentScenario: ScenarioModel | null = null;

    loadScenario(newScenario: ScenarioModel) {
        this.currentQuestionIndex = 0;
        this.scenarioController.loadScenario(newScenario, 0);
        this.currentScenario = newScenario;
        this.gameState = GameState.CandidateSelection;
    }

    setScenarioSide(newSideIndex: number) {
        if (this.currentScenario == null) {
            console.error("Cannot side current scenario side, current scenario is null");
            return;
        }

        if (newSideIndex == -1) {
            console.error("Provided side index was -1");
            return;
        }

        this.sideIndex = newSideIndex;
        this.scenarioController.loadScenario(this.currentScenario, this.sideIndex);
        this.gameState = GameState.Election;
        this.updateStates();
    }

    getSide() {
        return this.scenarioController.model.scenarioSides[this.sideIndex];
    }

    getPlayerCandidateController(): CandidateController {
        const playerCans = this.scenarioController.getCandidates().filter((x) => x.getId() == this.getSide().playerId);
        if (playerCans.length > 0) {
            return playerCans[0];
        }
        console.error("Could not get player candidate!");
        return this.scenarioController.getCandidates()[0];
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
        return this.scenarioController.getStateControllerByStateId(stateId).getOpinionString();
    }

    getStateOpinionData(stateId: number): Map<number, number> {
        return this.scenarioController.getStateControllerByStateId(stateId).opinions;
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
                    this.scenarioController.getStateControllerByStateId(answerEffect.stateId).changeCandidateStateModifier(answerEffect.candidateId, fromTct(answerEffect.amount));
                }
            }
            catch (e) {
                console.error("Error while trying to apply answer effect", e, "\neffect:", JSON.stringify(answerEffect));
            }

        }

        this.updateStates();
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

    getCandidateByCandidateId(id: number) {
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

    // TODO: Have ending models stored in ScenarioSideModel instead, and you get them based on conditionals evaluated from there
    getEnding(): EndingModel {
        const results = this.getFinalResults();
        let thisPlayerEv = results.electoralVotes.get(this.getPlayerCandidateController().getId());
        if (thisPlayerEv == undefined) thisPlayerEv = 0;
        const playerWon = thisPlayerEv >= Math.floor(this.getTotalElectoralVotes() / 2);

        return {
            slides: [
                {
                    imageUrl: "https://placehold.co/512x512",
                    endingText: playerWon ? "YOU WON BLA BLA BLA" : "YOU LOST BLA BLA BLA"
                }
            ]
        };
    }

    getSetOfIdsOfCandidatesWithSides() {
        if (this.currentScenario == null) {
            return new Set<number>();;
        }

        return new Set<number>(this.currentScenario.scenarioSides.map((side) => side.playerId));
    }
}

export { Engine, GameState };
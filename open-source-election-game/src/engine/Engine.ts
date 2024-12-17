import AnswerEffectType from "../models/AnswerEffectType";
import AnswerModel from "../models/AnswerModel";
import ScenarioModel from "../models/ScenarioModel";
import CandidateController from "./controllers/CandidateController";
import ScenarioController from "./controllers/ScenarioController";

const MAGIC_TCT_MULTIPLIER = 1; // We are importing scenarios from TCT rn, sometimes we may need to multiply effects by this to have it apply here

class Engine {
    sideIndex = 0;
    currentQuestionIndex = 0;
    scenarioController: ScenarioController = new ScenarioController();

    loadScenario(newScenario: ScenarioModel) {
        this.currentQuestionIndex = 0;
        this.sideIndex = 0; // TODO: Load more than the first side
        this.scenarioController.loadScenario(newScenario, this.sideIndex); 
    }

    getSide() {
        return this.scenarioController.model.scenarioSides[this.sideIndex];
    }

    getPlayerCandidateController() : CandidateController {
        const playerCans = this.scenarioController.getCandidates().filter((x) => x.getId() == this.getSide().playerId);
        if(playerCans.length > 0) {
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

    getStateOpinionString(stateId: number) : string {
        return this.scenarioController.getStateControllerByStateId(stateId).getOpinionString();
    }

    getStateOpinionData(stateId: number) : Map<number, number> {
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
                    this.scenarioController.changeCandidateGlobalModifier(answerEffect.candidateId, answerEffect.amount * MAGIC_TCT_MULTIPLIER);
                }
                else if (answerEffectType == AnswerEffectType.Issue) {
                    this.scenarioController.getCandidateByCandidateId(answerEffect.candidateId).changeIssueScore(answerEffect.issueId, MAGIC_TCT_MULTIPLIER * answerEffect.amount);
                }
                else if (answerEffectType == AnswerEffectType.State) {
                    this.scenarioController.getStateControllerByStateId(answerEffect.stateId).changeCandidateStateModifier(answerEffect.candidateId, MAGIC_TCT_MULTIPLIER *  answerEffect.amount);
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

    getCandidateByCandidateId(id:number) {
        return this.scenarioController.getCandidateByCandidateId(id);
    }
}

export default Engine;
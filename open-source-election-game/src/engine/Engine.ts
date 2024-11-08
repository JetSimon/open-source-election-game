import AnswerEffectType from "../models/AnswerEffectType";
import AnswerEffect from "../models/AnswerEffectModel";
import AnswerModel from "../models/AnswerModel";
import ScenarioModel from "../models/ScenarioModel";
import ScenarioController from "./controllers/ScenarioController";

class Engine {
    currentQuestionIndex = 0;
    scenarioController: ScenarioController = new ScenarioController();

    loadScenario(newScenario: ScenarioModel) {
        this.currentQuestionIndex = 0;
        this.scenarioController.loadScenario(newScenario);
    }

    getCurrentQuestion() {
        if (this.currentQuestionIndex < 0 || this.currentQuestionIndex >= this.scenarioController.model.questions.length) {
            return null;
        }

        return this.scenarioController.model.questions[this.currentQuestionIndex];
    }

    getNumberOfQuestions() {
        return this.scenarioController.model.questions.length;
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

    getStateOpinionString(stateId: string) {
        return this.scenarioController.getStateControllerByStateId(stateId).getOpinionString();
    }

    applyAnswer(selectedAnswer: AnswerModel | null) {
        if (selectedAnswer == null) {
            console.error("Tried to apply a null AnswerModel!");
            return;
        }

        for (const answerEffect of selectedAnswer.answerEffects) {
            const answerEffectType: AnswerEffectType = AnswerEffectType[answerEffect.answerEffectType as keyof typeof AnswerEffectType];
            if (answerEffectType == AnswerEffectType.Global) {
                this.scenarioController.changeCandidateGlobalModifier(answerEffect.candidateId, answerEffect.amount);
            }
            else if (answerEffectType == AnswerEffectType.Issue) {
                this.scenarioController.getCandidateByCandidateId(answerEffect.candidateId).changeIssueScore(answerEffect.targetId, answerEffect.amount);
            }
            else if (answerEffectType == AnswerEffectType.State) {
                this.scenarioController.getStateControllerByStateId(answerEffect.targetId).changeCandidateStateModifier(answerEffect.candidateId, answerEffect.amount);
            }
        }

        this.updateStates();
    }

    nextQuestion() {
        this.currentQuestionIndex++;
    }

    isGameOver() {
        return this.currentQuestionIndex >= this.scenarioController.model.questions.length;
    }
}

export default Engine;
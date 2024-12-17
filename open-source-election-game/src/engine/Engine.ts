import AnswerEffectType from "../models/AnswerEffectType";
import AnswerModel from "../models/AnswerModel";
import ScenarioModel from "../models/ScenarioModel";
import ScenarioController from "./controllers/ScenarioController";

class Engine {
    currentQuestionIndex = 0;
    scenarioController: ScenarioController = new ScenarioController();

    loadScenario(newScenario: ScenarioModel) {
        this.currentQuestionIndex = 0;
        this.scenarioController.loadScenario(newScenario, 0); // TODO: Load more than the first side
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
                    this.scenarioController.changeCandidateGlobalModifier(answerEffect.candidateId, answerEffect.amount);
                }
                else if (answerEffectType == AnswerEffectType.Issue) {
                    this.scenarioController.getCandidateByCandidateId(answerEffect.candidateId).changeIssueScore(answerEffect.issueId, answerEffect.amount);
                }
                else if (answerEffectType == AnswerEffectType.State) {
                    this.scenarioController.getStateControllerByStateId(answerEffect.stateId).changeCandidateStateModifier(answerEffect.candidateId, answerEffect.amount);
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
import ScenarioModel from "../../models/ScenarioModel";
import StateController from "./StateController";
import CandidateController from "./CandidateController";
import IssueScores from "../IssueScores";
import QuestionModel from "../../models/QuestionModel";

class ScenarioController {
    model: ScenarioModel = this.makeEmptyScenarioModel();
    stateControllers: StateController[] = [];
    candidateControllers: CandidateController[] = [];
    issueScores: IssueScores = new IssueScores([]);
    globalModifiers: Map<number, number> = new Map<number, number>();
    questions: QuestionModel[] = [];

    makeEmptyScenarioModel(): ScenarioModel {
        return {
            candidates: [],
            states: [],
            issues: [],
            scenarioSides: []
        };
    }

    loadScenario(model: ScenarioModel, sideIndex: number) {
        this.model = model;
        this.candidateControllers = model.candidates.map((candidateModel) => new CandidateController(candidateModel));
        this.stateControllers = model.states.map((stateModel) => new StateController(this, stateModel));
        this.questions = model.scenarioSides[sideIndex].questions;
        for (const candidateController of this.getCandidates()) {
            this.globalModifiers.set(candidateController.getId(), 0);
        }
    }

    getCandidates() {
        return this.candidateControllers;
    }

    getIssues() {
        return this.model.issues;
    }

    getStates() {
        return this.stateControllers;
    }

    getGlobalModifierForCandidate(candidateId: number) {
        const modifier = this.globalModifiers.get(candidateId);
        if (modifier == undefined) {
            console.error("No candidate with id", candidateId, "when trying to get global modifier");
            return 0;
        }
        return modifier;
    }

    changeCandidateGlobalModifier(candidateId: number, amount: number) {
        this.globalModifiers.set(candidateId, this.getGlobalModifierForCandidate(candidateId) + amount);
    }

    getStateControllerByStateId(stateId: number) {
        return this.stateControllers.filter((state) => state.getId() == stateId)[0];
    }

    getCandidateByCandidateId(candidateId: number) {
        return this.candidateControllers.filter((candidate) => candidate.getId() == candidateId)[0];
    }

    getNumberOfQuestions() {
        return this.questions.length;
    }

    getQuestions() {
        return this.questions;
    }
}

export default ScenarioController;
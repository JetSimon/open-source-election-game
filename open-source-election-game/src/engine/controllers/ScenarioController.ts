import ScenarioModel from "../../models/ScenarioModel";
import StateController from "./StateController";
import CandidateController from "./CandidateController";
import IssueScores from "../IssueScores";
import QuestionModel from "../../models/QuestionModel";
import { shuffleArray } from "../../utils/ArrayUtils";

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
            scenarioSides: [],
            scenarioDescription: "",
            scenarioName: "",
            scenarioImageUrl: ""
        };
    }

    loadScenario(model: ScenarioModel, sideIndex: number) {
        this.model = model;

        this.candidateControllers = model.candidates.filter((candidateModel) => !candidateModel.runningMate).map((candidateModel) => new CandidateController(candidateModel));
        const toRemove = new Set();
        for (const candidateController of this.getCandidates()) {
            for (const issue of model.issues) {
                if (!candidateController.issueScores.hasIssue(issue.id)) {
                    console.error("Candidate with id", candidateController.getId(), "doesn't have an issue score for issue with id", issue.id, "going to remove them for now");
                    toRemove.add(candidateController.getId());
                    break;
                }
            }
        }
        this.candidateControllers = this.candidateControllers.filter((x) => !toRemove.has(x.getId()));
        for (const candidateController of this.getCandidates()) {
            this.globalModifiers.set(candidateController.getId(), 1);
        }

        this.stateControllers = model.states.map((stateModel) => new StateController(this, stateModel));
        this.questions = model.scenarioSides[sideIndex].questions;
        
        for(let i = 0; i < this.questions.length; i++) {
            shuffleArray(this.questions[i].answers);
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
        this.globalModifiers.set(candidateId, Math.max(0, this.getGlobalModifierForCandidate(candidateId) + amount));
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
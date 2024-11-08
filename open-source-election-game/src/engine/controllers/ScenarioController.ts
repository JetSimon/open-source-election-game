import ScenarioModel from "../../models/ScenarioModel";
import StateController from "./StateController";
import CandidateController from "./CandidateController";
import IssueScores from "../IssueScores";

class ScenarioController {
    model: ScenarioModel = this.makeEmptyScenarioModel();
    stateControllers: StateController[] = [];
    candidateControllers: CandidateController[] = [];
    issueScores: IssueScores = new IssueScores([]);
    globalModifiers: Map<string, number> = new Map<string, number>();

    makeEmptyScenarioModel(): ScenarioModel {
        return {
            candidates: [],
            states: [],
            issues: []
        };
    }

    loadScenario(model: ScenarioModel) {
        this.model = model;
        this.candidateControllers = model.candidates.map((candidateModel) => new CandidateController(candidateModel));
        this.stateControllers = model.states.map((stateModel) => new StateController(this, stateModel));

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

    getGlobalModifierForCandidate(candidateId: string) {
        const modifier = this.globalModifiers.get(candidateId);
        if (modifier == undefined) {
            console.error("No candidate with id", candidateId, "when trying to get global modifier");
            return 0;
        }
        return modifier;
    }

    changeCandidateGlobalModifier(candidateId: string, amount: number) {
        this.globalModifiers.set(candidateId, this.getGlobalModifierForCandidate(candidateId) + amount);
    }

    getStateControllerByStateId(stateId: string) {
        return this.stateControllers.filter((state) => state.getId() == stateId)[0];
    }

    getCandidateByCandidateId(candidateId: string) {
        return this.candidateControllers.filter((candidate) => candidate.getId() == candidateId)[0];
    }
}

export default ScenarioController;
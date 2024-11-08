import StateModel from "../../models/StateModel";
import { sumNumberArray } from "../../utils/ArrayUtils";
import IssueScores from "../IssueScores";
import ScenarioController from "./ScenarioController";
import CandidateController from "./CandidateController";

class StateController {
    model: StateModel;
    opinions: Map<string, number>;
    stateModifiers: Map<string, number>;
    issueScores: IssueScores;

    constructor(scenario: ScenarioController, model: StateModel) {
        this.model = model;
        this.issueScores = new IssueScores(this.model.baseIssueScores);
        this.opinions = new Map<string, number>();
        this.stateModifiers = new Map<string, number>();
        this.addCandidates(scenario.getCandidates());
    }

    getId() {
        return this.model.id;
    }

    addCandidates(candidates: CandidateController[]) {
        for (const candidate of candidates) {
            this.opinions.set(candidate.getId(), 0);
            this.stateModifiers.set(candidate.getId(), 0);
        }
    }

    getOpinionForCandidate(candidateId: string): number {
        const opinion: number | undefined = this.opinions.get(candidateId);
        if (opinion == undefined) {
            console.error("State with id", this.model.id, " invalid candidate id of", candidateId);
            return 0;
        }
        return opinion;
    }

    getCandidateStateModifier(candidateId: string): number {
        const modifier: number | undefined = this.stateModifiers.get(candidateId);
        if (modifier == undefined) {
            console.error("State with id", this.model.id, " invalid candidate id of", candidateId);
            return 0;
        }
        return modifier;
    }

    changeCandidateStateModifier(candidateId: string, amount: number) {
        this.stateModifiers.set(candidateId, this.getCandidateStateModifier(candidateId) + amount);
    }

    update(scenario: ScenarioController) {
        for (const candidate of scenario.getCandidates()) {
            let opinion = 0;
            for (const issue of scenario.getIssues()) {
                const candidateWeight = (candidate.issueScores.getWeightForIssue(issue.id) + 1) / 2;
                const stateWeight = (this.issueScores.getWeightForIssue(issue.id) + 1) / 2;
                const differenceOfWeight = Math.sqrt(Math.abs(candidateWeight - stateWeight));
                opinion += differenceOfWeight;
            }
            opinion += this.getCandidateStateModifier(candidate.getId());
            opinion += scenario.getGlobalModifierForCandidate(candidate.getId());
            this.opinions.set(candidate.getId(), opinion);
        }

        const totalOpinion = sumNumberArray(Array.from(this.opinions.values()));
        console.log(totalOpinion);

        for (const candidate of scenario.getCandidates()) {
            this.opinions.set(candidate.getId(), this.getOpinionForCandidate(candidate.getId()) / totalOpinion);
        }
    }

    getOpinionString() {
        let output = this.model.name + " opinions: \n";
        for (const candidateId of this.opinions.keys()) {
            output += candidateId + " - " + this.getOpinionForCandidate(candidateId);
        }
        return output;
    }

    printOpinion() {
        console.log(this.getOpinionString());
    }
}

export default StateController;
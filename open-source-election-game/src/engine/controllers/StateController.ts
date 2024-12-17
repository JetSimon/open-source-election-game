import StateModel from "../../models/StateModel";
import { sumNumberArray } from "../../utils/ArrayUtils";
import IssueScores from "../IssueScores";
import ScenarioController from "./ScenarioController";
import CandidateController from "./CandidateController";
import Engine from "../Engine";
import { hexToRgb, rgbToHex } from "../../utils/ColorUtils";

const RNG = 0.025;

function getRngMultiplier() {
    return 1.0 + ((Math.random() - 0.5) * 2) * RNG;
}

class StateController {
    model: StateModel;
    opinions: Map<number, number>;
    stateModifiers: Map<number, number>;
    issueScores: IssueScores;

    constructor(scenario: ScenarioController, model: StateModel) {
        this.model = model;
        this.issueScores = new IssueScores(this.model.baseIssueScores);
        this.opinions = new Map<number, number>();
        this.stateModifiers = new Map<number, number>();
        this.addCandidates(scenario.getCandidates());
    }

    getId() {
        return this.model.id;
    }

    addCandidates(candidates: CandidateController[]) {
        for (const candidate of candidates) {

            let stateModifier = 1;
            const mods = this.model.baseCandidateStateModifiers.filter((x) => x.candidateId == candidate.getId());
            if(mods.length > 0) {
                stateModifier = mods[0].amount;
            }

            this.opinions.set(candidate.getId(), 0);
            this.stateModifiers.set(candidate.getId(), stateModifier);
        }
    }

    getOpinionForCandidate(candidateId: number): number {
        const opinion: number | undefined = this.opinions.get(candidateId);
        if (opinion == undefined) {
            console.error("State with id", this.model.id, " invalid candidate id of", candidateId);
            return 0;
        }
        return opinion;
    }

    getCandidateStateModifier(candidateId: number): number {
        const modifier: number | undefined = this.stateModifiers.get(candidateId);
        if (modifier == undefined) {
            console.error("State with id", this.model.id, " invalid candidate id of", candidateId);
            return 0;
        }
        return modifier;
    }

    changeCandidateStateModifier(candidateId: number, amount: number) {
        this.stateModifiers.set(candidateId, Math.max(0, this.getCandidateStateModifier(candidateId) + amount));
    }

    update(scenario: ScenarioController) {
        for (const candidate of scenario.getCandidates()) {

            if (candidate.model.runningMate) {
                continue;
            }

            let opinion = 0;
            for (const issue of scenario.getIssues()) {
                const candidateWeight = ((candidate.issueScores.getIssueScoreForIssue(issue.id) + 1) / 2) * candidate.issueScores.getWeightForIssue(issue.id);
                const stateWeight = ((this.issueScores.getIssueScoreForIssue(issue.id) + 1) / 2) * this.issueScores.getWeightForIssue(issue.id);
                const differenceOfWeight = Math.pow(Math.abs(candidateWeight - stateWeight), 2);
                opinion += differenceOfWeight;            
            }

            this.opinions.set(candidate.getId(), opinion);
        }

        const opinions = Array.from(this.opinions.values()).sort();
        const minOpinion = opinions[0];
        const maxOpinion = opinions[opinions.length - 1];
        let totalOpinion = sumNumberArray(opinions);
        const candidates = scenario.getCandidates();
        for (const candidate of candidates) {
            const normed = (this.getOpinionForCandidate(candidate.getId()) - minOpinion) / maxOpinion;
            let newOpinion = totalOpinion == 0 ? 1.0 / candidates.length : normed;
            newOpinion = 1.0 - newOpinion; // Because we calculate distance between issues
            newOpinion *= this.getCandidateStateModifier(candidate.getId());
            newOpinion *= scenario.getGlobalModifierForCandidate(candidate.getId());
            newOpinion *= getRngMultiplier();
            this.opinions.set(candidate.getId(), newOpinion);
        }

        totalOpinion = sumNumberArray(Array.from(this.opinions.values()));
        for (const candidate of candidates) {
            const newOpinion = totalOpinion == 0 ? 1.0 / candidates.length : this.getOpinionForCandidate(candidate.getId()) / totalOpinion;
            this.opinions.set(candidate.getId(), newOpinion);
        }
    }

    getHighestCandidate(engine: Engine): CandidateController | null {
        let highestCandidate: CandidateController | null = null;
        let highestCandidateOpinion = 0;
        for (const candidate of this.opinions.keys()) {
            const opinion = this.getOpinionForCandidate(candidate);
            if (opinion > highestCandidateOpinion) {
                highestCandidate = engine.scenarioController.getCandidateByCandidateId(candidate);
                highestCandidateOpinion = opinion;
            }
        }
        return highestCandidate;
    }

    getOpinionString() {
        let output = this.model.name + " opinions: \n";
        for (const candidateId of this.opinions.keys()) {
            output += candidateId + " - " + this.getOpinionForCandidate(candidateId) + " | ";
        }
        return output;
    }

    printOpinion() {
        console.log(this.getOpinionString());
    }

    getStateColor(engine: Engine, isHovered : boolean): string {
        const highestCandidate = this.getHighestCandidate(engine);
        if (highestCandidate == null) {
            console.error("Could not get state colour. Highest candidate was null");
            return "#000000";
        }

        const highestCandidateOpinion = this.getOpinionForCandidate(highestCandidate.getId());
        const candidateColorRgb = hexToRgb(highestCandidate.model.color);

        for (let i = 0; i < candidateColorRgb.length; i++) {
            candidateColorRgb[i] = 255 * (1 - highestCandidateOpinion) + candidateColorRgb[i] * highestCandidateOpinion;
        }

        if(isHovered) {
            for (let i = 0; i < candidateColorRgb.length; i++) {
                candidateColorRgb[i] *= 0.85 + (Math.sin(Date.now() / 200) * 0.05)
            }
        }

        return rgbToHex(candidateColorRgb[0], candidateColorRgb[1], candidateColorRgb[2]);
    }
}

export default StateController;
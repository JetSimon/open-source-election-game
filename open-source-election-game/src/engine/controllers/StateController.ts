import StateModel from "../models/StateModel";
import { sumNumberArray } from "../../utils/ArrayUtils";
import IssueScores from "../IssueScores";
import ScenarioController from "./ScenarioController";
import CandidateController from "./CandidateController";
import { Engine } from "../Engine";
import { hexToRgb, rgbToHex } from "../../utils/ColorUtils";
import { lerp } from "../../utils/MathUtils";

const RUNNING_MATE_WEIGHT = 3;

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

    applyVisitBonus(candidateId : number) {
        this.changeCandidateStateModifier(candidateId, 0.01);
    }

    addCandidates(candidates: CandidateController[]) {
        for (const candidate of candidates) {

            let stateModifier = 1;
            const mods = this.model.baseCandidateStateModifiers.filter((x) => x.candidateId == candidate.getId());
            if (mods.length > 0) {
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
            console.warn("State with id", this.model.id, " invalid candidate id of", candidateId);
            return 1;
        }
        return modifier;
    }

    changeCandidateStateModifier(candidateId: number, amount: number) {
        this.stateModifiers.set(candidateId, Math.max(0, this.getCandidateStateModifier(candidateId) + amount));
    }

    update(scenario: ScenarioController, rng : number, runningMateMap : Map<number, number>) {
        for (const candidate of scenario.getCandidates()) {

            if (candidate.model.runningMate) {
                continue;
            }

            let opinion = 0;
            for (const issue of scenario.getIssues()) {
                let candidateScore = candidate.issueScores.getIssueScoreForIssue(issue.id);
                candidateScore = candidateScore * Math.abs(candidateScore);

                let stateScore = this.issueScores.getIssueScoreForIssue(issue.id);
                stateScore = stateScore * Math.abs(stateScore);
                const stateWeight = this.issueScores.getWeightForIssue(issue.id);
                
                opinion += 1.225 - Math.abs((candidateScore - stateScore) * stateWeight);

                const candidateId = candidate.getId();
                const runningMateId = runningMateMap.get(candidateId);
                if(runningMateId != undefined) {
                    const runningMate = scenario.getRunningMateControllerById(runningMateId);

                    if(runningMate == undefined) {
                        console.warn("Game thinks that candidate with id " + candidateId + " has running mate with id " + runningMateId + " but controller was not found");
                        continue;
                    }

                    if(!runningMate.issueScores.hasIssue(issue.id)) {
                        continue;
                    }

                    let mateScore = runningMate.issueScores.getIssueScoreForIssue(issue.id);
                    mateScore = mateScore * Math.abs(mateScore);

                    let stateScore = this.issueScores.getIssueScoreForIssue(issue.id);
                    stateScore = stateScore * Math.abs(stateScore);
                    const stateWeight = this.issueScores.getWeightForIssue(issue.id);
                    
                    opinion += this.getCandidateStateModifier(runningMateId) * RUNNING_MATE_WEIGHT * (1.225 - Math.abs((mateScore - stateScore) * stateWeight));
                }
            }

            opinion *= this.getCandidateStateModifier(candidate.getId());
            opinion *= scenario.getGlobalModifierForCandidate(candidate.getId());
            opinion *= this.getRngMultiplier(rng);

            opinion = Math.max(0, opinion);

            this.opinions.set(candidate.getId(), opinion);
        }

        const candidates = scenario.getCandidates();
        const totalOpinion = sumNumberArray(Array.from(this.opinions.values()));
        for (const candidate of candidates) {
            const newOpinion = totalOpinion == 0 ? 1.0 / candidates.length : this.getOpinionForCandidate(candidate.getId()) / totalOpinion;
            this.opinions.set(candidate.getId(), newOpinion);
        }
    }

    getRngMultiplier(rng : number) {
        return 1.0 + ((Math.random() - 0.5) * 2) * rng;
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

    getStateColor(engine: Engine, isHovered: boolean): string {
        const highestCandidate = this.getHighestCandidate(engine);
        if (highestCandidate == null) {
            console.error("Could not get state colour. Highest candidate was null");
            return "#000000";
        }

        const highestCandidateOpinion = this.getOpinionForCandidate(highestCandidate.getId());
        const allOpinions = Array.from(this.opinions.values()).sort();
        const secondHighestOpinion = allOpinions[allOpinions.length - 2];

        const candidateColorRgb = hexToRgb(highestCandidate.model.color);
        
        let majorityAmount = highestCandidateOpinion - secondHighestOpinion;
        majorityAmount = Math.max(0.015, majorityAmount);
        majorityAmount /= 0.1;
        majorityAmount = Math.min(majorityAmount, 1.0);

        for (let i = 0; i < candidateColorRgb.length; i++) {
            candidateColorRgb[i] = lerp(255, candidateColorRgb[i], majorityAmount);
            if (isHovered) {
                candidateColorRgb[i] *= 0.85 + (Math.sin(Date.now() / 200) * 0.05);
                console.log(majorityAmount)
            }
        }
        
        return rgbToHex(candidateColorRgb[0], candidateColorRgb[1], candidateColorRgb[2]);
    }
}

export default StateController;
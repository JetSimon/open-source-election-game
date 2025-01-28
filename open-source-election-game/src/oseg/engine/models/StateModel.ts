import { BaseCandidateStateModifier } from "./BaseCandidateStateModifier";
import { IssueScore } from "./IssueScore";

interface StateModel {
    id: number,
    name: string,
    abbr: string,
    electoralVotes: number,
    popularVotes: number;
    baseIssueScores: IssueScore[];
    baseCandidateStateModifiers: BaseCandidateStateModifier[];
    pollClosingTime? : number;
}

export type { StateModel };


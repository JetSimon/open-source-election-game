import IssueScore from "./IssueScore";
import BaseCandidateStateModifier from "./BaseCandidateStateModifier";

interface StateModel {
    id: number,
    name: string,
    abbr: string,
    electoralVotes: number,
    popularVotes: number;
    baseIssueScores: IssueScore[];
    baseCandidateStateModifiers: BaseCandidateStateModifier[];
}

export default StateModel;
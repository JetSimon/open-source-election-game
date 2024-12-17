import IssueScore from "./IssueScore";

interface StateModel {
    id: number,
    name: string,
    abbr: string,
    electoralVotes: number,
    popularVotes: number;
    baseIssueScores: IssueScore[];
}

export default StateModel;
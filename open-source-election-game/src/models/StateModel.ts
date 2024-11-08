import IssueScore from "./IssueScore";

interface StateModel {
    id: string,
    name: string,
    population: number;
    baseIssueScores: IssueScore[];
}

export default StateModel;
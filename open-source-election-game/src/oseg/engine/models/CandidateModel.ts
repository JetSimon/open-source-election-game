import IssueScore from "./IssueScore";

interface CandidateModel {
    id: number;
    firstName: string;
    lastName: string;
    party: string;
    homeState: string;
    color: string;
    issueScores: IssueScore[];
    description: string;
    imageUrl: string;
    runningMateIds: number[];
    startingGlobalMultiplier: number;
}

export default CandidateModel;
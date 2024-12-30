import IssueScore from "./IssueScore";

interface CandidateModel {
    id: number;
    firstName: string;
    lastName: string;
    party: string;
    homeState: string;
    color: string;
    runningMate: boolean;
    isPlayable: boolean;
    issueScores: IssueScore[];
    description: string;
    imageUrl: string;
    runningMateIds: number[];
}

export default CandidateModel;
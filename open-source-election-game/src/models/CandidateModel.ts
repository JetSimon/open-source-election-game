import IssueScore from "./IssueScore";

interface CandidateModel {
    id: string;
    firstName: string;
    lastName: string;
    party: string;
    homeStateId: string;
    issueScores: IssueScore[];
    color: string;
}

export default CandidateModel;
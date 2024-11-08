import IssueScore from "./IssueScore";

interface CandidateModel {
    id: string;
    firstName: string;
    lastName: string;
    party: string;
    homeStateId: string;
    issueScores: IssueScore[];
}

export default CandidateModel;
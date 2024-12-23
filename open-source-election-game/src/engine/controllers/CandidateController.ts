import CandidateModel from "../../models/CandidateModel";
import IssueScores from "../IssueScores";

class CandidateController {
    model: CandidateModel;
    issueScores: IssueScores;

    constructor(model: CandidateModel) {
        this.model = model;
        this.issueScores = new IssueScores(this.model.issueScores);
    }

    getFullName() {
        return this.model.firstName + " " + this.model.lastName;
    }

    getId() {
        return this.model.id;
    }

    changeIssueScore(issueScoreId: number, amount: number) {
        this.issueScores.changeWeightForIssue(issueScoreId, amount);
    }
}

export default CandidateController;
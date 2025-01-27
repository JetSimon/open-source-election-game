import { Engine } from "../Engine";
import { IssueScores } from "../IssueScores";
import { CandidateModel } from "../models/CandidateModel";

class CandidateController {
    model: CandidateModel;
    issueScores: IssueScores;

    cachedIsRunningMate : boolean | undefined = undefined;

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
        this.issueScores.changeIssueScoreForIssue(issueScoreId, amount);
    }

    isRunningMate(engine : Engine) {
        if(this.cachedIsRunningMate != undefined) {
            return this.cachedIsRunningMate;
        }
        this.cachedIsRunningMate = engine.scenarioController.isCandidateRunningMate(engine, this.getId());
        return this.cachedIsRunningMate;
    }
}

export { CandidateController };


import IssueScore from "../models/IssueScore";

class IssueScores {
    issueScores: Map<number, IssueScore>;

    constructor(issueScoresArray: IssueScore[]) {
        this.issueScores = new Map<number, IssueScore>();
        for (const issueScore of issueScoresArray) {
            if (issueScore.weight < -1 || issueScore.weight > 1) {
                console.error("Issue score for issue with id", issueScore.issueId, "is not betweene [-1, 1]!");
            }
            this.issueScores.set(issueScore.issueId, issueScore);
        }
    }

    getWeightForIssue(issueId: number): number {
        const weight = this.issueScores.get(issueId)?.weight;
        if (weight == null) {
            console.error("No issue score found with id: ", issueId);
            return 0;
        }

        return weight;
    }

    changeWeightForIssue(issueId: number, amount: number) {
        const issueScore = this.issueScores.get(issueId);

        if (issueScore == undefined) {
            console.error("No issue score found with id: ", issueId);
            return;
        }

        issueScore.weight += amount;
    }
}

export default IssueScores;
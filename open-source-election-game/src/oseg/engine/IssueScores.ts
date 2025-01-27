import { IssueScore } from "./models/IssueScore";

/**
 * A data structure that handles holding issue scores. The underlaying DS is a map that maps an issue ID to an IssueScore (see models/IssueScore)
 */
class IssueScores {
    issueScores: Map<number, IssueScore>;

    constructor(issueScoresArray: IssueScore[]) {
        this.issueScores = new Map<number, IssueScore>();
        for (const issueScore of issueScoresArray) {
            if (issueScore.issueScore < -1 || issueScore.issueScore > 1) {
                console.error("Issue score for issue with id", issueScore.issueId, "is not betweene [-1, 1]!");
            }
            this.issueScores.set(issueScore.issueId, issueScore);
        }
    }

    hasIssue(issueId: number) {
        return this.issueScores.has(issueId);
    }

    getWeightForIssue(issueId: number): number {
        const weight = this.issueScores.get(issueId)?.weight;
        if (weight == null) {
            console.error("No issue score or maybe weight found for id: ", issueId);
            return 0;
        }

        return weight;
    }

    getIssueScoreForIssue(issueId: number): number {
        const issueScore = this.issueScores.get(issueId)?.issueScore;
        if (issueScore == null) {
            console.error("No issue score or maybe issue score amount found for id: ", issueId);
            return 0;
        }

        return issueScore;
    }

    changeIssueScoreForIssue(issueId: number, amount: number) {
        const issueScore = this.issueScores.get(issueId);

        if (issueScore == undefined) {
            console.error("No issue score found with id: ", issueId);
            return;
        }

        issueScore.issueScore += amount;
        issueScore.issueScore = Math.min(Math.max(-1, issueScore.issueScore), 1);
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

export { IssueScores };


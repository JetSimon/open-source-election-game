import { CandidateController } from "../controllers/CandidateController";

interface HistoricalResultsModel {
    popularVotes : Record<number, number>;
    electoralVotes : Record<number, number>;
    candidates : CandidateController[];
    totalPopularVotes : number;
    totalElectoralVotes : number;
}

export type { HistoricalResultsModel };
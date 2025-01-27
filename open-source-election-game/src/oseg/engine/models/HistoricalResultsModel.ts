import { CandidateController } from "../controllers/CandidateController";

interface HistoricalResultsModel {
    popularVotes : Map<number, number>;
    electoralVotes : Map<number, number>;
    candidates : CandidateController[];
    totalPopularVotes : number;
    totalElectoralVotes : number;
}

export type { HistoricalResultsModel };
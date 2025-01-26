import { CandidateController } from "../controllers/CandidateController";

interface FinalResultsModel {
    popularVotes : Map<number, number>;
    electoralVotes : Map<number, number>;
    candidates : CandidateController[];
    totalPopularVotes : number;
    totalElectoralVotes : number;
}

export type { FinalResultsModel };

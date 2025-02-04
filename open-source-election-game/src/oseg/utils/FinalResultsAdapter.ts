import { CandidateController } from "../engine/controllers/CandidateController";
import { FinalResultsModel } from "../engine/models/FinalResultsModel";
import { HistoricalResultsModel } from "../engine/models/HistoricalResultsModel";

function convertHistoricalResultsToFinalResults(historical : HistoricalResultsModel, candidates: CandidateController[]): FinalResultsModel {
    const popularVotes = new Map<number, number>();
    const electoralVotes = new Map<number, number>();

    if (historical.popularVotes != null) {
        for (const [candidate, pv] of Object.entries(historical.popularVotes)) {
            popularVotes.set(Number(candidate), pv);
        }
    }

    if (historical.electoralVotes != null) {
        for (const [candidate, ev] of Object.entries(historical.electoralVotes)) {
            electoralVotes.set(Number(candidate), ev);
        }
    }
    
    // Get total pv and ev for converting to FinalResultsModel
    let totalPopularVotes = 0;
    for (const votes of popularVotes.values()) {
        totalPopularVotes += votes;
    }

    let totalElectoralVotes = 0;
    for (const votes of electoralVotes.values()) {
        totalElectoralVotes += votes;
    }

    return {
        popularVotes,
        electoralVotes,
        candidates,
        totalPopularVotes,
        totalElectoralVotes
    };
}

export { convertHistoricalResultsToFinalResults };
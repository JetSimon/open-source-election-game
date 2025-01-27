import { CandidateController } from "../engine/controllers/CandidateController";
import { FinalResultsModel } from "../engine/models/FinalResultsModel";
import { HistoricalResultsModel } from "../engine/models/HistoricalResultsModel";

function convertHistoricalResultsToFinalResults(historical : HistoricalResultsModel, candidates: CandidateController[]): FinalResultsModel {
    const popularVotes = new Map<number, number>();
    const electoralVotes = new Map<number, number>();

    if (historical.popularVotes != null) {
        Object.entries(historical.popularVotes).forEach(([candidate, pv]) => {
            popularVotes.set(Number(candidate), pv);
        });
    }

    if (historical.electoralVotes != null) {
        Object.entries(historical.electoralVotes).forEach(([candidate, ev]) => {
            electoralVotes.set(Number(candidate), ev);
        });
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
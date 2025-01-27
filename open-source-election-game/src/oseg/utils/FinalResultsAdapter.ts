import { FinalResultsModel } from "../engine/models/FinalResultsModel";
import { HistoricalResultsModel } from "../engine/models/HistoricalResultsModel";

function convertHistoricalResultsToFinalResults(historical : HistoricalResultsModel): FinalResultsModel {
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

    return {
        popularVotes,
        electoralVotes,
        candidates: historical.candidates,
        totalPopularVotes: historical.totalPopularVotes,
        totalElectoralVotes: historical.totalElectoralVotes
    };
}

export { convertHistoricalResultsToFinalResults };
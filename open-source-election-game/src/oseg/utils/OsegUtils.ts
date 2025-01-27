import { FinalResultsModel } from "../engine/models/FinalResultsModel";

function resultsAreSame(a : FinalResultsModel, b : FinalResultsModel) {
    const totalVotes = a.totalElectoralVotes == b.totalElectoralVotes && a.totalPopularVotes == b.totalPopularVotes;
    if(!totalVotes) {
        return false;
    }

    for(const candidate of a.candidates) {
        const id = candidate.getId();
        if(a.electoralVotes.get(id) != b.electoralVotes.get(id)) {
            return false;
        }
        if(a.popularVotes.get(id) != b.popularVotes.get(id)) {
            return false;
        }
    }

    for(const candidate of b.candidates) {
        const id = candidate.getId();
        if(a.electoralVotes.get(id) != b.electoralVotes.get(id)) {
            return false;
        }
        if(a.popularVotes.get(id) != b.popularVotes.get(id)) {
            return false;
        }
    }

    return true;
}

export { resultsAreSame };

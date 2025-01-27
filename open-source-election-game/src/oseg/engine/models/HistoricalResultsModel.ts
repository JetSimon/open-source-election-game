interface HistoricalResultsModel {
    popularVotes : Record<number, number>;
    electoralVotes? : Record<number, number>;
}

export type { HistoricalResultsModel };
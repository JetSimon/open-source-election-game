interface AnswerEffectModel {
    answerEffectType: string,
    candidateId: number,
    issueId: number,
    stateId: number,
    amount: number;
    questionId?: number;
    questionEnabled?: boolean;
    weight? : number;
}

export type { AnswerEffectModel };


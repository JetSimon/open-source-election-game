interface AnswerEffect {
    answerEffectType: string,
    candidateId: number,
    issueId: number,
    stateId: number,
    amount: number;
    questionId?: number;
    questionEnabled?: boolean;
}

export default AnswerEffect;
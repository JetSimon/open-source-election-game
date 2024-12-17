interface AnswerEffect {
    answerEffectType: string,
    candidateId: number,
    issueId: number,
    stateId: number,
    amount: number;
}

export default AnswerEffect;
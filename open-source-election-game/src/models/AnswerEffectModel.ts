interface AnswerEffect {
    answerEffectType: string,
    candidateId: string, // Which candidate is affected by this answer?
    targetId: string; // Which issue/state does this answer effect have to do with? Can be empty for Global
    amount: number;
}

export default AnswerEffect;
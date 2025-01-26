enum AnswerEffectType {
    Global, // Global affects global perception of a candidate (- = bad, + = good)
    State, // State affects a specific state's perception of a candidate (- = bad, + = good)
    Issue, // Issue *changes* a candidate's stance on an issue (-/+ not good or bad, just depends on the states you want to align with)
    SetQuestionEnabled, // Sets a question by id to be enabled or not
    TctIssue
}

export { AnswerEffectType };
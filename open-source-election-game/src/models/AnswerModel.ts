import AnswerEffect from "./AnswerEffectModel";

interface AnswerModel {
    description: string;
    feedback: string;
    answerEffects: AnswerEffect[];
}

export default AnswerModel;
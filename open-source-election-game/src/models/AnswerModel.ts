import AnswerEffect from "./AnswerEffectModel";

interface AnswerModel {
    id: number,
    description: string;
    feedback: string;
    answerEffects: AnswerEffect[];
}

export default AnswerModel;
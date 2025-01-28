import { AnswerEffectModel } from "./AnswerEffectModel";

interface AnswerModel {
    id: number,
    description: string;
    feedback: string;
    answerEffects: AnswerEffectModel[];
    enabled?: boolean;
}

export type { AnswerModel };


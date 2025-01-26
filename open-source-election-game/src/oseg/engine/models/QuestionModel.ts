import { AnswerModel } from "./AnswerModel";

interface QuestionModel {
    id: number,
    description: string,
    answers: AnswerModel[];
    keepInPlaceIfQuestionsShuffled: boolean;
    enabled?: boolean;
    onlyEnableAtStartIfRunningMateId?: number;
}

export type { QuestionModel };

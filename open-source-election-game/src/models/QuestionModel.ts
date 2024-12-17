import AnswerModel from "./AnswerModel";

interface QuestionModel {
    id: number,
    description: string,
    answers: AnswerModel[];
    keepInPlaceIfQuestionsShuffled: boolean;
}

export default QuestionModel;
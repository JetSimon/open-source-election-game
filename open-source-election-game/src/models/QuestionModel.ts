import AnswerModel from "./AnswerModel";

interface QuestionModel {
    description: string,
    answers: AnswerModel[];
    keepInPlaceIfQuestionsShuffled: boolean;
}

export default QuestionModel;
import AnswerModel from "../models/AnswerModel";

interface AnswerProps {
    answerId: string;
    answerModel: AnswerModel;
    selectedAnswer: AnswerModel | null;
    setSelectedAnswer: (answerModel: AnswerModel) => void;
}

function Answer(props: AnswerProps) {
    const { answerId, answerModel, selectedAnswer, setSelectedAnswer } = props;

    function isSelected() {
        return answerModel == selectedAnswer;
    }

    function handleOnChange() {
        if (!isSelected()) {
            setSelectedAnswer(answerModel);
        }
    }

    return (
        <div>
            <input id={answerId} onChange={handleOnChange} checked={isSelected()} type="radio"></input>
            <label style={{ "fontWeight": isSelected() ? "bold" : "" }} htmlFor={answerId}>{answerModel.description}</label>
        </div>
    );
}

export default Answer;
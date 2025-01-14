import AnswerModel from "../../engine/models/AnswerModel";

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
        <div className="Answer">
            <input id={answerId} onChange={handleOnChange} checked={isSelected()} type="radio"></input>
            <label style={{ "fontWeight": isSelected() ? "bold" : "" }} htmlFor={answerId} dangerouslySetInnerHTML={{__html:answerModel.description}}></label>
        </div>
    );
}

export default Answer;
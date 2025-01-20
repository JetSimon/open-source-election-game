import AnswerModel from "../../engine/models/AnswerModel";

interface AnswerProps {
    answerId: string;
    answerModel: AnswerModel;
    selectedAnswer: AnswerModel | null;
    setSelectedAnswer: (answerModel: AnswerModel) => void;
    showingFeedbackBox : boolean;
    index : number;
}

function Answer(props: AnswerProps) {
    const { answerId, answerModel, selectedAnswer, setSelectedAnswer, showingFeedbackBox, index } = props;

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
            <input autoFocus={!showingFeedbackBox && index == 0} id={answerId} onChange={handleOnChange} checked={isSelected()} type="radio"></input>
            <label htmlFor={answerId} dangerouslySetInnerHTML={{__html:answerModel.description}}></label>
        </div>
    );
}

export default Answer;
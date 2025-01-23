import { Engine } from "../../engine/Engine";
import AnswerModel from "../../engine/models/AnswerModel";

interface AnswerProps {
    answerId: string;
    answerModel: AnswerModel;
    selectedAnswer: AnswerModel | null;
    setSelectedAnswer: (answerModel: AnswerModel) => void;
    showingFeedbackBox : boolean;
    index : number;
    engine : Engine;
}

function Answer(props: AnswerProps) {
    const { engine, answerId, answerModel, selectedAnswer, setSelectedAnswer, showingFeedbackBox, index } = props;

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
            <label htmlFor={answerId} dangerouslySetInnerHTML={{__html:engine.addTooltips(answerModel.description)}}></label>
        </div>
    );
}

export default Answer;
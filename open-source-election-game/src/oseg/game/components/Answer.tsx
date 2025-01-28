import { Engine } from "../../engine/Engine";
import { AnswerModel } from "../../engine/models/AnswerModel";

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

    const answerDisabled = answerModel.enabled != undefined && !answerModel.enabled;

    return (
        <div className="Answer">
            <input disabled={answerDisabled} autoFocus={!showingFeedbackBox && index == 0} id={answerId} onChange={handleOnChange} checked={isSelected()} type="radio"></input>
            <label style={{opacity: answerDisabled ? 0.66 : 1.0}} htmlFor={answerId} dangerouslySetInnerHTML={{__html:engine.addTooltips(answerModel.description)}}></label>
        </div>
    );
}

export default Answer;
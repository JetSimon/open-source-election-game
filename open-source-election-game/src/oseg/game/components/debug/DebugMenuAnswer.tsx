import AnswerModel from "../../../engine/models/AnswerModel";
import { Engine } from "../../../engine/Engine";
import DebugMenuAnswerEffect from "./DebugMenuAnswerEffect";
import "./Debug.css";

interface DebugMenuAnswerProps {
    engine : Engine;
    answer : AnswerModel;
}

function DebugMenuAnswer(props : DebugMenuAnswerProps) {

    const {answer, engine} = props;

    return (
        <div className="DebugMenuAnswer">
            <p>{answer.description}</p>
            <ul>
                {answer.answerEffects.map((x) => <DebugMenuAnswerEffect answerEffect={x} engine={engine}></DebugMenuAnswerEffect>)}
            </ul>
        </div>
    )
}

export default DebugMenuAnswer;
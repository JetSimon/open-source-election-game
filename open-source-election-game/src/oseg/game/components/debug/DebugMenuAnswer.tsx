import { Engine } from "../../../engine/Engine";
import { AnswerEffectModel } from "../../../engine/models/AnswerEffectModel";
import { AnswerModel } from "../../../engine/models/AnswerModel";
import "./Debug.css";
import DebugMenuAnswerEffect from "./DebugMenuAnswerEffect";

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
                {answer.answerEffects.map((x : AnswerEffectModel) => <DebugMenuAnswerEffect answerEffect={x} engine={engine}></DebugMenuAnswerEffect>)}
            </ul>
        </div>
    )
}

export default DebugMenuAnswer;
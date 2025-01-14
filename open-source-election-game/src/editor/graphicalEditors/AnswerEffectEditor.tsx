import ScenarioModel from "../../oseg/engine/models/ScenarioModel";
import "./AnswerEffectEditor.css";
import AnswerEffectModel from "../../oseg/engine/models/AnswerEffectModel";
import AnswerEffectType from "../../oseg/engine/models/AnswerEffectType";
import GenericEditorInput from "../components/GenericEditorInput";
import AnswerModel from "../../oseg/engine/models/AnswerModel";
interface AnswerEffectEditorProps {
    data: ScenarioModel;
    setData: (data: ScenarioModel) => void;
    answerEffect: AnswerEffectModel;
    associatedAnswer : AnswerModel;
}

const answerEffectTypes = Object.keys(AnswerEffectType).filter((item) => {
    return isNaN(Number(item));
});


function AnswerEffectEditor(props: AnswerEffectEditorProps) {

    const { data, setData, answerEffect, associatedAnswer } = props;

    function updateFieldAndUpdateData<T>(field: string, newValue: T) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const dynamicAnswerEffect = answerEffect as { [k: string]: any; };
        dynamicAnswerEffect[field] = newValue;
        setData(JSON.parse(JSON.stringify(data)));
    }

    const typedAnswerEffectType = AnswerEffectType[answerEffect.answerEffectType as keyof typeof AnswerEffectType];

    function deleteAnswerEffect() {
        associatedAnswer.answerEffects = associatedAnswer.answerEffects.filter((x) => x != answerEffect);
        setData(JSON.parse(JSON.stringify(data)))
    }

    function cloneAnswerEffect() {
        const clone : AnswerEffectModel = {
            answerEffectType: answerEffect.answerEffectType,
            candidateId: answerEffect.candidateId,
            issueId: answerEffect.issueId,
            stateId: answerEffect.stateId,
            amount: answerEffect.amount
        }

        associatedAnswer.answerEffects.push(clone);
        setData(JSON.parse(JSON.stringify(data)))
    }

    return (
        <div className="AnswerEffectEditor">


            <div>
            <label>Answer Effect Type: </label>
            <select onChange={(e) => updateFieldAndUpdateData<string>("answerEffectType", e.target.value)} value={answerEffect.answerEffectType}>
                {answerEffectTypes.map((effectType) => <option key={effectType} value={effectType}>{effectType}</option>)}
            </select>
            </div>
           

            {
                <div>
                    <label>Affected Candidate: </label>
                    <select onChange={(e) => updateFieldAndUpdateData<number>("candidateId", Number(e.target.value))} value={answerEffect.candidateId}>
                        {data.candidates.map((candidate) => <option key={candidate.id} value={candidate.id}>{candidate.firstName} {candidate.lastName}</option>)}
                    </select>
                </div>
            }

            {(typedAnswerEffectType == AnswerEffectType.State) &&
                <div>
                    <label>Affected State: </label>
                    <select onChange={(e) => updateFieldAndUpdateData<number>("stateId", Number(e.target.value))} value={answerEffect.stateId}>
                        {data.states.map((state) => <option value={state.id}>{state.name}</option>)}
                    </select>
                </div>
            }

            { (typedAnswerEffectType == AnswerEffectType.Issue) &&
                <div>
                    <label>Affected Issue: </label>
                    <select onChange={(e) => updateFieldAndUpdateData<number>("issueId", Number(e.target.value))} value={answerEffect.issueId}>
                        {data.issues.map((issue) => <option value={issue.id}>{issue.name}</option>)}
                    </select>
                </div>
            }

            <div>
            <GenericEditorInput label={"Amount: "} type={"number"} defaultValue={answerEffect.amount} onChange={(e) => updateFieldAndUpdateData("amount", Number(e.target.value))}></GenericEditorInput>
            </div>

            <button title="Delete answer effect" className="CircleButton RedButton" onClick={deleteAnswerEffect}>X</button>
            <button title="Clone answer effect" className="CircleButton BlueButton" onClick={cloneAnswerEffect}>📄</button>
            
        </div>
    );
}

export default AnswerEffectEditor;
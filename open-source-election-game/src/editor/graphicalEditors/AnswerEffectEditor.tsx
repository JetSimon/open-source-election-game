import { AnswerEffectModel } from "../../oseg/engine/models/AnswerEffectModel";
import { AnswerEffectType } from "../../oseg/engine/models/AnswerEffectType";
import { AnswerModel } from "../../oseg/engine/models/AnswerModel";
import { ScenarioModel } from "../../oseg/engine/models/ScenarioModel";
import GenericEditorCheckbox from "../components/GenericEditorCheckbox";
import GenericEditorInput from "../components/GenericEditorInput";
import "./AnswerEffectEditor.css";
interface AnswerEffectEditorProps {
    data: ScenarioModel;
    setData: (data: ScenarioModel) => void;
    answerEffect: AnswerEffectModel;
    associatedAnswer : AnswerModel;
    sideIndex : number;
}

const answerEffectTypes = Object.keys(AnswerEffectType).filter((item) => {
    return isNaN(Number(item));
});


function AnswerEffectEditor(props: AnswerEffectEditorProps) {

    const { data, setData, answerEffect, associatedAnswer, sideIndex } = props;

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

    const issues = data.issues.filter((x) => x.id == answerEffect.issueId);
    let stance = "";
    if(issues.length > 0) {
        const issue = issues[0];
        const remappedIssueScore = Math.min(Math.floor(
            ((answerEffect.amount + 1) / 2) * (issue.stances.length)
        ), issue.stances.length - 1);
        stance = issue.stances[remappedIssueScore];
    }
 
    return (
        <div className="EditorBox AnswerEffectEditor">


            <div>
            <label>Answer Effect Type: </label>
            <select onChange={(e) => updateFieldAndUpdateData<string>("answerEffectType", e.target.value)} value={answerEffect.answerEffectType}>
                {answerEffectTypes.map((effectType) => <option key={effectType} value={effectType}>{effectType}</option>)}
            </select>
            </div>
           

            { (typedAnswerEffectType != AnswerEffectType.SetQuestionEnabled) &&
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
                        {data.states.sort((a,b) => a.name.localeCompare(b.name)).map((state) => <option value={state.id}>{state.name}</option>)}
                    </select>
                </div>
            }

            { (typedAnswerEffectType == AnswerEffectType.Issue || typedAnswerEffectType == AnswerEffectType.TctIssue) &&
                <div>
                    <label>Affected Issue: </label>
                    <select onChange={(e) => updateFieldAndUpdateData<number>("issueId", Number(e.target.value))} value={answerEffect.issueId}>
                        {data.issues.map((issue) => <option value={issue.id}>{issue.name}</option>)}
                    </select>
                </div>
            }

            {(typedAnswerEffectType != AnswerEffectType.SetQuestionEnabled && typedAnswerEffectType != AnswerEffectType.TctIssue) &&
                <div>
                <GenericEditorInput label={"Amount"} type={"number"} defaultValue={answerEffect.amount} onChange={(e) => updateFieldAndUpdateData("amount", Number(e.target.value))}></GenericEditorInput>
                </div>
            }

            {(typedAnswerEffectType == AnswerEffectType.TctIssue) &&
                <div className="IssueScoreEditorSlider">
                    <label>Score: </label>
                    <span> ({answerEffect.amount}) ({stance})</span>
                    <br></br>
                    <input step="0.01" type="range" min="-1" max="1" value={answerEffect.amount} onChange={(e) => updateFieldAndUpdateData("amount", Number(e.target.value))}></input>
                </div>
            }
            
            {(typedAnswerEffectType == AnswerEffectType.TctIssue) &&
                <div>
                <GenericEditorInput label={"Weight"} type={"number"} defaultValue={answerEffect.weight ?? 1.0} onChange={(e) => updateFieldAndUpdateData("weight", Number(e.target.value))}></GenericEditorInput>
                </div>
            }
            
            { (typedAnswerEffectType == AnswerEffectType.SetQuestionEnabled) &&
                <div>
                    <label>Question: </label>
                    <select onChange={(e) => updateFieldAndUpdateData<number>("questionId", Number(e.target.value))} value={answerEffect.questionId ?? data.scenarioSides[sideIndex].questions[0].id}>
                        {data.scenarioSides[sideIndex].questions.map((question, index) => <option value={question.id}>{index + 1}. {question.description.slice(0, 30)}...</option>)}
                    </select>
                </div>
            }

            { (typedAnswerEffectType == AnswerEffectType.SetQuestionEnabled) &&
                <div>
                    <GenericEditorCheckbox defaultValue={answerEffect.questionEnabled ?? true} onChange={(e) => updateFieldAndUpdateData<boolean>("questionEnabled", e.target.checked)} label={"Enabled"} ></GenericEditorCheckbox>
                </div>
            }

            <button title="Delete answer effect" className="CircleButton RedButton" onClick={deleteAnswerEffect}>X</button>
            <button title="Clone answer effect" className="CircleButton BlueButton" onClick={cloneAnswerEffect}>📄</button>
            
        </div>
    );
}

export default AnswerEffectEditor;
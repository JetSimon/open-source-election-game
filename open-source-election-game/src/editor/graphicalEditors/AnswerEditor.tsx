import ScenarioModel from "../../oseg/engine/models/ScenarioModel";
import GenericEditorTextArea from "../components/GenericEditorTextArea";
import AnswerModel from "../../oseg/engine/models/AnswerModel";
import AnswerEffectEditor from "./AnswerEffectEditor";
import QuestionModel from "../../oseg/engine/models/QuestionModel";
import "./AnswerEditor.css"

interface AnswerEditorProps {
    data : ScenarioModel;
    setData : (data : ScenarioModel) => void;
    answer : AnswerModel;
    associatedQuestion: QuestionModel;
    sideIndex : number;
}

function AnswerEditor(props : AnswerEditorProps) {

    const {data, setData, answer, associatedQuestion, sideIndex} = props;

    function updateFieldAndUpdateData<T>(field: string, newValue: T) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const dynamicAnswer = answer as { [k: string]: any; };
        dynamicAnswer[field] = newValue;
        setData(JSON.parse(JSON.stringify(data)));
    }

    function deleteAnswer() {
        associatedQuestion.answers = associatedQuestion.answers.filter((x) => x != answer);
        setData(JSON.parse(JSON.stringify(data)));
    }

    function addAnswerEffect() {
        answer.answerEffects.push({
            answerEffectType: "Global",
            candidateId: data.candidates[0]?.id ?? 0,
            issueId: data.issues[0]?.id ?? 0,
            stateId: data.states[0]?.id ?? 0,
            amount: 0
        })
        setData(JSON.parse(JSON.stringify(data)));
    }

    return (
        <div className="AnswerEditor">

            <p style={{fontWeight:"bold"}}>Id: {answer.id}</p>
            
            <button className="RedButton" onClick={deleteAnswer}>Delete</button>

            <GenericEditorTextArea
                defaultValue={answer.description}
                onChange={(e) => updateFieldAndUpdateData<string>("description", e.target.value)}
                label={"Description"}
            />

            <GenericEditorTextArea
                defaultValue={answer.feedback}
                onChange={(e) => updateFieldAndUpdateData<string>("feedback", e.target.value)}
                label={"Feedback"}
            />
            
            <details>
                <summary>Answer Effects</summary>
                <div className="AnswerEffectsHolder">
                    {answer.answerEffects.map(answerEffect => <AnswerEffectEditor sideIndex={sideIndex} setData={setData} data={data} answerEffect={answerEffect} associatedAnswer={answer}></AnswerEffectEditor>)}
                    <button onClick={addAnswerEffect} title="Add answer effect" className="CircleButton GreenButton" style={{borderRadius:"100%", aspectRatio:"1/1"}}>+</button>
                </div>
            </details>
           
        </div>
    )
}

export default AnswerEditor;
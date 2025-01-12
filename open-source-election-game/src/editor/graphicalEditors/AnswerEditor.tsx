import ScenarioModel from "../../oseg/engine/models/ScenarioModel";
import GenericEditorTextArea from "../components/GenericEditorTextArea";
import AnswerModel from "../../oseg/engine/models/AnswerModel";
import AnswerEffectEditor from "./AnswerEffectEditor";

interface AnswerEditorProps {
    data : ScenarioModel;
    setData : (data : ScenarioModel) => void;
    answer : AnswerModel;
}

function AnswerEditor(props : AnswerEditorProps) {

    const {data, setData, answer} = props;

    function updateFieldAndUpdateData<T>(field: string, newValue: T) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const dynamicAnswer = answer as { [k: string]: any; };
        dynamicAnswer[field] = newValue;
        setData(JSON.parse(JSON.stringify(data)));
    }

    return (
        <div style={{margin: "8px", padding: "8px", borderBottom:"1px solid rgba(0,0,0,0.4)"}}>
            <p style={{fontWeight:"bold"}}>Id: {answer.id}</p>
            
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
            
            <div>
                <h3>Answer Effects</h3>
                {answer.answerEffects.map(answerEffect => <AnswerEffectEditor setData={setData} data={data} answerEffect={answerEffect} associatedAnswer={answer}></AnswerEffectEditor>)}
            </div>
        </div>
    )
}

export default AnswerEditor;
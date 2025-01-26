import { Issue } from "../../oseg/engine/models/Issue";
import { ScenarioModel } from "../../oseg/engine/models/ScenarioModel";
import GenericEditorInput from "../components/GenericEditorInput";
import GenericEditorTextArea from "../components/GenericEditorTextArea";

interface IssueEditorProps {
    issue : Issue
    data : ScenarioModel;
    setData : (data : ScenarioModel) => void;
}

function IssueEditor(props : IssueEditorProps) {
    const {issue, data, setData} = props;

    function updateFieldAndUpdateData<T>(field: string, newValue: T) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const dynamicIssue = issue as { [k: string]: any; };
        dynamicIssue[field] = newValue;
        setData(JSON.parse(JSON.stringify(data)));
    }

    function updateStanceFieldAndUpdateData<T>(index : number, field: string, newValue: T) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const dynamicIssue = issue as { [k: string]: any; };
        dynamicIssue[field][index] = newValue;
        setData(JSON.parse(JSON.stringify(data)));
    }

    return (
        <div className="EditorForm EditorBox" style={{ textAlign: "left" }}>
            <h2>{issue.name}</h2>
            <div style={{fontWeight:"bold"}}>Issue Id: {issue.id}</div>
            <GenericEditorInput
                defaultValue={issue.name}
                onChange={(e) => updateFieldAndUpdateData<string>("name", e.target.value)}
                label={"Issue Name"}
                type={"text"}
            />
             <GenericEditorTextArea
                defaultValue={issue.description}
                onChange={(e) => updateFieldAndUpdateData<string>("description", e.target.value)}
                label={"Issue Description"}
            />
            <div style={{fontWeight:"bold"}}>Stances</div>
            {issue.stances.map((stance, index) => {
                return (
                    <div className="EditorBox">
                        <GenericEditorInput
                            defaultValue={stance}
                            onChange={(e) => updateStanceFieldAndUpdateData<string>(index, "stances", e.target.value)}
                            label={"Stance " + (index + 1)}
                            type={"text"}
                        />
                        <GenericEditorTextArea
                            defaultValue={issue.stanceDescriptions[index]}
                            onChange={(e) => updateStanceFieldAndUpdateData<string>(index, "stanceDescriptions", e.target.value)}
                            label={"Stance Description " + (index + 1)}
                        />
                    </div>
                )
            })}
        </div>
       
    )
}

export default IssueEditor;
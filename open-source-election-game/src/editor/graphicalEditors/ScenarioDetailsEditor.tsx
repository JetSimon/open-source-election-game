import ScenarioModel from "../../oseg/engine/models/ScenarioModel";
import GenericEditorCheckbox from "../components/GenericEditorCheckbox";
import GenericEditorInput from "../components/GenericEditorInput";
import GenericEditorTextArea from "../components/GenericEditorTextArea";
import MusicEditor from "./MusicEditor";
import ScenarioThemeEditor from "./ScenarioThemeEditor";

interface ScenarioDetailsEditorProps {
    data : ScenarioModel;
    setData : (data : ScenarioModel) => void;
}

function ScenarioDetailsEditor(props : ScenarioDetailsEditorProps) {

    const {data, setData} = props;

    function updateFieldAndUpdateData<T>(field: string, newValue: T) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const dynamicData = data as { [k: string]: any; };
        dynamicData[field] = newValue;
        setData(JSON.parse(JSON.stringify(data)));
    }

    return (
        <div style={{textAlign:"left"}}>
            <h2>Scenario Details Editor</h2>
            <GenericEditorInput label="Scenario Name" type="text" defaultValue={data.scenarioName} onChange={(e) => updateFieldAndUpdateData<string>("scenarioName", e.target.value)}></GenericEditorInput>
            <GenericEditorInput label="Scenario Image Url" type="text" defaultValue={data.scenarioImageUrl} onChange={(e) => updateFieldAndUpdateData<string>("scenarioImageUrl", e.target.value)}></GenericEditorInput>
            <GenericEditorTextArea label="Scenario Description" defaultValue={data.scenarioDescription} onChange={(e) => updateFieldAndUpdateData<string>("scenarioDescription", e.target.value)}></GenericEditorTextArea>
            <GenericEditorInput label="Credits" type="text" defaultValue={data.credits} onChange={(e) => updateFieldAndUpdateData<string>("credits", e.target.value)}></GenericEditorInput>
            <GenericEditorCheckbox label={"Has State Visits?"} defaultValue={data.hasStateVisits} onChange={(e) => updateFieldAndUpdateData<boolean>("hasStateVisits", e.target.checked)} ></GenericEditorCheckbox>
        
            <h2>Theme Editor</h2>
            <ScenarioThemeEditor data={data} setData={setData} theme={data.theme}></ScenarioThemeEditor>

            <h2>Music Editor</h2>
            <MusicEditor data={data} setData={setData}></MusicEditor>
        </div>
    )
}

export default ScenarioDetailsEditor;
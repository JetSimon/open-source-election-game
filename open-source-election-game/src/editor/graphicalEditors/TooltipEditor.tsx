import { ScenarioModel } from "../../oseg/engine/models/ScenarioModel";
import { Tooltip } from "../../oseg/engine/models/Tooltip";
import GenericEditorInput from "../components/GenericEditorInput";

interface TooltipEditorProps {
    data : ScenarioModel;
    setData : (data : ScenarioModel) => void;
}

function TooltipEditor(props : TooltipEditorProps) {
    const {data, setData} = props;

    function updateFieldAtIndexAndUpdateData<T>(index : number, field: string, newValue: T) {
        if(data.tooltips == undefined) {
            return;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const dynamicTheme = data.tooltips[index] as { [k: string]: any; };
        dynamicTheme[field] = newValue;
        setData(JSON.parse(JSON.stringify(data)));
    }

    function addTooltip() {

        if(data.tooltips == undefined) {
            data.tooltips = [];
        }

        data.tooltips.push({
            key : "",
            value : ""
        });

        setData(JSON.parse(JSON.stringify(data)));
    }

    function deleteTooltip(tooltip : Tooltip) {
        if(data.tooltips == undefined) {
            return;
        }

        data.tooltips = data.tooltips.filter((x) => x != tooltip);
        setData(JSON.parse(JSON.stringify(data)));
    }

    return (
        <div className="EditorBox">
            {data.tooltips != undefined && data.tooltips.map((tooltip, index) => {
                return (
                    <div className="EditorBox">
                        <label>{index + 1}.</label>
                        <GenericEditorInput label="Text" type="text" onChange={(e) => updateFieldAtIndexAndUpdateData<string>(index, "key", e.target.value)} defaultValue={tooltip.key}></GenericEditorInput>
                        <GenericEditorInput label="Tip" type="text" onChange={(e) => updateFieldAtIndexAndUpdateData<string>(index, "value", e.target.value)} defaultValue={tooltip.value}></GenericEditorInput>
                        <button className="RedButton CircleButton" onClick={() => deleteTooltip(tooltip)}>X</button>
                    </div>
                )
            })}
            <div className="EditorNote">A tooltip value can include HTML like an img tag to include an image. You can also customize tooltip appearance using custom css.</div>
            <div className="EditorNote">import  ant: the text a tooltip triggers on IS case sensitive!</div>
            <button onClick={addTooltip} className="GreenButton CircleButton">+</button>
        </div>
    )
}

export default TooltipEditor;
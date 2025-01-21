import { useState } from "react";

interface GenericEditorBulkToolProps {
    label : string;
    defaultValue : number;
    onClick : (n : number) => void;
}

function GenericEditorBulkTool(props : GenericEditorBulkToolProps) {
    const {label, defaultValue, onClick} = props;

    const [input, setInput] = useState(defaultValue);

    const id = label.replace(" ", "");

    return (
        <div className="EditorForm EditorBox GenericEditorComponent">
            <label htmlFor={id}>{label}:</label>
            <input step={0.01} type="number" onChange={(e) => setInput(Number(e.target.value))} value={input} id={id}></input>
            <button onClick={() => onClick(input)} className="GreenButton">Go</button>
        </div>
    )
}

export default GenericEditorBulkTool;
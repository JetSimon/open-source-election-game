interface GenericEditorInputProps {
    label : string;
    type : string;
    defaultValue : string | number;
    onChange : React.ChangeEventHandler<HTMLInputElement>;
}

function GenericEditorInput(props : GenericEditorInputProps) {
    const {label, defaultValue, type, onChange} = props;

    const id = label.replace(" ", "");

    return (
        <div className="GenericEditorComponent">
            <label htmlFor={id}>{label}:</label>
            <input step={0.01} onChange={onChange} type={type} value={defaultValue} id={id}></input>
        </div>
    )
}

export default GenericEditorInput;
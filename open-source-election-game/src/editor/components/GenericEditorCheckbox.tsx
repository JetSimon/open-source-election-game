interface GenericEditorInputProps {
    label : string;
    defaultValue : boolean;
    onChange : React.ChangeEventHandler<HTMLInputElement>;
}

function GenericEditorCheckbox(props : GenericEditorInputProps) {
    const {label, defaultValue, onChange} = props;

    const id = label.replace(" ", "");

    return (
        <div className="GenericEditorComponent">
            <label htmlFor={id}>{label}:</label>
            <input onChange={onChange} type="checkbox" checked={defaultValue} id={id}></input>
        </div>
    )
}

export default GenericEditorCheckbox;
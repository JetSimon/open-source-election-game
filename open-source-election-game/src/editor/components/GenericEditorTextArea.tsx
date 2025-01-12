interface GenericEditorTextAreaProps {
    label : string;
    defaultValue : string;
    onChange : React.ChangeEventHandler<HTMLTextAreaElement>;
}

function GenericEditorTextArea(props : GenericEditorTextAreaProps) {
    const {label, defaultValue, onChange} = props;

    const id = label.replace(" ", "");

    return (
        <div className="GenericEditorComponent">
            <label htmlFor={id}>{label}:</label>
            <br></br>
            <textarea style={{width:"80%"}} rows={8} onChange={onChange} value={defaultValue} id={id}></textarea>
        </div>
    )
}

export default GenericEditorTextArea;
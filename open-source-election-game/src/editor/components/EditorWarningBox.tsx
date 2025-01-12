interface EditorWarningBoxProps {
    onClick : () => void;
    header : string;
    body : string;
    buttonText : string;
    destructiveAction : boolean;
}

function EditorWarningBox(props : EditorWarningBoxProps) {

    const {onClick, header, body, buttonText, destructiveAction} = props;

    return (
        <div className="EditorWarningBox">
                <h3>⚠️ {header} ⚠️</h3>
                <p>{body}</p>
                <button className={destructiveAction ? "RedButton" : "GreenButton"} onClick={onClick}>{buttonText}</button>
        </div>
    )
}

export default EditorWarningBox;
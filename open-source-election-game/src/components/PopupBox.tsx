import "./PopupBox.css"

interface PopupBoxProps {
    title : string;
    body : string;
    buttonText : string;
    isShowing : boolean;
    setIsShowing: (isShowing : boolean) => void;
}

function PopupBox(props : PopupBoxProps) {
    const {title, body, buttonText, isShowing, setIsShowing} = props;
    return (
        <>
        <div className="PopupBoxBackground" style={isShowing ? {} : {display : "none"}}></div>
        <div className="PopupBox" style={isShowing ? {} : {display : "none"}}>
            <h2>{title}</h2>
            <p>
                {body}
            </p>
            <button onClick={() => setIsShowing(false)}>{buttonText}</button>
        </div>
        </>
    );
}

export default PopupBox;
import ThemeModel from "../../engine/models/ThemeModel";
import "./PopupBox.css"

interface PopupBoxProps {
    title : string;
    body : string;
    buttonText : string;
    isShowing : boolean;
    image: string;
    setIsShowing: (isShowing : boolean) => void;
    theme : ThemeModel;
    onClosed : () => void;
}

function PopupBox(props : PopupBoxProps) {
    const {title, body, buttonText, isShowing, setIsShowing, image, theme, onClosed} = props;
    return (
        <>
        <div className="PopupBoxBackground" style={isShowing ? {} : {display : "none"}}></div>
        <div className="PopupBox" style={isShowing ? {backgroundColor : theme.primaryGameWindowColor, color : theme.primaryGameWindowTextColor}  : {display : "none"}}>
            <h2>{title}</h2>
            {image != "" && <img src={image} className="PopupImage"></img>}
            <div className="PopupBoxDesc" dangerouslySetInnerHTML={{__html: body}}></div>
            <button onClick={() => {setIsShowing(false); onClosed()}}>{buttonText}</button>
        </div>
        </>
    );
}

export default PopupBox;
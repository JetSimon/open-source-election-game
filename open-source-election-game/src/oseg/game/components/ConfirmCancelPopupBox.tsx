import ThemeModel from "../../engine/models/ThemeModel";
import "./PopupBox.css"

interface ConfirmCancelPopupBoxProps {
    title : string;
    description : string;
    isShowing : boolean;
    image : string;
    theme : ThemeModel;
    onConfirm : () => void;
    onCancel : () => void;
}

function ConfirmCancelPopupBox(props : ConfirmCancelPopupBoxProps) {
    const { title, description, isShowing, image, theme, onConfirm, onCancel } = props;

    return ( 
        <>
        <div className="PopupBoxBackground" style={isShowing ? {} : {display : "none"}}></div>
        <div className="PopupBox" style={isShowing ? {backgroundColor : theme.primaryGameWindowColor, color : theme.primaryGameWindowTextColor}  : {display : "none"}}>
            <h2>{title}</h2>
            {image != "" && <img src={image} className="PopupImage"></img>}
            <p>{description}</p>
            <button onClick={() => onConfirm()}>Yes</button>
            <button onClick={onCancel}>No</button>
        </div>
        </>
    )
}

export default ConfirmCancelPopupBox;
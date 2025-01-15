import ThemeModel from "../../engine/models/ThemeModel";
import StateController from "../../engine/controllers/StateController";
import "./PopupBox.css"

interface VisitPopupProps {
    title : string;
    state : StateController;
    isShowing : boolean;
    image : string;
    theme : ThemeModel;
    onConfirm : (state: StateController) => void;
    onCancel : () => void;
}

function VisitPopupBox(props : VisitPopupProps) {
    const { title, state, isShowing, image, theme, onConfirm, onCancel } = props;

    return ( 
        <>
        <div className="PopupBoxBackground" style={isShowing ? {} : {display : "none"}}></div>
        <div className="PopupBox" style={isShowing ? {backgroundColor : theme.primaryGameWindowColor, color : theme.primaryGameWindowTextColor}  : {display : "none"}}>
            <h2>{title}</h2>
            {image != "" && <img src={image} className="PopupImage"></img>}
            <p>Are you sure you want to visit {state.model.name}?</p>
            <button onClick={() => onConfirm(state)}>Yes</button>
            <button onClick={onCancel}>No</button>
        </div>
        </>
    )
}

export default VisitPopupBox;
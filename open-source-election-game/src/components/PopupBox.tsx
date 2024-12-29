import "./PopupBox.css"

interface PopupBoxProps {
    title : string;
    body : string;
    buttonText : string;
    isShowing : boolean;
    image: string;
    setIsShowing: (isShowing : boolean) => void;
}

function PopupBox(props : PopupBoxProps) {
    const {title, body, buttonText, isShowing, setIsShowing, image} = props;
    return (
        <>
        <div className="PopupBoxBackground" style={isShowing ? {} : {display : "none"}}></div>
        <div className="PopupBox" style={isShowing ? {} : {display : "none"}}>
            <h2>{title}</h2>
            {image != "" && <img src={image} className="PopupImage"></img>}
            <div dangerouslySetInnerHTML={{__html: body}}></div>
            <button onClick={() => setIsShowing(false)}>{buttonText}</button>
        </div>
        </>
    );
}

export default PopupBox;
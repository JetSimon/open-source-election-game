import { ScenarioModel } from "../oseg/engine/models/ScenarioModel";
import "./ScenarioBox.css";

interface ScenarioBoxProps {
    model : ScenarioModel;
    onClickPlay : () => void;
}

function ScenarioBox(props : ScenarioBoxProps) {

    const {model, onClickPlay} = props;

    return (
        <div className="ScenarioBox">
            <h3 className="ScenarioName">{model.scenarioName}</h3>
            <p className="ScenarioCredits">{model.credits}</p>
            <div className="ScenarioBoxImageHolder">
            <img src={model.scenarioImageUrl}></img>
            </div>
            
            <div className="ScenarioBoxDesc" dangerouslySetInnerHTML={{__html:model.scenarioDescription}}>
            </div>
            <button className="GreenButton" onClick={() => onClickPlay()}>Play</button>
        </div>
    )
}

export default ScenarioBox;
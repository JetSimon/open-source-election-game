import { Engine } from "../engine/Engine";
import "./ElectionDescriptionView.css";
import ThemeModel from "../models/ThemeModel";
interface ElectionDescriptionViewProps {
  engine: Engine;
  setSelectingCandidate : (value : boolean) => void;
  theme: ThemeModel;
}

function ElectionDescriptionView(props: ElectionDescriptionViewProps) {
  const { engine, setSelectingCandidate, theme } = props;

  if(engine.currentScenario == null) {
    return <p>Error: Current scenario is null!</p>
  }

  return (
    <div className="ElectionSelection">
    <h2>{engine.currentScenario.scenarioName}</h2>
    <div style={{backgroundColor:theme.primaryGameWindowColor, color:theme.primaryGameWindowTextColor}} className="ElectionSelectionBox">
      <div className="ElectionInfoArea">
        <img src={engine.currentScenario.scenarioImageUrl}></img>
        <div className="ElectionDescription" dangerouslySetInnerHTML={{__html:engine.currentScenario.scenarioDescription}}>
        </div>
      </div>
    </div>
    <button onClick={() => setSelectingCandidate(true)}>Next</button>
    </div>
  );
}

export default ElectionDescriptionView;

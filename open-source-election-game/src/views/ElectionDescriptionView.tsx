import { Engine } from "../engine/Engine";
import "./ElectionDescriptionView.css";

interface ElectionDescriptionViewProps {
  engine: Engine;
  setSelectingCandidate : (value : boolean) => void;
}

function ElectionDescriptionView(props: ElectionDescriptionViewProps) {
  const { engine, setSelectingCandidate } = props;

  if(engine.currentScenario == null) {
    return <p>Error: Current scenario is null!</p>
  }

  return (
    <div className="ElectionSelection">
    <h2>{engine.currentScenario.scenarioName}</h2>
    <div className="ElectionSelectionBox">
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

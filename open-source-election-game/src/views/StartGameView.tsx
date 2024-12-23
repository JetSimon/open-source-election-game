import { Engine } from "../engine/Engine";
import "./StartGameView.css";

interface StartGameViewProps {
  engine: Engine;
}

function StartGameView(props: StartGameViewProps) {
  const { engine } = props;

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
    </div>
  );
}

export default StartGameView;

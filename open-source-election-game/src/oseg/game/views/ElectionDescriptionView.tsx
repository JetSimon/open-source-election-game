import { Engine } from "../../engine/Engine";
import "./ElectionDescriptionView.css";
import ThemeModel from "../../engine/models/ThemeModel";
interface ElectionDescriptionViewProps {
  engine: Engine;
  setSelectingCandidate : (value : boolean) => void;
  theme: ThemeModel;
  refreshThemeAndMusic : () => void;
}

function ElectionDescriptionView(props: ElectionDescriptionViewProps) {
  const { engine, setSelectingCandidate, theme, refreshThemeAndMusic} = props;

  if(engine.currentScenario == null) {
    return <p>Error: Current scenario is null!</p>
  }

  function next() {
    setSelectingCandidate(true);
    if(engine.onCandidateSelectionStarted != null) {
      engine.onCandidateSelectionStarted(engine);
      refreshThemeAndMusic();
    }
  }

  return (
    <div className="ElectionSelection">
    <div style={{backgroundColor:theme.primaryGameWindowColor, color:theme.primaryGameWindowTextColor}} className="ElectionSelectionBox">
      <div className="ElectionInfoArea">
        <img src={engine.currentScenario.scenarioImageUrl}></img>
        <div className="ElectionDescription" dangerouslySetInnerHTML={{__html:engine.currentScenario.scenarioDescription}}>
        </div>
      </div>
    </div>
    <button style={{backgroundColor:theme.secondaryGameWindowColor, color:theme.secondaryGameWindowTextColor}} onClick={next}>Next</button>
    </div>
  );
}

export default ElectionDescriptionView;

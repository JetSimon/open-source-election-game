import { Engine } from "../../engine/Engine";
import "./ElectionDescriptionView.css";
import ThemeModel from "../../engine/models/ThemeModel";
import { getAllDifficultyValues, getDisplayNameForDifficulty } from "../../engine/models/Difficulty";
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
      <label style={{fontWeight:"bold"}}>Choose your Difficulty: </label>
      <select value={engine.difficulty} onChange={(e) => {engine.difficulty = Number(e.target.value); refreshThemeAndMusic()}}>
        {getAllDifficultyValues().map((d) => <option key={d} value={d}>{getDisplayNameForDifficulty(d)}</option>)}
      </select>
      <div className="ElectionInfoArea">
        <img src={engine.currentScenario.scenarioImageUrl}></img>
        <div className="ElectionDescription" dangerouslySetInnerHTML={{__html:engine.currentScenario.scenarioDescription}}>
        </div>
      </div>
    </div>
    <button autoFocus onClick={next}>{engine.getLocalization("Next")}</button>
    </div>
  );
}

export default ElectionDescriptionView;

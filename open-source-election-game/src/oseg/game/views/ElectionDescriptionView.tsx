import { Engine } from "../../engine/Engine";
import { getAllDifficultyValues, getDisplayNameForDifficulty } from "../../engine/models/Difficulty";
import { ThemeModel } from "../../engine/models/ThemeModel";
import "./ElectionDescriptionView.css";

interface ElectionDescriptionViewProps {
  engine: Engine;
  setSelectingCandidate : (value : boolean) => void;
  theme: ThemeModel;
  refreshThemeAndMusic : () => void;
  isShuffled : boolean;
  setIsShuffled : (b : boolean) => void;
}

function ElectionDescriptionView(props: ElectionDescriptionViewProps) {
  const { engine, setSelectingCandidate, theme, refreshThemeAndMusic, isShuffled, setIsShuffled} = props;

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

  const canBeShuffled = engine.scenarioController.questions.filter((x) => !x.keepInPlaceIfQuestionsShuffled).length > 0;

  return (
    <div style={{backgroundColor:theme.primaryGameWindowColor}}  className="ElectionSelection">
    <div style={{backgroundColor:theme.primaryGameWindowColor, color:theme.primaryGameWindowTextColor}} className="ElectionSelectionBox">
      <label style={{fontWeight:"bold"}}>Choose your Difficulty: </label>
      <select value={engine.difficulty} onChange={(e) => {engine.difficulty = Number(e.target.value); refreshThemeAndMusic()}}>
        {getAllDifficultyValues().map((d) => <option key={d} value={d}>{getDisplayNameForDifficulty(d)}</option>)}
      </select>
      <div className="ElectionInfoArea" style={{backgroundColor:theme.descriptionWindowBackgroundColor}}>
        <img src={engine.currentScenario.scenarioImageUrl}></img>
        <div className="ElectionDescription" dangerouslySetInnerHTML={{__html:engine.currentScenario.scenarioDescription}}>
        </div>
      </div>
    </div>

    {canBeShuffled && <label htmlFor="shuffled" style={{color:theme.primaryGameWindowTextColor}} >{engine.getLocalization("Shuffle Questions?")} </label>}
    {canBeShuffled && <input id="shuffled" type="checkbox" checked={isShuffled} onChange={(e) => {setIsShuffled(e.target.checked); engine.isShuffled = e.target.checked}}></input>}
    {canBeShuffled && <br></br>}

    <button autoFocus onClick={next}>{engine.getLocalization("Next")}</button>
    </div>
  );
}

export default ElectionDescriptionView;

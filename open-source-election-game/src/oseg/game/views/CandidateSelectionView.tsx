import { Engine, GameState } from "../../engine/Engine";
import { useEffect, useState } from "react";
import "./CandidateSelectionView.css";
import CandidateController from "../../engine/controllers/CandidateController";
import CandidateModel from "../../engine/models/CandidateModel";
import CandidateInfoArea from "../components/CandidateInfoArea";
import ThemeModel from "../../engine/models/ThemeModel";
interface CandidateSelectionViewProps {
  engine: Engine;
  setGameState: (state: GameState) => void;
  setSelectingCandidate: (value: boolean) => void;
  theme : ThemeModel;
  onStartButtonPressed : (() => void) | null;
  isShuffled : boolean;
  setIsShuffled : (b : boolean) => void;
}

function CandidateSelectionView(props: CandidateSelectionViewProps) {
  const { engine, setGameState, setSelectingCandidate, theme, onStartButtonPressed, isShuffled, setIsShuffled } = props;

  const [selectedCandidate, setSelectedCandidate] = useState<number>(
    firstCandidateWithSideId()
  );

  const [selectedRunningMate, setSelectedRunningMate] = useState<number>(
    firstRunningMateWithSideId()
  );

  useEffect(() => {
    const candidate = engine.getCandidateControllerByCandidateId(selectedCandidate);
    setSelectedRunningMate(candidate.model.runningMateIds[0]);
  }, [selectedCandidate, engine]);

  function getCandidatesWithSides(): CandidateController[] {
    const candidates: CandidateController[] = [];

    if (engine == null) {
      return candidates;
    }

    const candidatesWithSides: Set<number> =
      engine.getSetOfIdsOfCandidatesWithSides();

    for (const candidate of engine.scenarioController.getCandidates()) {
      if (candidatesWithSides.has(candidate.getId())) {
        candidates.push(candidate);
      }
    }

    return candidates;
  }

  function getRunningMatesForCandidate(candidateId: number) {
    if (engine.currentScenario == null) {
      return [];
    }

    const currentCandidate = engine.getCandidateControllerByCandidateId(candidateId);

    if(currentCandidate == undefined) {
      return [];
    }

    const runningMates = new Set(currentCandidate.model.runningMateIds);

    return engine.currentScenario.candidates.filter((x) => runningMates.has(x.id));
  }

  function firstRunningMateWithSideId(): number {
    const runningMates = getRunningMatesForCandidate(selectedCandidate);
    if (runningMates.length == 0) {
      return -1;
    }
    return runningMates[0].id;
  }


  function firstCandidateWithSideId() {
    const candidates = getCandidatesWithSides();
    return candidates.length == 0 ? -1 : candidates[0].getId();
  }

  function startGame() {
    if (engine.currentScenario == null) {
      return;
    }

    const sides = engine.currentScenario.scenarioSides;
    const sideIndex = sides.map((x) => x.playerId).indexOf(selectedCandidate);
    engine.setScenarioSide(sideIndex, selectedRunningMate, isShuffled);
    setGameState(engine.gameState);
    if(onStartButtonPressed != null) onStartButtonPressed()
  }

  const selectedCandidateController: CandidateController = engine.getCandidateControllerByCandidateId(selectedCandidate);

  if(selectedCandidateController == undefined) {
    return <p>Selected candidate controller is undefined</p>
  }

  const runningMateModel: CandidateModel = engine.getCandidateModelById(selectedRunningMate);

  const canBeShuffled = engine.scenarioController.questions.filter((x) => !x.keepInPlaceIfQuestionsShuffled).length > 0;

  return (
    <div className="CandidateSelection">
      <h2 style={{color:theme.primaryGameWindowTextColor}}>Choose your Candidate</h2>
      <div style={{backgroundColor:theme.primaryGameWindowColor, color:theme.primaryGameWindowTextColor}} className="CandidateSelectionBox">
        <label className="LabelText" htmlFor="candidate">Candidate: </label>
        <select id="candidate" onChange={(e) => setSelectedCandidate(Number.parseInt(e.target.value))}>
          {
            getCandidatesWithSides().map((candidate) => {
              return <option value={candidate.getId()} key={candidate.getId()}>{candidate.getFullName()}</option>;
            })
          }
        </select>
        <CandidateInfoArea candidate={selectedCandidateController.model}></CandidateInfoArea>
      </div>
      <hr></hr>
      <h2 style={{color:theme.primaryGameWindowTextColor}}>Choose your Running Mate</h2>
      <div style={{backgroundColor:theme.primaryGameWindowColor, color:theme.primaryGameWindowTextColor}} className="CandidateSelectionBox">
        <label className="LabelText" htmlFor="runningMate">Running Mate: </label>
        {
          getRunningMatesForCandidate(selectedCandidate).length > 0 &&
          <select id="runningMate" onChange={(e) => setSelectedRunningMate(Number.parseInt(e.target.value))}>
            {
              getRunningMatesForCandidate(selectedCandidate).map((candidate) => {
                return <option value={candidate.id} key={candidate.id}>{candidate.firstName + " " + candidate.lastName}</option>;
              })
            }
          </select>
        }
        <CandidateInfoArea candidate={runningMateModel}></CandidateInfoArea>
      </div>
      {canBeShuffled && <label htmlFor="shuffled" style={{color:theme.primaryGameWindowTextColor}} >Shuffle Questions? </label>}
      {canBeShuffled && <input id="shuffled" type="checkbox" checked={isShuffled} onChange={(e) => setIsShuffled(e.target.checked)}></input>}
      {canBeShuffled && <br></br>}
      <button style={{backgroundColor:theme.secondaryGameWindowColor, color:theme.secondaryGameWindowTextColor}} onClick={() => setSelectingCandidate(false)}>Prev</button>
      <button style={{backgroundColor:theme.secondaryGameWindowColor, color:theme.secondaryGameWindowTextColor}} onClick={startGame}>Start</button>
    </div>
  );
}

export default CandidateSelectionView;

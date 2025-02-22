import { useEffect, useState } from "react";
import { CandidateController } from "../../engine/controllers/CandidateController";
import { Engine } from "../../engine/Engine";
import { CandidateModel } from "../../engine/models/CandidateModel";
import { ThemeModel } from "../../engine/models/ThemeModel";
import CandidateInfoArea from "../components/CandidateInfoArea";
import "./CandidateSelectionView.css";
interface CandidateSelectionViewProps {
  engine: Engine;
  setSelectingCandidate: (value: boolean) => void;
  theme : ThemeModel;
  onStartButtonPressed : (() => void) | null; // For logic js
  afterChooseCandidateAndRunningMate : (sideIndex : number, runningMateId : number) => void;
  canChooseCandidate : boolean;
  canChooseRunningMate : boolean;
}

function CandidateSelectionView(props: CandidateSelectionViewProps) {
  const { engine, setSelectingCandidate, theme, onStartButtonPressed, afterChooseCandidateAndRunningMate, canChooseCandidate, canChooseRunningMate } = props;

  const [choosingRunningMate, setChoosingRunningMate] = useState(!canChooseCandidate);

  const [selectedCandidate, setSelectedCandidate] = useState<number>(
    firstCandidateWithSideId()
  );

  const [selectedRunningMate, setSelectedRunningMate] = useState<number>( () => {
      if(engine.runningMateId != -1) {
        return engine.runningMateId;
      }
      return firstRunningMateWithSideId()
    }
  );

  useEffect(() => {
    const candidate = engine.getCandidateControllerByCandidateId(selectedCandidate);

    if(candidate == undefined) {
      return;
    }

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

    if(afterChooseCandidateAndRunningMate != undefined) {
      afterChooseCandidateAndRunningMate(sideIndex, selectedRunningMate);
    }
    if(onStartButtonPressed != null) onStartButtonPressed()
  }

  const selectedCandidateController: CandidateController = engine.getCandidateControllerByCandidateId(selectedCandidate);

  if(selectedCandidateController == undefined) {
    return <p>Selected candidate controller is undefined</p>
  }

  const runningMateModel: CandidateModel = engine.getCandidateModelById(selectedRunningMate);

  return (
    <div style={{backgroundColor:theme.primaryGameWindowColor}} className="CandidateSelection">

      <h2 style={{color:theme.primaryGameWindowTextColor}}>{!choosingRunningMate ? engine.getLocalization("Choose your Candidate") : engine.getLocalization("Choose your Running Mate")}</h2>
      
      {!choosingRunningMate && <div style={{backgroundColor:theme.primaryGameWindowColor, color:theme.primaryGameWindowTextColor}} className="CandidateSelectionBox">
        <label className="LabelText" htmlFor="candidate">{engine.getLocalization("Candidate")}: </label>
        <select value={selectedCandidate} id="candidate" onChange={(e) => setSelectedCandidate(Number.parseInt(e.target.value))}>
          {
            getCandidatesWithSides().map((candidate) => {
              return <option value={candidate.getId()} key={candidate.getId()}>{candidate.getFullName()}</option>;
            })
          }
        </select>
        <CandidateInfoArea engine={engine} candidate={selectedCandidateController.model} theme={theme}></CandidateInfoArea>
      </div>}

      {choosingRunningMate && <div style={{backgroundColor:theme.primaryGameWindowColor, color:theme.primaryGameWindowTextColor}} className="CandidateSelectionBox">
        <label className="LabelText" htmlFor="runningMate">{engine.getLocalization("Running Mate")}: </label>
        {
          getRunningMatesForCandidate(selectedCandidate).length > 0 &&
          <select value={selectedRunningMate} id="runningMate" onChange={(e) => setSelectedRunningMate(Number.parseInt(e.target.value))}>
            {
              getRunningMatesForCandidate(selectedCandidate).map((candidate) => {
                return <option value={candidate.id} key={candidate.id}>{candidate.firstName + " " + candidate.lastName}</option>;
              })
            }
          </select>
        }
        <CandidateInfoArea engine={engine} candidate={runningMateModel} theme={theme}></CandidateInfoArea>
      </div>}

      {!choosingRunningMate && <button onClick={() => setSelectingCandidate(false)}>{engine.getLocalization("Prev")}</button>}
      {!choosingRunningMate && <button autoFocus onClick={canChooseRunningMate ? () => setChoosingRunningMate(true) : startGame}>{canChooseRunningMate ? engine.getLocalization("Next") : engine.getLocalization("Start")}</button>}

      {canChooseCandidate && choosingRunningMate && <button onClick={() => setChoosingRunningMate(false)}>{engine.getLocalization("Prev")}</button>}
      {choosingRunningMate && <button autoFocus onClick={startGame}>{engine.getLocalization("Start")}</button>}
    </div>
  );
}

export default CandidateSelectionView;

import { Engine, GameState } from "../engine/Engine";
import { useState } from "react";
import "./CandidateSelectionView.css";
import CandidateController from "../engine/controllers/CandidateController";

interface CandidateSelectionViewProps {
  engine: Engine;
  setGameState: (state: GameState) => void;
  setSelectingCandidate : (value : boolean) => void;
}

function CandidateSelectionView(props: CandidateSelectionViewProps) {
  const { engine, setGameState, setSelectingCandidate } = props;

  const [selectedCandidate, setSelectedCandidate] = useState<number>(
    firstCandidateWithSideId()
  );

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
    engine.setScenarioSide(sideIndex);
    setGameState(engine.gameState);
  }

  const selectedCandidateController : CandidateController = engine.getCandidateByCandidateId(selectedCandidate);

  return (
    <div className="CandidateSelection">
    <h2>Choose your Candidate</h2>
    <div className="CandidateSelectionBox">
      <label className="LabelText" htmlFor="candidate">Candidate: </label>
      <select id="candidate" onChange={(e) => setSelectedCandidate(Number.parseInt(e.target.value))}>
        {
          getCandidatesWithSides().map((candidate) => {
            return <option value={candidate.getId()} key={candidate.getId()}>{candidate.getFullName()}</option>
          })
        }
      </select>
      <div className="CandidateInfoArea">
        <img src={selectedCandidateController.model.imageUrl}></img>
        <div className="CandidateDescription" dangerouslySetInnerHTML={{__html:selectedCandidateController.model.description}}>
        </div>
      </div>
    </div>
      <button onClick={() => setSelectingCandidate(false)}>Prev</button>
      <button onClick={startGame}>Start</button>
    </div>
  );
}

export default CandidateSelectionView;

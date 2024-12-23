import { Engine, GameState } from "../engine/Engine";
import { useState } from "react";
import "./CandidateSelectionView.css";
import CandidateController from "../engine/controllers/CandidateController";

interface CandidateSelectionViewProps {
  engine: Engine;
  setGameState: (state: GameState) => void;
}

function CandidateSelectionView(props: CandidateSelectionViewProps) {
  const { engine, setGameState } = props;

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

  return (
    <div className="CandidateSelectionList">
    <h2>Choose your Candidate</h2>
      {getCandidatesWithSides().map((candidate) => {
        return (
          <div key={candidate.getId() + "-holder"}>
            <input
              id={candidate.getId().toString()}
              checked={selectedCandidate == candidate.getId()}
              key={candidate.getId() + "-button"}
              value={candidate.getId()}
              type="radio"
              onChange={() => setSelectedCandidate(candidate.getId())}
            ></input>
            <label
              key={candidate.getId() + "-label"}
              style={{
                fontWeight:
                  selectedCandidate == candidate.getId() ? "bold" : "",
              }}
              htmlFor={candidate.getId().toString()}
            >
              {candidate.getFullName()}
            </label>
          </div>
        );
      })}
      <button onClick={startGame}>Start</button>
    </div>
  );
}

export default CandidateSelectionView;

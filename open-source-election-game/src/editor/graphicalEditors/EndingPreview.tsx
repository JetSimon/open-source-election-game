import { useEffect, useState } from "react";
import { Engine } from "../../oseg/engine/Engine";
import { FinalResultsModel } from "../../oseg/engine/models/FinalResultsModel";
import { ThemeModel } from "../../oseg/engine/models/ThemeModel";
import EndingSlides from "../../oseg/game/components/EndingSlides";
import './EndingPreview.css';

interface EndingPreviewProps {
  engine: Engine;
  theme: ThemeModel;
  initialResults: FinalResultsModel;
}

function EndingPreview(props: EndingPreviewProps) {
  const { engine, theme, initialResults } = props;

  const [changedEV, setChangedEV] = useState<Map<number, number>>(() => 
    new Map(initialResults.electoralVotes)
  );
  
  const [changedPV, setChangedPV] = useState<Map<number, number>>(() => 
    new Map(initialResults.popularVotes)
  );

  const [ending, setEnding] = useState(() => engine.getEnding());
  const [totalPopularVote, setTotalPopularVote] = useState<number>(0);

  // Calculate total popular vote whenever changedPV changes
  useEffect(() => {
    let totalPV = 0;
    for (const candidate of initialResults.candidates) {
      const candidateId = candidate.getId();
      const votes = changedPV.get(candidateId) ?? initialResults.popularVotes.get(candidateId) ?? 0;
      totalPV += votes;
    }
    setTotalPopularVote(totalPV);
  }, [changedPV, initialResults]);

  function switchToCandidate(candidateId: number) {
    engine.scenarioController.setPlayerByCandidateId(candidateId);
    const newEnding = engine.getEnding(changedEV, changedPV);
    setEnding(newEnding);
  };

  const changeEV = (candidateId: number, ev: number) => {
    const newEv = new Map(changedEV);
    newEv.set(candidateId, ev);
    setChangedEV(newEv);
  };

  const changePV = (candidateId: number, pv: number) => {
    const newPv = new Map(changedPV);
    newPv.set(candidateId, pv);
    setChangedPV(newPv);
  };

  function calculatePopularVotePercentage(candidateId: number): number {
    const candidatePV = changedPV.get(candidateId) ?? initialResults.popularVotes.get(candidateId) ?? 0;
    
    if (totalPopularVote === 0) {
      return 0;
    }
    
    return parseFloat(((candidatePV / totalPopularVote) * 100).toFixed(2));
  }

  function generateEnding() {
    setEnding(engine.getEnding(changedEV, changedPV));
  }

  return (
    <div>
      <EndingSlides theme={theme} ending={ending} />
      {initialResults.candidates.map((candidate) => (
        <div className="EndingPreviewInputContainer" key={candidate.getId()}>
          <h4>{candidate.getFullName()}</h4>
          <div>
            <label>EV:</label>
            <input
              type="number"
              value={changedEV.get(candidate.getId()) ?? initialResults.electoralVotes.get(candidate.getId())}
              onChange={(e) => changeEV(candidate.getId(), parseInt(e.target.value))}
            />
          </div>
          <div>
            <label>PV:</label>
            <input
              type="number"
              value={changedPV.get(candidate.getId()) ?? initialResults.popularVotes.get(candidate.getId())}
              onChange={(e) => changePV(candidate.getId(), parseInt(e.target.value))}
            />
          </div>
          <p>{calculatePopularVotePercentage(candidate.getId())}%</p>
          <button onClick={() => switchToCandidate(candidate.getId())}>
            Switch to Candidate
          </button>
        </div>
      ))}
      <div>
        <strong>Total Popular Vote:</strong> {totalPopularVote}
      </div>
      <button onClick={generateEnding}>Generate Ending</button>
    </div>
  );
}

export default EndingPreview;
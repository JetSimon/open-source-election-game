import CandidateController from "../engine/controllers/CandidateController";
import { Engine } from "../engine/Engine";
import "./FinalResults.css";

interface FinalResultsProps {
  engine: Engine;
}

function FinalResults(props: FinalResultsProps) {
  const { engine } = props;
  const results = engine.getFinalResults();

  function getEv(candidate: CandidateController): number {
    const ev = results.electoralVotes.get(candidate.getId());
    return ev == undefined ? -1 : ev;
  }

  function getPv(candidate: CandidateController): number {
    const pv = results.popularVotes.get(candidate.getId());
    return pv == undefined ? -1 : pv;
  }

  return (<div className="FinalResults">
    <h2>Final Numbers</h2>{engine.scenarioController
      .getCandidates()
      .sort((x, y) => getEv(y) - getEv(x) || getPv(y) - getPv(x))
      .map((candidate) => {
        return (
          <div key={candidate.model.id}>
            <p>
              {candidate.model.firstName} {candidate.model.lastName} | PV:{" "}
              {getPv(candidate)} | EV: {getEv(candidate)}
            </p>
          </div>
        );
      })}</div>);
}

export default FinalResults;

import CandidateController from "../../engine/controllers/CandidateController";
import { Engine } from "../../engine/Engine";
import "./FinalResults.css";
import ThemeModel from "../../engine/models/ThemeModel";

interface FinalResultsProps {
  engine: Engine;
  theme: ThemeModel;
}

const numberFormatter = Intl.NumberFormat();

function FinalResults(props: FinalResultsProps) {
  const { engine, theme } = props;
  const results = engine.getFinalResults();

  function getEv(candidate: CandidateController): number {
    const ev = results.electoralVotes.get(candidate.getId());
    return ev == undefined ? -1 : ev;
  }

  function getPv(candidate: CandidateController): number {
    const pv = results.popularVotes.get(candidate.getId());
    return pv == undefined ? -1 : pv;
  }

  return (<div style={{ backgroundColor: theme.primaryGameWindowColor, color: theme.primaryGameWindowTextColor }} className="FinalResults">
    <h2>Final Numbers</h2>
    <table className="ResultsTable">
      <thead style={{backgroundColor:theme.secondaryGameWindowColor, color:theme.secondaryGameWindowTextColor}}>
        <tr>
          <th>Candidate</th>
          <th>Electoral Votes</th>
          <th>Popular Votes</th>
          <th>Popular Vote %</th>
        </tr>
      </thead>
      <tbody>
        {engine.scenarioController
          .getCandidates()
          .sort((x, y) => getEv(y) - getEv(x) || getPv(y) - getPv(x))
          .map((candidate) => {
            const color = candidate.model.color;
            return (
              <tr key={candidate.model.id}>
                <td><span style={{ backgroundColor: color }} className="PollDot"></span> {candidate.getFullName()}</td>
                <td>{numberFormatter.format(getEv(candidate))}</td>
                <td>{numberFormatter.format(getPv(candidate))}</td>
                <td>{(getPv(candidate) / engine.getTotalPopularVotes() * 100).toFixed(2)}%</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  </div>
  );

}

export default FinalResults;

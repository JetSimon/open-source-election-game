import { CandidateController } from "../../engine/controllers/CandidateController";
import { Engine } from "../../engine/Engine";
import { FinalResultsModel } from "../../engine/models/FinalResultsModel";
import { HistoricalResultsModel } from "../../engine/models/HistoricalResultsModel";
import { ThemeModel } from "../../engine/models/ThemeModel";
import "./FinalResults.css";

interface FinalResultsProps {
  results: FinalResultsModel | HistoricalResultsModel;
  engine: Engine;
  theme: ThemeModel;
}

const numberFormatter = Intl.NumberFormat();

function FinalResults(props: FinalResultsProps) {
  const { results, theme, engine } = props;

  function getEv(candidate: CandidateController): number {
    const ev = results.electoralVotes.get(candidate.getId());
    return ev == undefined ? -1 : ev;
  }

  function getPv(candidate: CandidateController): number {
    const pv = results.popularVotes.get(candidate.getId());
    return pv == undefined ? -1 : pv;
  }

  function getPvPercent(candidate: CandidateController): string {
    const pv = getPv(candidate);

    // Calculate total votes if not already given
    let totalVotes = results.totalPopularVotes;
    if (!totalVotes) {
      totalVotes = 0;
      for (const votesForCandidate of results.popularVotes.values()) {
        totalVotes += votesForCandidate;
      }
    }
    
    if (pv === -1 || totalVotes === 0) {
      return "0.00";
    }
    
    const votePercentage = (pv / totalVotes) * 100;

    return votePercentage.toFixed(2);
  }

  const hasEv = results.totalElectoralVotes > 0;

  return (
    <div
      style={{
        backgroundColor: theme.primaryGameWindowColor,
        color: theme.primaryGameWindowTextColor,
      }}
      className="FinalResults"
    >
      <h2>Final Numbers</h2>
      <table className="ResultsTable">
        <thead
          style={{
            backgroundColor: theme.secondaryGameWindowColor,
            color: theme.secondaryGameWindowTextColor,
          }}
        >
          <tr>
            <th>{engine.getLocalization("Candidate")}</th>
            {hasEv && <th>{engine.getLocalization("Electoral Votes")}</th>}
            <th>{engine.getLocalization("Popular Votes")}</th>
            <th>{engine.getLocalization("Popular Vote %")}</th>
          </tr>
        </thead>
        <tbody>
          {results.candidates
            .sort((x, y) => getEv(y) - getEv(x) || getPv(y) - getPv(x))
            .map((candidate) => {
              const color = candidate.model.color;
              return (
                <tr key={candidate.model.id}>
                  <td>
                    <span
                      style={{ backgroundColor: color }}
                      className="PollDot"
                    ></span>{" "}
                    {candidate.getFullName()}
                  </td>
                  {hasEv && <td>{numberFormatter.format(getEv(candidate))}</td>}
                  <td>{numberFormatter.format(getPv(candidate))}</td>
                  <td>{getPvPercent(candidate)}%</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default FinalResults;
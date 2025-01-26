import { CandidateController } from "../../engine/controllers/CandidateController";
import { Engine } from "../../engine/Engine";
import { FinalResultsModel } from "../../engine/models/FinalResultsModel";
import { ThemeModel } from "../../engine/models/ThemeModel";
import "./FinalResults.css";

interface FinalResultsProps {
  results: FinalResultsModel;
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
                  <td>
                    {(
                      (getPv(candidate) / results.totalPopularVotes) *
                      100
                    ).toFixed(2)}
                    %
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default FinalResults;

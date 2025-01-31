import { Engine } from "../../engine/Engine";
import { ThemeModel } from "../../engine/models/ThemeModel";
import "./Tooltip.css";

interface StatePollProps {
  engine: Engine | null;
  theme: ThemeModel;
  evSoFar : Map<number, number>;
  pvSoFar : Map<number, number>;
  completionAmount : number;
}
const numberFormatter = Intl.NumberFormat();

function ResultsPreview(props: StatePollProps) {
  const { completionAmount, engine, theme, evSoFar, pvSoFar } = props;

  if (engine == null) {
    return <div className="StatePoll" style={{ backgroundColor: theme.primaryGameWindowColor, color: theme.primaryGameWindowTextColor }}>Hover over a state see polling</div>;
  }

  function getTally(engine : Engine) {
    let totalPv = 0;
    for(const value of pvSoFar.values()) {
        totalPv += value;
    }


    return engine.scenarioController.getCandidates()
      .sort((a, b) => ((evSoFar.get(b.getId()) ?? 0) - (evSoFar.get(a.getId()) ?? 0)) || ((pvSoFar.get(b.getId()) ?? 0) - (pvSoFar.get(a.getId()) ?? 0)))
      .map((candidate) => {
        const color = candidate.model.color;
        return (
          <div className="StatePollValue" key={candidate.model.id}>
            <div
              style={{ backgroundColor: color }}
              className="PollDot"
            ></div>
            <span style={{ fontWeight: "bold" }}>
              {candidate.model.lastName}
            </span>{" "}
            - {engine.getTotalElectoralVotes() > 0 && <span>{numberFormatter.format(evSoFar.get(candidate.getId()) ?? 0)} / </span>}{((pvSoFar.get(candidate.getId()) ?? 0) / (totalPv == 0 ? 1 : totalPv) * 100).toFixed(2)}%
          </div>
        );
      });
  }

  return (
    <div className="StatePoll" style={{ backgroundColor: theme.primaryGameWindowColor, color: theme.primaryGameWindowTextColor }}>
      <h2>Election Tally</h2>
      <div className="StatePollValueList">
        {getTally(engine)}
      </div>
      
      <div className="EvPvInfo">
        <div>{(completionAmount * 100).toFixed(2)}% Complete</div>
        <div>{engine.getTotalElectoralVotes() > 0 ? Math.ceil(engine.getTotalElectoralVotes() / 2) + 1 : "50%"} to win!</div>
      </div>
    </div>
  );
}

export default ResultsPreview;

import StateController from "../../engine/controllers/StateController";
import { Engine } from "../../engine/Engine";
import ThemeModel from "../../engine/models/ThemeModel";
import "./Tooltip.css";

interface StatePollProps {
  engine: Engine | null;
  stateController: StateController | null;
  theme : ThemeModel;
}

const numberFormatter = Intl.NumberFormat();

function StatePoll(props: StatePollProps) {
  const { stateController, engine, theme } = props;

  if (engine == null || stateController == null) {
    return <div className="StatePoll" style={{backgroundColor:theme.primaryGameWindowColor, color:theme.primaryGameWindowTextColor}}>Hover over a state see polling</div>;
  }

  return (
    <div className="StatePoll" style={{backgroundColor:theme.primaryGameWindowColor, color:theme.primaryGameWindowTextColor}}>
      <h2>{stateController.model.name}</h2>
      <h3>Polls</h3>
      <div className="StatePollValueList">
        {Array.from(stateController.opinions)
          .sort((a, b) => b[1] - a[1])
          .map(([candidateId, opinion]) => {
            const candidate = engine.getCandidateControllerByCandidateId(candidateId);

            if(candidate == null || candidate == undefined) {
              return (<p>Candidate undefined</p>)
            } 

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
                - {(opinion * 100).toFixed(2)}%
              </div>
            );
          })}
      </div>
      <h3>Issue Stances</h3>
      <div className="StateIssues StatePollValueList">
        {engine.scenarioController.getIssues().map((issue) => {
          const issueScore = stateController.issueScores.getIssueScoreForIssue(
            issue.id
          );
          // Remap from -1 to 1 -> 0 -> (issue stance length - 1)
          const remappedIssueScore = Math.floor(
            ((issueScore + 1) / 2) * (issue.stances.length - 1)
          );
          const stance = issue.stances[remappedIssueScore];
          const stanceDescription = issue.stanceDescriptions[remappedIssueScore];

          return (
            <div className="StateIssue StatePollValue" key={issue.id}>
              <div className={issue.description == "" ? "IssueDiv" : "IssueDiv Tooltip"} style={{ fontWeight: "bold" }}>{issue.name}{issue.description != "" && <span className="TooltipText">{issue.description}</span>}</div> - {" "} <div className={stanceDescription == "" ? "IssueDiv" : "IssueDiv Tooltip"}>{stance}{stanceDescription != "" && <span className="TooltipText">{stanceDescription}</span>}</div>
            </div>
          );
        })}
      </div>
      <div className="EvPvInfo">
      {stateController.model.electoralVotes > 0 && <div>Electoral Votes: {numberFormatter.format(stateController.model.electoralVotes)}</div>}
      {stateController.model.popularVotes > 0 && <div>Popular Votes: {numberFormatter.format(stateController.model.popularVotes)}</div>}
      </div>
    </div>
  );
}

export default StatePoll;

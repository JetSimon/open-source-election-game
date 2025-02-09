import { useState } from "react";
import { StateController } from "../../engine/controllers/StateController";
import { Engine } from "../../engine/Engine";
import { ThemeModel } from "../../engine/models/ThemeModel";
import "./Tooltip.css";

interface StatePollProps {
  engine: Engine | null;
  stateController: StateController | null;
  theme: ThemeModel;
}
const numberFormatter = Intl.NumberFormat();

function StatePoll(props: StatePollProps) {
  const { stateController, engine, theme } = props;

  const [showingStateEstimate, setShowingStateEstimate] = useState(true);

  if (engine == null) {
    return <></>;
  }

  if (stateController == null) {
    return (
      <div
        className="StatePoll"
        style={{
          backgroundColor: theme.primaryGameWindowColor,
          color: theme.primaryGameWindowTextColor,
        }}
      >
        {engine.getLocalization("Hover over a state see polling")}
      </div>
    );
  }

  function evEstimate(engine: Engine) {
    const estimate = engine.getFinalResults();

    if (estimate.totalElectoralVotes == 0) {
      return <></>;
    }

    return (
      <div className="StateIssues StatePollValueList">
        {Array.from(estimate.electoralVotes)
          .sort((a, b) => b[1] - a[1])
          .map(([candidateId, evs]) => {
            const candidate =
              engine.getCandidateControllerByCandidateId(candidateId);

            if (candidate == null || candidate == undefined) {
              return <p>Candidate undefined</p>;
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
                - {evs} {engine.getLocalization("EVs")}
              </div>
            );
          })}
      </div>
    );
  }

  function pvEstimate(engine: Engine) {
    const estimate = engine.getFinalResults();

    return Array.from(estimate.popularVotes)
      .sort((a, b) => b[1] - a[1])
      .map(([candidateId, opinion]) => {
        const candidate =
          engine.getCandidateControllerByCandidateId(candidateId);

        if (candidate == null || candidate == undefined) {
          return <p>Candidate undefined</p>;
        }

        const color = candidate.model.color;
        return (
          <div className="StatePollValue" key={candidate.model.id}>
            <div style={{ backgroundColor: color }} className="PollDot"></div>
            <span style={{ fontWeight: "bold" }}>
              {candidate.model.lastName}
            </span>{" "}
            - {((opinion / estimate.totalPopularVotes) * 100).toFixed(2)}%
          </div>
        );
      });
  }

  function stateEstimate(stateController: StateController, engine: Engine) {
    return Array.from(stateController.opinions)
      .sort((a, b) => b[1] - a[1])
      .map(([candidateId, opinion]) => {
        const candidate =
          engine.getCandidateControllerByCandidateId(candidateId);

        if (candidate == null || candidate == undefined) {
          return <p>Candidate undefined</p>;
        }

        const color = candidate.model.color;
        return (
          <div className="StatePollValue" key={candidate.model.id}>
            <div style={{ backgroundColor: color }} className="PollDot"></div>
            <span style={{ fontWeight: "bold" }}>
              {candidate.model.lastName}
            </span>{" "}
            - {(opinion * 100).toFixed(2)}%
          </div>
        );
      });
  }

  return (
    <div
      className="StatePoll"
      style={{
        backgroundColor: theme.primaryGameWindowColor,
        color: theme.primaryGameWindowTextColor,
      }}
    >
      <h2>{stateController.model.name}</h2>
      <h3>{showingStateEstimate ? engine.getLocalization("State Polls") : engine.getLocalization("Overall Polls")} </h3>
      <div className="StatePollValueList">
        {showingStateEstimate
          ? stateEstimate(stateController, engine)
          : pvEstimate(engine)}
      </div>
      {showingStateEstimate && (
        <h3>{engine.getLocalization("Issue Stances")}</h3>
      )}

      {showingStateEstimate ? (
        <div className="StateIssues StatePollValueList">
          {engine.scenarioController.getIssues().map((issue) => {
            const issueScore =
              stateController.issueScores.getIssueScoreForIssue(issue.id);
            // Remap from -1 to 1 -> 0 -> (issue stance length - 1)
            const remappedIssueScore = Math.min(
              Math.floor(((issueScore + 1) / 2) * issue.stances.length),
              issue.stances.length - 1
            );
            const stance = issue.stances[remappedIssueScore];
            const stanceDescription =
              issue.stanceDescriptions[remappedIssueScore];

            return (
              <div className="StateIssue StatePollValue" key={issue.id}>
                <div
                  className={
                    issue.description == "" ? "IssueDiv" : "IssueDiv Tooltip"
                  }
                  style={{ fontWeight: "bold" }}
                >
                  {issue.name}
                  {issue.description != "" && (
                    <span className="TooltipText">{issue.description}</span>
                  )}
                </div>{" "}
                -{" "}
                <div
                  className={
                    stanceDescription == "" ? "IssueDiv" : "IssueDiv Tooltip"
                  }
                >
                  {stance}
                  {stanceDescription != "" && (
                    <span className="TooltipText">{stanceDescription}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        evEstimate(engine)
      )}

      <div className="EvPvInfo">
        {stateController.model.electoralVotes > 0 && (
          <div>
            {engine.getLocalization("Electoral Votes")}:{" "}
            {numberFormatter.format(stateController.model.electoralVotes)}
          </div>
        )}
        {stateController.model.popularVotes > 0 && (
          <div>
            {engine.getLocalization("Popular Votes")}:{" "}
            {numberFormatter.format(stateController.model.popularVotes)}
          </div>
        )}
      </div>
      {engine.counters.size > 0 && (
        <div className="Counters">
          <h3>{engine.getLocalization("Counters")}</h3>
          {Array.from(engine.counters).map((e) => {
            const key = e[0];
            const value = e[1];
            return (
              <div>
                {engine.counterDisplayNames.get(key) ?? key + " - " + value}
              </div>
            );
          })}
        </div>
      )}
      <button
        style={{ fontSize: "x-small" }}
        onClick={() => setShowingStateEstimate(!showingStateEstimate)}
      >
        {showingStateEstimate
          ? engine.getLocalization("Switch to Overall PV/EV Estimate")
          : engine.getLocalization("Switch to State Estimate")}
      </button>
    </div>
  );
}

export default StatePoll;
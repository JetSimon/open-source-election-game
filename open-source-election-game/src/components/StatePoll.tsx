import StateController from "../engine/controllers/StateController";
import Engine from "../engine/Engine";

interface StatePollProps {
    engine : Engine | null;
    stateController : StateController | null;
}

function StatePoll(props : StatePollProps) {
    
    const {stateController, engine} = props;
    
    if(engine == null || stateController == null) {
        return <div className="StatePoll">Hover over a state see polling</div>
    }

    return (
        <div className="StatePoll">
            <h2>{stateController.model.name}</h2>
            <h3>Polls</h3>
            <div className="StatePollValueList">
                {Array.from(stateController.opinions).sort((a, b) => b[1] - a[1]).map(([candidateId, opinion]) => {
                    const candidate = engine.getCandidateByCandidateId(candidateId);
                    const color = candidate.model.color;
                    return <p className="StatePollValue" key={candidate.model.id}><div style={{backgroundColor:color}} className="PollDot"></div><span style={{fontWeight:"bold"}}>{candidate.model.lastName}</span> - {(opinion * 100).toFixed(2)}%</p>
                })}
            </div>
            <h3>Issue Stances</h3>
            <div className="StatePollValueList">
                {engine.scenarioController.getIssues().map((issue) => {
                    const issueScore = stateController.issueScores.getIssueScoreForIssue(issue.id);
                    // Remap from -1 to 1 -> 0 -> (issue stance length - 1)
                    const remappedIssueScore = Math.round(((issueScore + 1) / 2) * (issue.stances.length - 1));
                    const stance = issue.stances[remappedIssueScore];
                    return <div className="StatePollValue" key={issue.id}><span style={{fontWeight:"bold"}}>{issue.name}</span> - {stance}</div>
                })}
            </div>
        </div>
    )
}

export default StatePoll;
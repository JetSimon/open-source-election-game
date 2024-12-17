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
            <h3>{stateController.model.name}</h3>
            <div className="StatePollValueList">
                {Array.from(stateController.opinions).sort((a, b) => b[1] - a[1]).map(([candidateId, opinion]) => {
                    const candidate = engine.getCandidateByCandidateId(candidateId);
                    return <p className="StatePollValue" key={candidate.model.id}><span style={{fontWeight:"bold"}}>{candidate.model.lastName}</span> - {(opinion * 100).toFixed(2)}%</p>
                })}
            </div>
        </div>
    )
}

export default StatePoll;
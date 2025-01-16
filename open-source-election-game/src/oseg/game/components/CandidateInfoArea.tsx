import CandidateModel from "../../engine/models/CandidateModel";
import { Engine } from "../../engine/Engine";

interface CandidateInfoAreaProps {
    candidate : CandidateModel;
    engine : Engine;
}

function CandidateInfoArea(props : CandidateInfoAreaProps) {
    const {candidate, engine} = props;
    return (
        <div className="CandidateInfoArea">
          <img src={candidate.imageUrl}></img>
          <div className="CandidateDescription" >
            <div><span className="CandidateFact">{engine.getLocalization("Name")}: </span>{candidate.firstName} {candidate.lastName}</div>
            {candidate.party != "" && <div><span className="CandidateFact">{engine.getLocalization("Party")}: </span>{candidate.party}</div>}
            {candidate.homeState != "" && <div><span className="CandidateFact">{engine.getLocalization("State")}: </span>{candidate.homeState}</div>}
            <div dangerouslySetInnerHTML={{ __html: candidate.description }}>
          </div>
          </div>
        </div>
    )
}

export default CandidateInfoArea;
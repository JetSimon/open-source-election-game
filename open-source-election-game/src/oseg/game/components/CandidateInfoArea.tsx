import { Engine } from "../../engine/Engine";
import { CandidateModel } from "../../engine/models/CandidateModel";
import { ThemeModel } from "../../engine/models/ThemeModel";

interface CandidateInfoAreaProps {
    candidate : CandidateModel;
    engine : Engine;
    theme : ThemeModel
}

function CandidateInfoArea(props : CandidateInfoAreaProps) {
    const {candidate, engine, theme} = props;
    return (
        <div className="CandidateInfoArea" style={{backgroundColor:theme.descriptionWindowBackgroundColor}}>
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
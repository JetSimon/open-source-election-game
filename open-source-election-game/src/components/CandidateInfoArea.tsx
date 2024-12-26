import CandidateModel from "../models/CandidateModel";

interface CandidateInfoAreaProps {
    candidate : CandidateModel;
}

function CandidateInfoArea(props : CandidateInfoAreaProps) {
    const {candidate} = props;
    return (
        <div className="CandidateInfoArea">
          <img src={candidate.imageUrl}></img>
          <div className="CandidateDescription" >
            <div><span className="CandidateFact">Name: </span>{candidate.firstName} {candidate.lastName}</div>
            <div><span className="CandidateFact">Party: </span>{candidate.party}</div>
            <div><span className="CandidateFact">State: </span>{candidate.homeState}</div>
            <div dangerouslySetInnerHTML={{ __html: candidate.description }}>
          </div>
          </div>
        </div>
    )
}

export default CandidateInfoArea;
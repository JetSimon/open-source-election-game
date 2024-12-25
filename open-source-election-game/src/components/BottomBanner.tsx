import { Engine } from "../engine/Engine";
import "./BottomBanner.css";

interface BottomBannerProps {
  engine: Engine;
}

function BottomBanner(props: BottomBannerProps) {
  const { engine } = props;

  const playerCandidate = engine.getPlayerCandidateController();
  const runningMateModel = engine.getPlayerRunningMateModel();

  return (
    <div className="BottomBanner">
      <img src={playerCandidate.model.imageUrl}></img>
      <div className="BannerNames">
        <p>{playerCandidate.model.lastName}</p>
        <p>{runningMateModel.lastName}</p>
      </div>
      <img src={runningMateModel.imageUrl}></img>
    </div>
  );
}

export default BottomBanner;

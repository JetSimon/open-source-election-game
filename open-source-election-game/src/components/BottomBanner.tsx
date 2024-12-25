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
        <h1>{playerCandidate.model.lastName}</h1>
        <h1>{runningMateModel.lastName}</h1>
      </div>
      <img src={runningMateModel.imageUrl}></img>
    </div>
  );
}

export default BottomBanner;

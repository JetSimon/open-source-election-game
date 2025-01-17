import { Engine } from "../../engine/Engine";
import ThemeModel from "../../engine/models/ThemeModel";
import "./BottomBanner.css";

interface BottomBannerProps {
  engine: Engine;
  theme: ThemeModel;
}

function BottomBanner(props: BottomBannerProps) {
  const { engine, theme } = props;

  const playerCandidate = engine.getPlayerCandidateController();
  const runningMateModel = engine.getPlayerRunningMateModel();

  return (
    <div className="BottomBanner">
      <div className="CandidateImageHolder">
        <img src={playerCandidate.model.imageUrl}></img>
      </div>
      
      <div style={{color:theme.bottomBannerTextColor, backgroundColor:theme.bottomBannerBackgroundColor}} className="BannerNames">
        <p>{playerCandidate.model.lastName}</p>
        <p>{runningMateModel.lastName}</p>
      </div>

      <div className="RunningMateImageHolder">
        <img src={runningMateModel.imageUrl}></img>
      </div>
    </div>
  );
}

export default BottomBanner;

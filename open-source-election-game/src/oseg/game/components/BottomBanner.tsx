import { Engine } from "../../engine/Engine";
import ThemeModel from "../../engine/models/ThemeModel";
import "./BottomBanner.css";

interface BottomBannerProps {
  engine: Engine;
  theme: ThemeModel;
  questionString : string;
}

function BottomBanner(props: BottomBannerProps) {
  const { engine, theme, questionString } = props;

  const playerCandidate = engine.getPlayerCandidateController();
  const runningMateModel = engine.getPlayerRunningMateModel();

  return (
    <div className="BottomBanner">
      <div className="CandidateImageHolder">
        <img src={playerCandidate.model.imageUrl}></img>
      </div>
      
      <div className="BannerNamesBacking">
        <p className="QuestionOf" style={{color:theme.primaryGameWindowTextColor}}>{questionString}</p>
        <div style={{color:theme.bottomBannerTextColor, backgroundColor:theme.bottomBannerBackgroundColor}} className="BannerNames">
          <div>{playerCandidate.model.lastName}</div>
          <div>{runningMateModel.lastName}</div>
        </div>
      </div>

      <div className="RunningMateImageHolder">
        <img src={runningMateModel.imageUrl}></img>
      </div>
    </div>
  );
}

export default BottomBanner;

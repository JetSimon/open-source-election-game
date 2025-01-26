import { Engine } from "../../engine/Engine";
import { ThemeModel } from "../../engine/models/ThemeModel";
import "./BottomBanner.css";

interface BottomBannerProps {
  engine: Engine;
  theme: ThemeModel;
}

function BottomBanner(props: BottomBannerProps) {
  const { engine, theme } = props;

  const questionString = engine.isGameOver() ? "" : "Question " + (engine.currentQuestionNumber) + " of " + engine.getNumberOfEnabledQuestions();

  const playerCandidate = engine.getPlayerCandidateController();
  const runningMateModel = engine.getPlayerRunningMateModel();

  const bannerImageUrl : undefined | string = playerCandidate.model.bannerImageUrl;
  const showBannerImage = bannerImageUrl != undefined && bannerImageUrl.trim() != "";

  return (
    <div className="BottomBannerHolder">
      <div className="BottomBanner">
        <div className="CandidateImageHolder">
          <img src={playerCandidate.model.imageUrl}></img>
        </div>
        
        <div className="BannerNamesBacking">
          <p className="QuestionOf" style={{color:theme.primaryGameWindowTextColor}}>{questionString}</p>
          <div style={{height: showBannerImage ? "auto" : "", color:theme.bottomBannerTextColor, backgroundColor:theme.bottomBannerBackgroundColor}} className="BannerNames">
            {!showBannerImage && <div className="BannerName">{engine.scenarioController.bannerOverrideLine1 ?? playerCandidate.model.lastName}</div>}
            {!showBannerImage && <div className="BannerName">{engine.scenarioController.bannerOverrideLine2 ?? runningMateModel.lastName}</div>}
            {showBannerImage && <img className="BannerImage" src={bannerImageUrl}></img>}
          </div>
        </div>

        <div className="RunningMateImageHolder">
          <img src={runningMateModel.imageUrl}></img>
        </div>
      </div>
    </div>
  );
}

export default BottomBanner;

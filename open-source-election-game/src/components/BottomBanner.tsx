import { Engine } from "../engine/Engine";
import "./BottomBanner.css";

interface BottomBannerProps {
  engine: Engine;
}

function BottomBanner(props: BottomBannerProps) {
  const { engine } = props;

  const playerCandidate = engine.getPlayerCandidateController();

  return (
    <div className="BottomBanner">
      <h1>{playerCandidate.model.lastName}</h1>
    </div>
  );
}

export default BottomBanner;

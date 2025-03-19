import { Engine } from "../../engine/Engine";
import { ThemeModel } from "../../engine/models/ThemeModel";
import "./FurtherReading.css";

interface FurtherReadingProps {
  theme: ThemeModel;
  engine: Engine;
}

function FurtherReading(props: FurtherReadingProps) {
  const { theme, engine } = props;

  if(engine.currentScenario == null) {
    return <p>Error: Current scenario is null!</p>
  }

  return (
    <div 
      style={{
        backgroundColor: theme.primaryGameWindowColor,
        color: theme.primaryGameWindowTextColor,
      }} 
      className="FurtherReading"
    >
      <h2>Further Reading</h2>
      <div className="RecommendedReadingBox" style={{backgroundColor: theme.primaryGameWindowColor}}>
        <div className="FurtherReadingDescription" dangerouslySetInnerHTML={{__html:engine.currentScenario.furtherReading || ""}} />
      </div>
    </div>
  )
}

export default FurtherReading;
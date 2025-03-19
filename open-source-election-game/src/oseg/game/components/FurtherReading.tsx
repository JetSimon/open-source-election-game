import { Engine } from "../../engine/Engine";
import { ThemeModel } from "../../engine/models/ThemeModel";

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
      <div className="FurtherReadingDescription" dangerouslySetInnerHTML={{__html:engine.currentScenario.furtherReading || ""}} />
    </div>
  )
}

export default FurtherReading;
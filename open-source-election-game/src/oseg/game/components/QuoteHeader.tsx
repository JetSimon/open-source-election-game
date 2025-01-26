import { Engine } from "../../engine/Engine";
import { ThemeModel } from "../../engine/models/ThemeModel";
import "./QuoteHeader.css";

interface QuoteHeaderProps {
    engine : Engine;
    theme : ThemeModel;
}

function QuoteHeader(props : QuoteHeaderProps) {

    const {theme, engine} = props;

    if(engine.currentScenario == null) {
        return <p>Loading</p>
    }

    return (
        <div style={{backgroundColor:theme.secondaryGameWindowColor, color:theme.secondaryGameWindowTextColor}} className="QuoteHeader">
            <h2>{engine.currentScenario.scenarioName}</h2>
            {theme.quote != "" && <p>{theme.quote}</p>}
        </div>
    )
}

export default QuoteHeader;
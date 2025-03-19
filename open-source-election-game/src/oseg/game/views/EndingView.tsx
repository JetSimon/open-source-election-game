import { useEffect, useState } from "react";
import { Engine } from "../../engine/Engine";
import { ThemeModel } from "../../engine/models/ThemeModel";
import { convertHistoricalResultsToFinalResults } from "../../utils/FinalResultsAdapter";
import EndingSlides from "../components/EndingSlides";
import FinalResults from "../components/FinalResults";
import ResultsByState from "../components/ResultsByState";
import "./EndingView.css";
import MapView from "./MapView";
import FurtherReading from "../components/FurtherReading";

interface EndingViewProps {
  engine: Engine;
  theme: ThemeModel;
  mapSvg: string;
}

enum EndingTab {
  EndingSlides,
  ResultsByState,
  OverallResultsDetailed,
  Map,
  FurtherReading
}

function EndingView(props: EndingViewProps) {
  const [currentTab, setCurrentTab] = useState<EndingTab>(EndingTab.EndingSlides);
  const { engine, theme, mapSvg } = props;

  const [finalResults, setFinalResults] = useState(() => engine.getFinalResults());
  const [historicalResults, setHistoricalResults] = useState(() => engine.getHistoricalResults());

  // Update results when scenario changes
  useEffect(() => {
    const newFinalResults = engine.getFinalResults();
    setFinalResults(newFinalResults);
    setHistoricalResults(engine.getHistoricalResults());
  }, [engine, engine.scenarioController.model]);

  if (engine == null) {
    return <div>ERROR ENGINE NULL</div>;
  }

  function getTab() {
    if (currentTab == EndingTab.EndingSlides) {
      return (
        <>
          <EndingSlides theme={theme} ending={engine.getEnding()} />
          <FinalResults engine={engine} theme={theme} results={finalResults} />
        </>
      );
    } else if (currentTab == EndingTab.Map) {
      return (
        <MapView
          fullyColored={true}
          theme={theme}
          onStateClicked={null}
          engine={engine}
          mapSvg={mapSvg}
        ></MapView>
      );
    } else if (currentTab == EndingTab.OverallResultsDetailed) {
      return (
        <div style={{color:theme.primaryGameWindowTextColor}}>
          <h2>Results - This Game</h2>
          <FinalResults engine={engine} theme={theme} results={finalResults} />
          {historicalResults && (
            <>
              <h2>Results - Historical</h2>
              <FinalResults engine={engine} theme={theme} results={convertHistoricalResultsToFinalResults(historicalResults, engine.scenarioController.getCandidates())} />
            </>
          )}
        </div> 
      );
    } else if (currentTab == EndingTab.ResultsByState) {
      return <ResultsByState engine={engine} theme={theme}></ResultsByState>;
    } else if (currentTab == EndingTab.FurtherReading) {
      return <FurtherReading engine={engine} theme={theme}></FurtherReading>;
    }
  }

  return (
    <div className="EndingView">
      {getTab()}
      <div>
        <button
          disabled={currentTab == EndingTab.EndingSlides}
          onClick={() => setCurrentTab(EndingTab.EndingSlides)}
        >
          {engine.getLocalization("Slides")}
        </button>
        <button
          disabled={currentTab == EndingTab.Map}
          onClick={() => setCurrentTab(EndingTab.Map)}
        >
          {engine.getLocalization("Map")}
        </button>
        <button
          disabled={currentTab == EndingTab.ResultsByState}
          onClick={() => setCurrentTab(EndingTab.ResultsByState)}
        >
          {engine.getLocalization("Results By State")}
        </button>
        <button 
          disabled={currentTab == EndingTab.FurtherReading} 
          onClick={() => setCurrentTab(EndingTab.FurtherReading)}
        >
          {engine.getLocalization("Further Reading")}
        </button>
        <button
          disabled={currentTab == EndingTab.OverallResultsDetailed}
          onClick={() => setCurrentTab(EndingTab.OverallResultsDetailed)}
        >
          {engine.getLocalization("Overall Results Detailed")}
        </button>
      </div>
    </div>
  );
}

export default EndingView;
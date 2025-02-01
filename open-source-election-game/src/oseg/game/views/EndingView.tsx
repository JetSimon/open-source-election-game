import { useEffect, useState } from "react";
import { Engine } from "../../engine/Engine";
import { ThemeModel } from "../../engine/models/ThemeModel";
import { convertHistoricalResultsToFinalResults } from "../../utils/FinalResultsAdapter";
import EndingSlides from "../components/EndingSlides";
import FinalResults from "../components/FinalResults";
import ResultsByState from "../components/ResultsByState";
import "./EndingView.css";
import MapView from "./MapView";

interface EndingViewProps {
  engine: Engine;
  theme: ThemeModel;
  mapSvg: string;
  preview?: boolean;
}

enum EndingTab {
  EndingSlides,
  ResultsByState,
  OverallResultsDetailed,
  Map,
}

function EndingView(props: EndingViewProps) {
  const [currentTab, setCurrentTab] = useState<EndingTab>(
    EndingTab.EndingSlides
  );
  const { engine, theme, mapSvg, preview } = props;

  const [finalResults, setFinalResults] = useState(() => engine.getFinalResults());
  const [historicalResults, setHistoricalResults] = useState(() => engine.getHistoricalResults());

  // Update results when scenario changes
  useEffect(() => {
    setFinalResults(engine.getFinalResults());
    setHistoricalResults(engine.getHistoricalResults());
  }, [engine, engine.scenarioController.model]);

  if (engine == null) {
    return <div>ERROR ENGINE NULL</div>;
  }

  function getTab() {
    if (currentTab == EndingTab.EndingSlides) {
      return (
        <>
          {preview ? (
            <>
              <h2>preview</h2>
              {finalResults.candidates.map((candidate) => (
                <div className="EndingAdjustVotesContainer">
                  <h4>{candidate.getFullName()}</h4>
                  <div>
                    <label htmlFor={`${candidate.getFullName()} EV`}>EV:</label>
                    <input
                      type="number"
                      id={`${candidate.getFullName()} EV`}
                    />
                  </div>
                  <div>
                    <label htmlFor={`${candidate.getFullName()} PV`}>PV:</label>
                    <input
                      type="number"
                      id={`${candidate.getFullName()} PV`}
                    />
                  </div>
                </div>
              ))}
              <EndingSlides theme={theme} engine={engine}></EndingSlides>
              <FinalResults
                engine={engine}
                theme={theme}
                results={finalResults}
              ></FinalResults>
            </>
          ) : (
            <>
              <EndingSlides theme={theme} engine={engine}></EndingSlides>
              <FinalResults
                engine={engine}
                theme={theme}
                results={finalResults}
              ></FinalResults>
            </>
          )}
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

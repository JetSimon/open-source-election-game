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
  const [currentTab, setCurrentTab] = useState<EndingTab>(EndingTab.EndingSlides);
  const { engine, theme, mapSvg, preview } = props;

  const [finalResults, setFinalResults] = useState(() => engine.getFinalResults());
  const [historicalResults, setHistoricalResults] = useState(() => engine.getHistoricalResults());

  // Store candidateIds : changed EVs/PVs for preview
  const [changedEV, setChangedEV] = useState<Map<number, number>>(new Map());
  const [changedPV, setChangedPV] = useState<Map<number, number>>(new Map());

  // Temporary stores so users can change the input
  const [tempEV, setTempEV] = useState<Map<number, number>>(new Map());
  const [tempPV, setTempPV] = useState<Map<number, number>>(new Map());

  // Switches to candidate chosen
  const switchToCandidate = (candidateId: number) => {
    engine.scenarioController.setPlayerByCandidateId(candidateId);
    const newFinalResults = engine.getFinalResults();
    setFinalResults(newFinalResults);
  }

  // Update results when scenario changes
  useEffect(() => {
    const newFinalResults = engine.getFinalResults();
    setHistoricalResults(engine.getHistoricalResults());
    setFinalResults(newFinalResults);
    
    // Sets initial PV and EV so changedEV and changedPV aren't empty from start
    const initialPv = new Map<number, number>();
    const initialEv = new Map<number, number>();

    for (const candidate of newFinalResults.candidates) {
      const candidateId = candidate.getId();

      const pv = newFinalResults.popularVotes.get(candidateId) ?? 0;
      const ev = newFinalResults.electoralVotes.get(candidateId) ?? 0;
      
      initialPv.set(candidateId, pv);
      initialEv.set(candidateId, ev);
    }

    setChangedPV(initialPv);
    setChangedEV(initialEv);
    setTempPV(initialPv);
    setTempEV(initialEv);
  }, [engine, engine.scenarioController.model]);

  if (engine == null) {
    return <div>ERROR ENGINE NULL</div>;
  }

  const handleEVChange = (candidateId: number, ev: number) => {
    const newEV = new Map(tempEV);
    newEV.set(candidateId, ev);
    setTempEV(newEV);
  };

  const handlePVChange = (candidateId: number, pv: number) => {
    const newPV = new Map(tempPV);
    newPV.set(candidateId, pv);
    setTempPV(newPV);
  };

  const handleGenerateEnding = () => {
    setChangedEV(tempEV);
    setChangedPV(tempPV);
  };

  function getTab() {
    if (currentTab == EndingTab.EndingSlides) {
      return (
        <>
          {preview ? (
            <>
              {finalResults.candidates.map((candidate) => (
                <div className="EndingAdjustVotesContainer" key={candidate.getId()}>
                  <h4>{candidate.getFullName()}</h4>
                  <div>
                    <label htmlFor={`${candidate.getFullName()}EV`}>EV:</label>
                    <input
                      type="number"
                      id={`${candidate.getFullName()}EV`}
                      value={tempEV.get(candidate.getId()) ?? finalResults.electoralVotes.get(candidate.getId())}
                      onChange={(e) => handleEVChange(candidate.getId(), parseInt(e.target.value))}
                    />
                  </div>
                  <div>
                    <label htmlFor={`${candidate.getFullName()}PV`}>PV:</label>
                    <input
                      type="number"
                      id={`${candidate.getFullName()}PV`}
                      value={tempPV.get(candidate.getId()) ?? finalResults.popularVotes.get(candidate.getId())}
                      onChange={(e) => handlePVChange(candidate.getId(), parseInt(e.target.value))}
                    />
                  </div>
                  <button onClick={() => switchToCandidate(candidate.getId())}>Switch to Candidate</button>
                </div>
              ))}
              <button onClick={handleGenerateEnding}>Generate Ending</button>
              <EndingSlides theme={theme} engine={engine} changedEV={changedEV} changedPV={changedPV}></EndingSlides>
              <FinalResults
                engine={engine}
                theme={theme}
                results={finalResults}
                changedEV={changedEV}
                changedPV={changedPV}
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
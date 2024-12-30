import { Engine } from "../../engine/Engine";
import FinalResults from "../components/FinalResults";
import EndingSlides from "../components/EndingSlides";
import ThemeModel from "../../engine/models/ThemeModel";
import "./EndingView.css";
import MapView from "./MapView";
import { useState } from "react";

interface EndingViewProps {
  engine: Engine;
  theme: ThemeModel;
  mapSvg: string;
}

enum EndingTab {
  EndingSlides,
  Results,
  Map
}

function EndingView(props: EndingViewProps) {

  const [currentTab, setCurrentTab] = useState<EndingTab>(EndingTab.EndingSlides);
  const { engine, theme, mapSvg } = props;

  if (engine == null) {
    return <div>ERROR ENGINE NULL</div>;
  }

  function getTab() {
    if (currentTab == EndingTab.EndingSlides) {
      return (
        <>
          <EndingSlides theme={theme} engine={engine}></EndingSlides>
          <FinalResults theme={theme} engine={engine}></FinalResults>
        </>
      );
    }
    else if (currentTab == EndingTab.Map) {
      return <MapView theme={theme} onStateClicked={null} engine={engine} mapSvg={mapSvg}></MapView>;
    }
    else if (currentTab == EndingTab.Results) {
      return <FinalResults theme={theme} engine={engine}></FinalResults>;
    }
  }

  return (
    <div className="EndingView">
      {getTab()}
      <div>
        <button disabled={currentTab == EndingTab.EndingSlides} onClick={() => setCurrentTab(EndingTab.EndingSlides)}>Slides</button>
        <button disabled={currentTab == EndingTab.Map} onClick={() => setCurrentTab(EndingTab.Map)}>Map</button>
        <button disabled={currentTab == EndingTab.Results} onClick={() => setCurrentTab(EndingTab.Results)}>Detailed Results</button>
      </div>
    </div>
  );
}

export default EndingView;

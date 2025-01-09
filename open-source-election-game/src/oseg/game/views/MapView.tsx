import { useEffect, useRef, useState } from "react";
import { Engine } from "../../engine/Engine";
import "external-svg-loader";
import StateController from "../../engine/controllers/StateController";
import StatePoll from "../components/StatePoll";
import "./MapView.css";
import ThemeModel from "../../engine/models/ThemeModel";

interface MapViewProps {
  engine: Engine;
  onStateClicked : ((state : StateController) => void) | null;
  theme : ThemeModel;
  mapSvg : string;
}

function MapView(props: MapViewProps) {
  const { engine, onStateClicked, theme, mapSvg } = props;
  const mapRef = useRef<SVGSVGElement>(null);
  const [currentState, setCurrentState] = useState<StateController | null>(
    null
  );

  useEffect(() => {
    function updateMapColors() {
      if (mapRef == null || mapRef.current == null) {
        return;
      }
      for (const stateController of engine.scenarioController.getStates()) {
        const statePath = mapRef.current.getElementById(
          stateController.model.abbr
        ) as SVGPathElement;
        if (statePath == null) {
          console.error(
            "No state on map found with abbr",
            stateController.model.abbr
          );
          continue;
        }

        statePath.style.fill = stateController.getStateColor(
          engine,
          currentState != null &&
            currentState.model.id == stateController.model.id
        );
      }
    }

    const mapUpdate = setInterval(updateMapColors, 25);

    return () => {
      clearInterval(mapUpdate);
    };
  }, [engine, currentState, mapSvg]);

  function onMouseMove(e: React.MouseEvent) {
    if (e.target == null) {
      return;
    }

    const hoverId = (e.target as SVGPathElement).id;
    if (hoverId != "") {
      const id = engine.getStateIdFromAbbr(hoverId);
      const state = engine.scenarioController.getStateControllerByStateId(id);

      if(state != null) {
        setCurrentState(state);
      }
    }
  }

  function onClick(e: React.MouseEvent) {
    if (e.target == null) {
      return;
    }

    const clickId = (e.target as SVGPathElement).id;
    const state : StateController | null = engine.scenarioController.getStateControllerByStateId(engine.getStateIdFromAbbr(clickId));
    if(state != null && onStateClicked != null) {
      onStateClicked(state);
    }
    else {
      console.log("Clicked map SVG but path id didn't get a valid state. Path id:", clickId);
    }
  }

  const mapUri = "data:image/svg+xml," + encodeURIComponent(mapSvg); 

  return (
    <div className="MapView">
      <svg
        className="Map"
        ref={mapRef}
        data-src={mapUri}
        data-unique-ids="disabled"
        data-js="enabled"
        onMouseMove={onMouseMove}
        onClick={onClick}
        fill="currentColor"
        style={{
          color: "red",
          stroke: "black"
        }}
      />

      <StatePoll theme={theme} engine={engine} stateController={currentState}></StatePoll>
    </div>
  );
}

export default MapView;

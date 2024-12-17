import { useEffect, useRef, useState } from "react";
import Engine from "../engine/Engine";
import "external-svg-loader";
import StateController from "../engine/controllers/StateController";
import StatePoll from "../components/StatePoll";
import "./MapView.css"

interface MapViewProps {
  engine: Engine;
  mapUrl: string;
}

function MapView(props: MapViewProps) {
  const { engine, mapUrl } = props;
  const mapRef = useRef<SVGSVGElement>(null);
  const [currentState, setCurrentState] = useState<StateController | null>(null);

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

        statePath.style.fill = stateController.getStateColor(engine, (currentState != null && currentState.model.id == stateController.model.id));
      }
      
    }

    const mapUpdate = setInterval(updateMapColors, 25);

    return () => {
      clearInterval(mapUpdate);
    };
  }, [engine, currentState]);

  function onMouseMove(e : React.MouseEvent) {

    if(e.target == null) {
      return;
    }

    const hoverId = (e.target as SVGPathElement).id;
    if (hoverId != "") {
      const id = engine.getStateIdFromAbbr(hoverId);
      setCurrentState(engine.scenarioController.getStateControllerByStateId(id));
    }
  }

  return (
    <div className="MapView">
      <svg
        className="Map"
        ref={mapRef}
        data-src={mapUrl}
        data-unique-ids="disabled"
        data-js="enabled"
        onMouseMove={onMouseMove}
        fill="currentColor"
        width="800px"
        height="500px"
        style={{
          color: "red",
          stroke: "black",
        }}
      />

      <StatePoll engine={engine} stateController={currentState}></StatePoll>
    </div>
  );
}

export default MapView;

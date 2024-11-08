import { useEffect, useRef, useState } from "react";
import Engine from "../engine/Engine";
import "external-svg-loader";

interface MapViewProps {
    engine: Engine;
    mapUrl: string;
}

function MapView(props: MapViewProps) {
    const { engine, mapUrl } = props;
    const mapRef = useRef(null);
    const [stateInfoString, setStateInfoString] = useState("Hover over a state to see");

    useEffect(() => {
        function updateMapColors() {
            if (mapRef == null || mapRef.current == null) {
                return;
            }
            for (const stateController of engine.scenarioController.getStates()) {
                const statePath = mapRef.current.getElementById(stateController.getId());
                if (statePath == null) {
                    console.error("No state on map found with id", stateController.getId());
                    continue;
                }

                statePath.style.fill = stateController.getStateColor(engine);
            }
        }

        const mapUpdate = setInterval(updateMapColors, 100);

        return () => {
            clearInterval(mapUpdate);
        };
    }, [engine]);

    function onMouseMove(e) {
        const hoverId = e.target.id;
        if (hoverId != "") {
            setStateInfoString(engine.getStateOpinionString(hoverId));
        }
    }

    return (
        <>
            <svg
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
                    stroke: "black"
                }}
            />

            <p>
                {stateInfoString}
            </p>
        </>
    );
}

export default MapView;
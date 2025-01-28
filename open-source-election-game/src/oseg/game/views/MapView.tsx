import "external-svg-loader";
import { useEffect, useRef, useState } from "react";
import { StateController } from "../../engine/controllers/StateController";
import { Engine } from "../../engine/Engine";
import { ThemeModel } from "../../engine/models/ThemeModel";
import ResultsPreview from "../components/ResultsPreview";
import StatePoll from "../components/StatePoll";
import "./MapView.css";

interface MapViewProps {
  engine: Engine;
  onStateClicked : ((state : StateController) => void) | null;
  theme : ThemeModel;
  mapSvg : string;
  playAnimationBeforeFinalResults? : boolean;
  afterAnimationCompletes? : () => void;
  fullyColored? : boolean;
}

const stateLerpValues = new Map<string, number>();

function MapView(props: MapViewProps) {
  const { engine, onStateClicked, theme, mapSvg, playAnimationBeforeFinalResults, afterAnimationCompletes, fullyColored } = props;
  const mapRef = useRef<SVGSVGElement>(null);
  const [currentState, setCurrentState] = useState<StateController | null>(
    null
  );

  const [completionAmount, setCompletionAmount] = useState(0);
  const [evSoFar, setEvSoFar] = useState<Map<number, number>>(new Map());
  const [pvSoFar, setPvSoFar] = useState<Map<number, number>>(new Map());
  const [playingAnimation, setPlayingAnimation] = useState(false);

  useEffect(() => {
    if(playAnimationBeforeFinalResults == undefined || !playAnimationBeforeFinalResults) {
      return;
    }

    stateLerpValues.clear();

    let timePlayed = 0;

    // Sort them in ascending closing time order and closest marigns last
    const statesToUpdate = engine.scenarioController.getStates().sort((a, b) => {
      const aHighestCandidate = a.getHighestCandidate(engine);
      const aHighest = aHighestCandidate == undefined ? 0 : a.getOpinionForCandidate(aHighestCandidate.getId());

      const bHighestCandidate = b.getHighestCandidate(engine);
      const bHighest = bHighestCandidate == undefined ? 0 : b.getOpinionForCandidate(bHighestCandidate.getId());

      const aClose = a.model.pollClosingTime ?? 0;
      const bClose = b.model.pollClosingTime ?? 0;

      return aClose - bClose || bHighest - aHighest;
    });

    const FPS = 1;
    const MS_TO_FINISH = 20 * 1000;

    const animationHandle = setInterval(() => {
      if(timePlayed >= MS_TO_FINISH) {
        if(afterAnimationCompletes) {
          afterAnimationCompletes();
        }
        setPlayingAnimation(false);
        clearInterval(animationHandle);
        return;
      }

      const evs = new Map<number, number>();
      const pvs = new Map<number, number>();

      for(const candidate of engine.scenarioController.getCandidates()) {
        evs.set(candidate.getId(), 0);
        pvs.set(candidate.getId(), 0);
      }

      for(let i = 0; i < statesToUpdate.length; i++) {
        const state = statesToUpdate[i];

        const isDone = timePlayed / MS_TO_FINISH >= (i / (statesToUpdate.length - 1));
        stateLerpValues.set(state.model.abbr, isDone ? 1 : 0);

        if(isDone) {
          for(const candidate of engine.scenarioController.getCandidates()) {
            evs.set(candidate.getId(), evs.get(candidate.getId())! + state.getEvsForCandidate(engine, candidate));
            pvs.set(candidate.getId(), pvs.get(candidate.getId())! + state.getPvsForCandidate(candidate));
          }
        }
      }

      setPvSoFar(pvs);
      setEvSoFar(evs);

      timePlayed += 1000 / FPS;
      setCompletionAmount(timePlayed / MS_TO_FINISH);
    }, 1000 / FPS);

    setPlayingAnimation(true);

    return () => {
      setPlayingAnimation(false);
      clearInterval(animationHandle);
    }
  }, []);

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

        const isHovered = currentState != null &&
        currentState.model.id == stateController.model.id;

        if(playAnimationBeforeFinalResults) {
          if(playingAnimation) {
            statePath.style.fill = stateController.getFinalStateColor(engine, stateLerpValues.get(stateController.model.abbr) ?? 0, isHovered) 
          }
          else {
            statePath.style.fill = stateController.getFinalStateColor(engine, 1, isHovered) 
          }
        }
        else if(fullyColored == undefined || !fullyColored){
          statePath.style.fill = stateController.getStateColor(
            engine,
            isHovered
          );
        }
        else {
          statePath.style.fill = stateController.getFinalStateColor(engine, 1, isHovered) 
        }
      }
    }

    const mapUpdate = setInterval(updateMapColors, 25);

    return () => {
      clearInterval(mapUpdate);
    };
  }, [engine, currentState, mapSvg, playingAnimation, playAnimationBeforeFinalResults]);

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
    if (e.target == null || playingAnimation) {
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
        height="auto"
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

      {playingAnimation ? <ResultsPreview completionAmount={completionAmount} evSoFar={evSoFar} pvSoFar={pvSoFar} engine={engine} theme={theme}></ResultsPreview> : <StatePoll theme={theme} engine={engine} stateController={currentState}></StatePoll>}
    </div>
  );
}

export default MapView;

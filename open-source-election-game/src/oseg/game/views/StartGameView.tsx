import { useState } from "react";
import { Engine, GameState } from "../../engine/Engine";
import { ThemeModel } from "../../engine/models/ThemeModel";
import CandidateSelectionView from "./CandidateSelectionView";
import ElectionDescriptionView from "./ElectionDescriptionView";

interface StartGameProps {
  engine: Engine;
  setGameState: (state: GameState) => void;
  theme: ThemeModel;
  onStartButtonPressed: (() => void) | null;
  isShuffled: boolean;
  setIsShuffled: (b: boolean) => void;
  refreshThemeAndMusic: () => void;
}

function StartGameView(props: StartGameProps) {
  const { engine, setGameState, theme, onStartButtonPressed, isShuffled, setIsShuffled, refreshThemeAndMusic } = props;

  const [selectingCandidate, setSelectingCandidate] = useState(false);

  function startGame(sideIndex: number, runningMateId: number) {
    engine.setScenarioSide(sideIndex, runningMateId, engine.isShuffled);
    setGameState(engine.gameState);
  }

  return (

    !selectingCandidate
      ?
      <ElectionDescriptionView
        theme={theme}
        setSelectingCandidate={setSelectingCandidate}
        engine={engine}
        refreshThemeAndMusic={refreshThemeAndMusic}
        isShuffled={isShuffled}
        setIsShuffled={setIsShuffled}
      ></ElectionDescriptionView>
      :
      <CandidateSelectionView
        theme={theme}
        setSelectingCandidate={setSelectingCandidate}
        afterChooseCandidateAndRunningMate={startGame}
        engine={engine}
        onStartButtonPressed={onStartButtonPressed}
        canChooseCandidate={true}
        canChooseRunningMate={engine.scenarioController.model.skipRunningMateSelection == undefined || !engine.scenarioController.model.skipRunningMateSelection}
      ></CandidateSelectionView>

  );
}

export default StartGameView;
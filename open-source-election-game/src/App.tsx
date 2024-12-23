import "./App.css";
import { Engine, GameState } from "./engine/Engine";

import { useState } from "react";

import testScenario from "./scenarios/TestScenario/TestScenario";
import testMap from "./scenarios/TestScenario/TestMap.svg";

import CandidateSelectionView from "./views/CandidateSelectionView";
import GameView from "./views/GameView";

import { onAnswerPicked, createEnding } from "./scenarios/TestScenario/logic";

const engine = new Engine();

engine.createEnding = createEnding;
engine.onAnswerPicked = onAnswerPicked;
engine.loadScenario(testScenario);

function App() {
  const [gameState, setGameState] = useState(engine.gameState);

  function getViewFromGameState() {
    if (gameState == GameState.Uninitialized) {
      return <p>Error: Engine not initialized</p>;
    }

    if (gameState == GameState.CandidateSelection) {
      return (
        <CandidateSelectionView
          setGameState={setGameState}
          engine={engine}
        ></CandidateSelectionView>
      );
    }

    if (gameState == GameState.Election) {
      return <GameView mapUrl={testMap} engine={engine}></GameView>;
    }
  }

  return (
    <div className="App">
      <h2>OSEG</h2>
      {getViewFromGameState()}
    </div>
  );
}

export default App;

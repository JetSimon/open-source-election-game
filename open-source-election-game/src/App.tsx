import "./App.css";
import { Engine, GameState } from "./engine/Engine";

import { useState } from "react";

import testScenario from "./scenarios/TestScenario";
import testMap from "./scenarios/TestMap.svg";

import CandidateSelectionView from "./views/CandidateSelectionView";
import GameView from "./views/GameView";

const engine = new Engine();
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

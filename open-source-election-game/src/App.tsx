import "./App.css";
import { Engine, GameState } from "./engine/Engine";

import { useState, useEffect } from "react";
import CandidateSelectionView from "./views/CandidateSelectionView";
import GameView from "./views/GameView";

const engine = new Engine();

const MOD_FOLDER = "TestScenario"

function App() {
  const [gameState, setGameState] = useState(engine.gameState);

  useEffect(() => {
    async function loadScenario() {
      const data = await fetch("./scenarios/" + MOD_FOLDER + "/data.json");
      const dataJson = await data.json();
      const map : string = "./scenarios/" + MOD_FOLDER + "/map.svg"
      
      const logicUrl : string = window.location + "scenarios/" + MOD_FOLDER + "/logic.js";
      const {createEnding, onAnswerPicked} = await import(/* @vite-ignore */logicUrl);
      engine.createEnding = createEnding;
      engine.onAnswerPicked = onAnswerPicked;

      engine.mapString = map;
      engine.loadScenario(dataJson);
      setGameState(engine.gameState);
    }
    loadScenario();
  }, []);

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
      return <GameView mapUrl={engine.mapString} engine={engine}></GameView>;
    }
  }

  return (
    <div className="App">
      <h1>OSEG</h1>
      {getViewFromGameState()}
    </div>
  );
}

export default App;

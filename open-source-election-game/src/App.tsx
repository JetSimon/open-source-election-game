import "./App.css";
import { Engine, GameState } from "./engine/Engine";

import { useState, useEffect } from "react";
import StartGameView from "./views/StartGameView";
import GameView from "./views/GameView";

import OsegEditor from "./editor/OsegEditor";

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

      engine.mapUrl = map;
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
        <StartGameView engine={engine} setGameState={setGameState}></StartGameView>
      );
    }

    if (gameState == GameState.Election) {
      return <GameView mapUrl={engine.mapUrl} engine={engine}></GameView>;
    }
  }

  return (
    <OsegEditor></OsegEditor>
  )

  return (
    <div className="App">
      <h1>OSEG</h1>
      {getViewFromGameState()}
    </div>
  );
}

export default App;

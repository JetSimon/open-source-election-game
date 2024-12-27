import { Engine, GameState } from "./engine/Engine";

import { useState, useEffect } from "react";
import StartGameView from "./views/StartGameView";
import GameView from "./views/GameView";

const engine = new Engine();
const MOD_FOLDER = "TestScenario";

import "./Game.css"

function Game() {

    const [gameState, setGameState] = useState(engine.gameState);
    const [theme, setTheme] = useState(engine.scenarioController.makeEmptyTheme());

    useEffect(() => {
        async function loadScenario() {
            const data = await fetch("./scenarios/" + MOD_FOLDER + "/data.json");
            const dataJson = await data.json();
            const map: string = "./scenarios/" + MOD_FOLDER + "/map.svg";

            const logicUrl: string = window.location + "scenarios/" + MOD_FOLDER + "/logic.js";
            const { createEnding, onAnswerPicked } = await import(/* @vite-ignore */logicUrl);
            engine.createEnding = createEnding;
            engine.onAnswerPicked = onAnswerPicked;

            engine.mapUrl = map;
            engine.loadScenario(dataJson);
            setGameState(engine.gameState);
            setTheme(engine.scenarioController.theme);
        }
        loadScenario();
    }, []);

    function getViewFromGameState() {
        if (gameState == GameState.Uninitialized) {
            return <p>Error: Engine not initialized</p>;
        }

        if (gameState == GameState.CandidateSelection) {
            return (
                <StartGameView theme={theme} engine={engine} setGameState={setGameState}></StartGameView>
            );
        }

        if (gameState == GameState.Election) {
            return <GameView theme={theme} mapUrl={engine.mapUrl} engine={engine}></GameView>;
        }
    }

    const backgroundUrl = "url('" + theme.backgroundImageUrl + "')";

    return (
        <div style={{backgroundColor:theme.backgroundColor, backgroundImage:backgroundUrl}} className="Game">
            <img className="TopBanner" src={theme.headerImageUrl}></img>
            {getViewFromGameState()}
        </div>
    );
}

export default Game;
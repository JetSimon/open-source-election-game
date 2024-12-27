import { Engine, GameState } from "./engine/Engine";

import { useState, useEffect } from "react";
import StartGameView from "./views/StartGameView";
import GameView from "./views/GameView";

const engine = new Engine();

import ScenarioModel from "./models/ScenarioModel";

import "./Game.css"

interface GameProps {
    injectedData : ScenarioModel;
    injectedLogic : string;
    injectedMapUrl : string;
}

function Game(props : GameProps) {

    const {injectedData, injectedLogic, injectedMapUrl} = props;
    const [gameState, setGameState] = useState(engine.gameState);
    const [theme, setTheme] = useState(engine.scenarioController.makeEmptyTheme());

    useEffect(() => {
        async function loadInjectedData() {
            const encodedLogic = encodeURIComponent(injectedLogic);
            const logicDataUri = 'data:text/javascript;charset=utf-8,' + encodedLogic;
            const {createEnding, onAnswerPicked} = await import(/* @vite-ignore */logicDataUri);
            engine.createEnding = createEnding;
            engine.onAnswerPicked = onAnswerPicked;
            engine.mapUrl = injectedMapUrl;
            engine.loadScenario(injectedData);
            setGameState(engine.gameState);
            setTheme(engine.scenarioController.theme);
        }

        loadInjectedData();
    }, [injectedData, injectedLogic, injectedMapUrl]);

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
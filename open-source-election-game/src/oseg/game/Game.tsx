import { Engine, GameState } from "../engine/Engine";

import { useEffect, useState } from "react";
import GameView from "./views/GameView";
import StartGameView from "./views/StartGameView";

const engine = new Engine();

import { HighscoreSubmissionModel } from "../engine/models/HighscoreSubmissionModel";
import { ScenarioModel } from "../engine/models/ScenarioModel";
import { SongModel } from "../engine/models/SongModel";
import "./Game.css";
import MusicPlayer from "./components/MusicPlayer";
import QuoteHeader from "./components/QuoteHeader";

interface GameProps {
    injectedData : ScenarioModel;
    injectedLogic : string;
    injectedMapSvg : string;
    injectedCss : string;
    onStartButtonPressed : (() => void) | null;
    onGameOver : ((m : HighscoreSubmissionModel) => void) | null;
    onAchievementUnlocked : ((e : Engine, s : string) => void) | null;
}

function Game(props : GameProps) {

    const {injectedData, injectedLogic, injectedMapSvg, injectedCss, onStartButtonPressed, onGameOver, onAchievementUnlocked} = props;
    const [gameState, setGameState] = useState(engine.gameState);
    const [theme, setTheme] = useState(engine.scenarioController.makeEmptyTheme());
    const [stylePath, setStylePath] = useState("");
    const [music, setMusic] = useState<SongModel[]>([]);
    const [isShuffled, setIsShuffled] = useState(false);

    useEffect(() => {
        async function loadInjectedData() {
            const encodedLogic = encodeURIComponent(injectedLogic);
            const logicDataUri = 'data:text/javascript;charset=utf-8,' + encodedLogic;
            const {createEnding, onAnswerPicked, onScenarioStarted, onCandidateSelectionStarted} = await import  (/* @vite-ignore */logicDataUri);
            
            engine.onCandidateSelectionStarted = onCandidateSelectionStarted;
            engine.createEnding = createEnding;
            engine.onAnswerPicked = onAnswerPicked;
            engine.onScenarioStarted = onScenarioStarted;
            engine.loadScenario(injectedData, false);

            if(onAchievementUnlocked != null) {
                engine.onAchievementUnlocked = onAchievementUnlocked;
            }
           
            setGameState(engine.gameState);
            setTheme(engine.scenarioController.theme);

            const mus = JSON.stringify(injectedData.music)
            setMusic(JSON.parse(mus));

            const encodedStyle = encodeURIComponent(injectedCss);
            const styleUri = 'data:text/css;charset=utf-8,' + encodedStyle;
            setStylePath(styleUri);
        }

        loadInjectedData();
    }, [injectedData, injectedLogic, injectedMapSvg, injectedCss]);

    function refreshThemeAndMusic() {
        // Force theme to update after a question is answered
        setTheme(JSON.parse(JSON.stringify(engine.scenarioController.theme)));

        // Force music update
        if(engine.currentScenario != null) {
            const oldMusic = JSON.stringify(music);
            const newMusic = JSON.stringify(engine.currentScenario.music);

            if(oldMusic != newMusic) {
                console.log("setting new music")
                setMusic(JSON.parse(newMusic));
            }
        }
    }

    function getViewFromGameState() {
        if (gameState == GameState.Uninitialized) {
            return <p>Error: Engine not initialized</p>;
        }

        if (gameState == GameState.CandidateSelection) {
            return (
                <StartGameView refreshThemeAndMusic={refreshThemeAndMusic} isShuffled={isShuffled} setIsShuffled={setIsShuffled} onStartButtonPressed={onStartButtonPressed} theme={theme} engine={engine} setGameState={setGameState}></StartGameView>
            );
        }

        if (gameState == GameState.Election) {
            return <GameView onGameOver={onGameOver} refreshThemeAndMusic={refreshThemeAndMusic} theme={theme} mapSvg={injectedMapSvg} engine={engine}></GameView>;
        }
    }

    const backgroundUrl = "url('" + theme.backgroundImageUrl + "')";

    return (
        <>
        <link rel="stylesheet" type="text/css" href={stylePath} />
        <div style={{backgroundColor:theme.backgroundColor, backgroundImage:backgroundUrl}} className="Game">
            <div style={{backgroundColor:theme.primaryGameWindowColor}} className="GameWindow">
                <img className="TopBanner" src={theme.headerImageUrl}></img>
                <QuoteHeader engine={engine} theme={theme}></QuoteHeader>
                {getViewFromGameState()}
                <MusicPlayer songs={music}></MusicPlayer>
            </div>
        </div>
        </>
    );
}

export default Game;
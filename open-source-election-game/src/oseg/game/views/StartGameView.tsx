import { useState } from "react";
import { Engine, GameState } from "../../engine/Engine";
import { ThemeModel } from "../../engine/models/ThemeModel";
import CandidateSelectionView from "./CandidateSelectionView";
import ElectionDescriptionView from "./ElectionDescriptionView";

interface StartGameProps {
    engine : Engine;
    setGameState: (state: GameState) => void;
    theme : ThemeModel;
    onStartButtonPressed : (() => void) | null;
    isShuffled : boolean;
    setIsShuffled : (b : boolean) => void;
    refreshThemeAndMusic : () => void;
}

function StartGameView(props : StartGameProps) {
    const {engine, setGameState, theme, onStartButtonPressed, isShuffled, setIsShuffled, refreshThemeAndMusic} = props;

    const [selectingCandidate, setSelectingCandidate] = useState(false);

    return (
            
                 !selectingCandidate
                 ?
                 <ElectionDescriptionView theme={theme} setSelectingCandidate={setSelectingCandidate} engine={engine} refreshThemeAndMusic={refreshThemeAndMusic}></ElectionDescriptionView>
                 :
                 <CandidateSelectionView
                   theme={theme}
                   setSelectingCandidate={setSelectingCandidate}
                   setGameState={setGameState}
                   engine={engine}
                   onStartButtonPressed={onStartButtonPressed}
                   isShuffled={isShuffled}
                   setIsShuffled={setIsShuffled}
                 ></CandidateSelectionView>
            
    )
}

export default StartGameView
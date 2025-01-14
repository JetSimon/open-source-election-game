import { Engine } from "../../engine/Engine";
import { GameState } from "../../engine/Engine";
import ElectionDescriptionView from "./ElectionDescriptionView";
import CandidateSelectionView from "./CandidateSelectionView";
import { useState } from "react";
import ThemeModel from "../../engine/models/ThemeModel";

interface StartGameProps {
    engine : Engine;
    setGameState: (state: GameState) => void;
    theme : ThemeModel;
    onStartButtonPressed : (() => void) | null;
    isShuffled : boolean;
    setIsShuffled : (b : boolean) => void;
}

function StartGameView(props : StartGameProps) {
    const {engine, setGameState, theme, onStartButtonPressed, isShuffled, setIsShuffled} = props;

    const [selectingCandidate, setSelectingCandidate] = useState(false);

    return (
            
                 !selectingCandidate
                 ?
                 <ElectionDescriptionView theme={theme} setSelectingCandidate={setSelectingCandidate} engine={engine}></ElectionDescriptionView>
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
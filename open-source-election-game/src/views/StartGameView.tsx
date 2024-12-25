import { Engine } from "../engine/Engine";
import { GameState } from "../engine/Engine";
import ElectionDescriptionView from "./ElectionDescriptionView";
import CandidateSelectionView from "./CandidateSelectionView";
import { useState } from "react";

interface StartGameProps {
    engine : Engine;
    setGameState: (state: GameState) => void;
}

function StartGameView(props : StartGameProps) {
    const {engine, setGameState} = props;

    const [selectingCandidate, setSelectingCandidate] = useState(false);

    return (
        !selectingCandidate
        ?
        <ElectionDescriptionView setSelectingCandidate={setSelectingCandidate} engine={engine}></ElectionDescriptionView>
        :
        <CandidateSelectionView
          setSelectingCandidate={setSelectingCandidate}
          setGameState={setGameState}
          engine={engine}
        ></CandidateSelectionView>
    )
}

export default StartGameView
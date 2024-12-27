import MapView from "../views/MapView";
import { Engine, GameState } from "../engine/Engine";
import EnumNavBar from "../components/EnumNavBar";
import { useState } from "react";
import ElectionDescriptionView from "../views/ElectionDescriptionView";
import CandidateSelectionView from "../views/CandidateSelectionView";

enum RightNavBar {
    Map,
    Election,
    Candidates,
}

const rightNavBarValues = Object.keys(RightNavBar).filter((item) => {
    return isNaN(Number(item));
});


interface OsegRightPanelProps {
    engine: Engine;
    mapUrl: string;
}

function OsegRightPanel(props: OsegRightPanelProps) {
    const { engine, mapUrl } = props;
    const [rightNavBar, setRightNavBar] = useState<RightNavBar>(RightNavBar.Map);

    function setRightNavBarFromString(s: string) {
        setRightNavBar(RightNavBar[s as keyof typeof RightNavBar]);
    }

    function getEditorArea() {

        if (rightNavBar == RightNavBar.Map) {
            return (
                <div>
                    <h2>Starting Margins</h2>
                    <MapView engine={engine} mapUrl={mapUrl} onStateClicked={null}></MapView>
                    <p>Note: starting margins may be slightly different in game due to RNG</p>
                </div>
            );
        }
        else if (rightNavBar == RightNavBar.Election) {
            return (
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                <ElectionDescriptionView setSelectingCandidate={(_x: boolean) => { }} engine={engine}></ElectionDescriptionView>
            );
        }
        else if (rightNavBar == RightNavBar.Candidates) {
            return (
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                <CandidateSelectionView setGameState={(_x: GameState) => { }} setSelectingCandidate={(_x: boolean) => { }} engine={engine}></CandidateSelectionView>
            );
        }
    }

    return (
        <div className="OsegPanel">
            <EnumNavBar enumValueAsString={RightNavBar[rightNavBar].toString()} setEnumFromString={setRightNavBarFromString} enumKeys={rightNavBarValues} ></EnumNavBar>
            {getEditorArea()}
        </div>
    );
}

export default OsegRightPanel;
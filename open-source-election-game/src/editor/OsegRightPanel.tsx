import MapView from "../views/MapView";
import { Engine, GameState } from "../engine/Engine";
import EnumNavBar from "../components/EnumNavBar";
import { useState, useEffect } from "react";
import ElectionDescriptionView from "../views/ElectionDescriptionView";
import CandidateSelectionView from "../views/CandidateSelectionView";
import ScenarioModel from "../models/ScenarioModel";

enum RightNavBar {
    Map,
    Election,
    Candidates,
}

const rightNavBarValues = Object.keys(RightNavBar).filter((item) => {
    return isNaN(Number(item));
});

interface OsegRightPanelProps {
    mapUrl: string;
    data : ScenarioModel;
}

const engine = new Engine();
engine.useRng = false;

function OsegRightPanel(props: OsegRightPanelProps) {
    const { mapUrl, data } = props;
    const [rightNavBar, setRightNavBar] = useState<RightNavBar>(RightNavBar.Map);

    // Using this to make sure that the candidate information updates as you type in the editor
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_lastUpdatedTime, setLastUpdatedTime] = useState(Date.now());

    function setRightNavBarFromString(s: string) {
        setRightNavBar(RightNavBar[s as keyof typeof RightNavBar]);
    }

    useEffect(() => {
        if (data != null) {
            engine.mapUrl = mapUrl;

            // Load scenario as observer (aka we don't assume the player is playing as anyone, just for previewing)
            engine.loadScenario(data, true);

            const handle = setTimeout(() => {
                setLastUpdatedTime(Date.now())
            }, 1);

            return () => {
                clearTimeout(handle);
            }
        }
    }, [data, mapUrl]);

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
            <EnumNavBar description="Preview" enumValueAsString={RightNavBar[rightNavBar].toString()} setEnumFromString={setRightNavBarFromString} enumKeys={rightNavBarValues} ></EnumNavBar>
            {getEditorArea()}
        </div>
    );
}

export default OsegRightPanel;
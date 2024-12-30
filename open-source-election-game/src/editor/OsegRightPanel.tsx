import MapView from "../game/views/MapView";
import { Engine, GameState } from "../engine/Engine";
import EnumNavBar from "./components/EnumNavBar";
import { useState, useEffect } from "react";
import ElectionDescriptionView from "../game/views/ElectionDescriptionView";
import CandidateSelectionView from "../game/views/CandidateSelectionView";
import ScenarioModel from "../engine/models/ScenarioModel";

enum RightNavBar {
    Map,
    Election,
    Candidates,
}

const rightNavBarValues = Object.keys(RightNavBar).filter((item) => {
    return isNaN(Number(item));
});

interface OsegRightPanelProps {
    mapSvg: string;
    data : ScenarioModel;
}

const engine = new Engine();
engine.useRng = false;

function OsegRightPanel(props: OsegRightPanelProps) {
    const { mapSvg, data } = props;
    const [rightNavBar, setRightNavBar] = useState<RightNavBar>(RightNavBar.Map);

    // Using this to make sure that the candidate information updates as you type in the editor
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_lastUpdatedTime, setLastUpdatedTime] = useState(Date.now());

    function setRightNavBarFromString(s: string) {
        setRightNavBar(RightNavBar[s as keyof typeof RightNavBar]);
    }

    useEffect(() => {
        if (data != null) {
            // Load scenario as observer (aka we don't assume the player is playing as anyone, just for previewing)
            engine.loadScenario(data, true);

            const handle = setTimeout(() => {
                setLastUpdatedTime(Date.now())
            }, 1);

            return () => {
                clearTimeout(handle);
            }
        }
    }, [data, mapSvg]);

    function getEditorArea() {

        if (rightNavBar == RightNavBar.Map) {
            return (
                <div>
                    <h2>Starting Margins</h2>
                    <MapView theme={engine.scenarioController.theme} engine={engine} mapSvg={mapSvg} onStateClicked={null}></MapView>
                    <p>Note: starting margins may be slightly different in game due to RNG</p>
                </div>
            );
        }
        else if (rightNavBar == RightNavBar.Election) {
            return (
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                <ElectionDescriptionView theme={engine.scenarioController.theme} setSelectingCandidate={(_x: boolean) => { }} engine={engine}></ElectionDescriptionView>
            );
        }
        else if (rightNavBar == RightNavBar.Candidates) {
            return (
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                <CandidateSelectionView theme={engine.scenarioController.theme} setGameState={(_x: GameState) => { }} setSelectingCandidate={(_x: boolean) => { }} engine={engine}></CandidateSelectionView>
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
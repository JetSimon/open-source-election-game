import MapView from "../oseg/game/views/MapView";
import { Engine } from "../oseg/engine/Engine";
import EnumNavBar from "./components/EnumNavBar";
import { useState, useEffect } from "react";
import ElectionDescriptionView from "../oseg/game/views/ElectionDescriptionView";
import CandidateSelectionView from "../oseg/game/views/CandidateSelectionView";
import ScenarioModel from "../oseg/engine/models/ScenarioModel";
import OsegSimulator from "./OsegSimulator";
import StateController from "../oseg/engine/controllers/StateController";
import QuoteHeader from "../oseg/game/components/QuoteHeader";
import MusicPlayer from "../oseg/game/components/MusicPlayer";
import QuestionView from "../oseg/game/views/QuestionView";

enum RightNavBar {
    Map,
    Election,
    Candidates,
    Simulator,
    Question
}   

const rightNavBarValues = Object.keys(RightNavBar).filter((item) => {
    return isNaN(Number(item));
});

interface OsegRightPanelProps {
    mapSvg: string;
    logic : string;
    data : ScenarioModel;
    onStateClicked : ((c : StateController) => void) | null;
    sideIndex : number;
    questionIndex : number;
}

const engine = new Engine();
engine.useRng = false;

function OsegRightPanel(props: OsegRightPanelProps) {
    const { mapSvg, data, logic, onStateClicked, sideIndex, questionIndex } = props;
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

        const side = data.scenarioSides[sideIndex];
        const question = side.questions[questionIndex];

        if (rightNavBar == RightNavBar.Map) {
            return (
                <div>
                    <h2>Starting Margins</h2>
                    <MapView theme={engine.scenarioController.theme} engine={engine} mapSvg={mapSvg} onStateClicked={onStateClicked}></MapView>
                    <p>Note: starting margins may be slightly different in game due to RNG</p>
                </div>
            );
        }
        else if (rightNavBar == RightNavBar.Election || rightNavBar == RightNavBar.Candidates) {
            const theme = engine.scenarioController.theme;
            const backgroundImage = "url('" + theme.backgroundImageUrl +  "')" 
            return (
                <div style={{backgroundColor:theme.backgroundColor, backgroundImage:backgroundImage}} className="Game">
                <img className="TopBanner" src={theme.headerImageUrl}></img>
                <QuoteHeader engine={engine} theme={theme}></QuoteHeader>
                {
                    rightNavBar == RightNavBar.Election ?
                    <ElectionDescriptionView refreshThemeAndMusic={() => {}} theme={engine.scenarioController.theme} setSelectingCandidate={() => { }} engine={engine}></ElectionDescriptionView>
                    :
                    <CandidateSelectionView setIsShuffled={() => {}} isShuffled={false} onStartButtonPressed={null} theme={engine.scenarioController.theme} setGameState={() => { }} setSelectingCandidate={() => { }} engine={engine}></CandidateSelectionView>
                }
               
                <MusicPlayer songs={engine.scenarioController.model.music}></MusicPlayer>
                </div>
            );
        }
        else if (rightNavBar == RightNavBar.Simulator) {
            return (
                <OsegSimulator theme={engine.scenarioController.theme} data={data} logic={logic} ></OsegSimulator>
            );
        }
        else if (rightNavBar == RightNavBar.Question) {
            if (!question) {
                return <div>No questions found for candidate!</div>
            }

            return (
                <QuestionView currentQuestion={question} submitAnswer={() => {}} selectedAnswer={null} setSelectedAnswer={() => {}}theme={engine.scenarioController.theme} setShowMap={() => {}}></QuestionView>
            )
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
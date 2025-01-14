import { useState, useEffect } from "react";
import ScenarioModel from "../oseg/engine/models/ScenarioModel";
import "./OsegEditor.css";
import OsegLeftPanel from "./OsegLeftPanel";
import OsegRightPanel from "./OsegRightPanel";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Game from "../oseg/game/Game";
import StateModel from "../oseg/engine/models/StateModel";
import StateController from "../oseg/engine/controllers/StateController";
import { BulkStateFunction } from "./bulkMapComponents/BulkStateFunction";

const errorScenario : ScenarioModel = {
    theme: {
        backgroundImageUrl: "",
        backgroundColor: "",
        headerImageUrl: "",
        primaryGameWindowColor: "",
        secondaryGameWindowColor: "",
        primaryGameWindowTextColor: "",
        secondaryGameWindowTextColor: "",
        bottomBannerBackgroundColor: "",
        bottomBannerTextColor: "",
        advisorImage: "",
        quote: ""
    },
    hasStateVisits: false,
    scenarioName: "Error with data.json",
    scenarioDescription: "There is an error with data.json. Scenario has not loaded properly.",
    scenarioImageUrl: "",
    candidates: [],
    states: [],
    issues: [],
    scenarioSides: [{
        playerId: 0,
        questions: []
    }],
    credits : "",
    music: []
}

function downloadString(s : string, fileName : string) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(s));
    element.setAttribute('download', fileName);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
let bulkStateFunction : BulkStateFunction = (_stateModel : StateModel) => {};
function setBulkStateFunction(f : BulkStateFunction) {
    bulkStateFunction = f;
}

const templateNames = [
    "1848b",
    "1980 For Common Sense",
    "1964TheBeatles",
    "TCT 1844",
    "TCT 2016"
];

function OsegEditor() {

    const [data, setData] = useState<ScenarioModel | null>(null);
    const [dataString, setDataString] = useState<string>("");

    const [logic, setLogic] = useState<string>("");
    const [mapSvg, setMapSvg] = useState<string>("");

    const [customCss, setCustomCss] = useState<string>("");

    const [isPlaying, setIsPlaying] = useState(false);

    const [lastSaved, setLastSaved] = useState<number>(-1);

    const [currentTemplateName, setCurrentTemplateName] = useState(templateNames[0]);

    async function loadTemplate(templateName : string) {
        const defaultData = await fetch("./scenarios/" + templateName + "/data.json");
        const defaultDataJson = await defaultData.json();

        const mapSvgRes = await fetch("./scenarios/" + templateName + "/map.svg");
        const defaultMapSvg: string = await mapSvgRes.text();

        const defaultLogic = await fetch("./scenarios/" + templateName + "/logic.js");
        const defaultLogicText = await defaultLogic.text();

        const defaultCss = await fetch("./scenarios/" + templateName + "/style.css");
        const defaultCssText = await defaultCss.text();

        setData(defaultDataJson);
        setLogic(defaultLogicText);
        setMapSvg(defaultMapSvg);
        setCustomCss(defaultCssText);

        const stringifiedData = JSON.stringify(defaultDataJson, null, 4);
        setDataString(stringifiedData);
    }

    async function loadDefaultData() {
        loadTemplate(templateNames[0]);
    }

    function save() {
        console.log("Saved")
        localStorage.setItem("editorLogic", logic);
        localStorage.setItem("editorData", dataString);
        localStorage.setItem("editorMapSvg", mapSvg);
        localStorage.setItem("editorCss", customCss);
        setLastSaved(Date.now());
    }

    function onStateClicked(stateController : StateController) {
        if(data == null) {
            return;
        }

        const stateModel = data.states.filter((x) => x.id == stateController.getId())[0];
        bulkStateFunction(stateModel);
        const newDataString = JSON.stringify(data, null, 4);
        setData(JSON.parse(newDataString));
        setDataString(newDataString);
    }

    async function load() {
        try {
            const autosaveLogic = localStorage.getItem("editorLogic");
            const autosaveData = localStorage.getItem("editorData");
            const autosaveMapSvg = localStorage.getItem("editorMapSvg");
            const autosaveCss = localStorage.getItem("editorCss");
    
            if(autosaveData == null || autosaveLogic == null || autosaveMapSvg == null || autosaveCss == null) {
                throw new Error("Did not have autosave data to load!");
            }

            try {
                setData(JSON.parse(autosaveData) as ScenarioModel);
            }
            catch {
                setData(errorScenario);
            }
            
            setLogic(autosaveLogic);
            setMapSvg(autosaveMapSvg);
            setDataString(autosaveData);
            setCustomCss(autosaveCss);
        }
        catch(e) {
            alert("Could not load saved data: " + e);
        }
    }

    /*
    function toggleAutosave() {
        setAutosave(!autosave);
    }*/

    useEffect(() =>{
        loadDefaultData();
    }, [])

    function exportFiles() {
        downloadString(dataString, "data.json");
        downloadString(logic, "logic.js");
        downloadString(customCss, "style.css");
    }

    if (data == null) {
        return <h1>Loading default data, map</h1>;
    }

    if(isPlaying) {
        return (
            <div>
                <button className="RedButton" onClick={() => setIsPlaying(false)}>Stop Playing</button>
                <Game onAchievementUnlocked={null} onGameOver={(score) => console.log(JSON.stringify(score))} onStartButtonPressed={null} injectedCss={customCss} injectedData={data} injectedLogic={logic} injectedMapSvg={mapSvg}></Game>
            </div>
        )
    }

    return (
        <div>
            <h2>OSEG Editor</h2>
            <div className="Toolbar">
                <button onClick={() => exportFiles()}>Export</button>
                <button onClick={() => save()}>Save</button>
                <button onClick={() => load()}>Load</button>
                <button className="GreenButton" onClick={() => setIsPlaying(true)}>Start Playing</button>
                <label>Templates: </label>
                <select value={currentTemplateName} onChange={(e) => setCurrentTemplateName(e.target.value)}>
                    {templateNames.map((templateName) => <option value={templateName} key={templateName}>{templateName}</option>)}
                </select>
                <button className="RedButton" onClick={() => {if(window.confirm("Are you sure you want to load a new template? Any unsaved data will be lost.")) loadTemplate(currentTemplateName)}}>Load Template</button>
            </div>
            {lastSaved != -1 && <p className="LastSaved">Last saved: {new Date(lastSaved).toTimeString()}</p>}
            <PanelGroup direction="horizontal" id="group">
            <Panel className="Panel" id="left-panel">
                <OsegLeftPanel data={data} setBulkStateFunction={setBulkStateFunction} customCss={customCss} setCustomCss={setCustomCss} mapSvg={mapSvg} setMapSvg={setMapSvg} setData={setData} setLogic={setLogic} setDataString={setDataString} dataString={dataString} logic={logic}></OsegLeftPanel>
            </Panel>
            <PanelResizeHandle className="ResizeHandle" id="resize-handle" />
            <Panel className="Panel" id="right-panel">
                <OsegRightPanel logic={logic} data={data} mapSvg={mapSvg} onStateClicked={onStateClicked}></OsegRightPanel>
            </Panel>
            </PanelGroup>
        </div>
    );
}

export default OsegEditor;
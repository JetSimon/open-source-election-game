import { useEffect, useState } from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { StateController } from "../oseg/engine/controllers/StateController";
import { ScenarioModel } from "../oseg/engine/models/ScenarioModel";
import { StateModel } from "../oseg/engine/models/StateModel";
import Game from "../oseg/game/Game";
import { BulkStateFunction } from "./bulkMapComponents/BulkStateFunction";
import "./OsegEditor.css";
import OsegLeftPanel from "./OsegLeftPanel";
import OsegRightPanel from "./OsegRightPanel";

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
    "1980 For Common Sense",
    "1936 Every Man a King",
    "1964 The Beatles",
    "1960m",
    "4352 BCE Cold Famine",
    "TCT 1844",
    "TCT 2000",
    "TCT 2016",
    "Blank"
];

function OsegEditor() {

    const [data, setData] = useState<ScenarioModel | null>(null);
    const [dataString, setDataString] = useState<string>("");

    const [logic, setLogic] = useState<string>("");
    const [mapSvg, setMapSvg] = useState<string>("");

    const [customCss, setCustomCss] = useState<string>("");

    const [isPlaying, setIsPlaying] = useState(false);

    const [lastSaved, setLastSaved] = useState<number>(-1);

    const [saveIndex, setSaveIndex] = useState<number>(1);

    const [isEditingSaveName, setIsEditingSaveName] = useState(false);

    const [currentTemplateName, setCurrentTemplateName] = useState(templateNames[0]);

    const [saveNames, setSaveNames] = useState(() => {
        const savedNames = [
            localStorage.getItem("savename1"),
            localStorage.getItem("savename2"),
            localStorage.getItem("savename3"),
        ];
        return savedNames.map((name, index) => name || `Save ${index + 1}`);
    });

    const [sideIndex, setSideIndex] = useState<number>(0);
    const [questionIndex, setQuestionIndex] = useState<number>(0);

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

    function save(fileIndex : number) {

        if(!window.confirm("Are you sure you want to save?")) {
            return;
        }

        console.log("Saved");
        const indexKey = fileIndex === 1 ? "" : fileIndex;
        localStorage.setItem(`editorLogic${indexKey}`, logic);
        localStorage.setItem(`editorData${indexKey}`, dataString);
        localStorage.setItem(`editorMapSvg${indexKey}`, mapSvg);
        localStorage.setItem(`editorCss${indexKey}`, customCss);
        setLastSaved(Date.now());
    }

    function onStateClicked(stateController : StateController) {
        if(data == null) {
            return;
        }

        const stateModel = data.states.filter((x : StateModel) => x.id == stateController.getId())[0];
        bulkStateFunction(stateModel);
        const newDataString = JSON.stringify(data, null, 4);
        setData(JSON.parse(newDataString));
        setDataString(newDataString);
    }

    function startEditingSaveName() {
        setIsEditingSaveName(true);
    }

    function saveEditedSaveName(newSaveName : string) {
        const trimmedSaveName = newSaveName.trim();
        const newNames = [...saveNames]; 
        newNames[saveIndex - 1] = trimmedSaveName; 
        setSaveNames(newNames); 

        localStorage.setItem(`savename${saveIndex}`, trimmedSaveName);

        setIsEditingSaveName(false); 
    }

    async function load(fileIndex : number) {

        if(!window.confirm("Are you sure you want to load? This will override existing data")) {
            return;
        }

        try {
            const indexKey = fileIndex === 1 ? "" : fileIndex;
            const autosaveLogic = localStorage.getItem(`editorLogic${indexKey}`);
            const autosaveData = localStorage.getItem(`editorData${indexKey}`);
            const autosaveMapSvg = localStorage.getItem(`editorMapSvg${indexKey}`);
            const autosaveCss = localStorage.getItem(`editorCss${indexKey}`);
    
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
    }, []);

    function exportFiles() {
        downloadString(dataString, "data.json");
        downloadString(logic, "logic.js");
        downloadString(customCss, "style.css");
        downloadString(mapSvg, "map.svg");
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
            <div className="OsegEditorStyle Toolbar">
                <label>Save Slots: </label>
                {!isEditingSaveName && (
                    <select value={saveIndex} onChange={(e) => setSaveIndex(Number(e.target.value))}>
                        <option value={1}>{saveNames[0]}</option>
                        <option value={2}>{saveNames[1]}</option>
                        <option value={3}>{saveNames[2]}</option>
                    </select>
                )}
                {isEditingSaveName ? (
                    <>
                    <input 
                        type="text" 
                        defaultValue={saveNames[saveIndex - 1]} 
                        onBlur={(e) => saveEditedSaveName(e.target.value)} 
                    />
                    <button onClick={() => saveEditedSaveName(saveNames[saveIndex - 1])}>✅</button>
                </>
                ) : ( 
                    <button onClick={startEditingSaveName}>✏️</button>
                )}
                <button onClick={() => save(saveIndex)}>Save</button>
                <button onClick={() => load(saveIndex)}>Load</button>
                <button className="BlueButton" onClick={() => exportFiles()}>Export</button>
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
                <OsegLeftPanel data={data} setBulkStateFunction={setBulkStateFunction} customCss={customCss} setCustomCss={setCustomCss} mapSvg={mapSvg} setMapSvg={setMapSvg} setData={setData} setLogic={setLogic} setDataString={setDataString} dataString={dataString} logic={logic} sideIndex={sideIndex} setSideIndex={setSideIndex} questionIndex={questionIndex} setQuestionIndex={setQuestionIndex}></OsegLeftPanel>
            </Panel>
            <PanelResizeHandle className="ResizeHandle" id="resize-handle" />
            <Panel className="Panel" id="right-panel">
                <OsegRightPanel css={customCss} logic={logic} data={data} mapSvg={mapSvg} onStateClicked={onStateClicked} sideIndex={sideIndex} questionIndex={questionIndex}></OsegRightPanel>
            </Panel>
            </PanelGroup>
        </div>
    );
}

export default OsegEditor;
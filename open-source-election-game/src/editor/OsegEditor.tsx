import { useState, useEffect } from "react";
import ScenarioModel from "../models/ScenarioModel";
import "./OsegEditor.css";
import OsegLeftPanel from "./OsegLeftPanel";
import OsegRightPanel from "./OsegRightPanel";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Game from "../Game";

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
        bottomBannerTextColor: ""
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
    }]
}

function getAutosaveFromStorage() {
    const localStorageAutosave = localStorage.getItem("editorAutosave");
    return localStorageAutosave != null && localStorageAutosave == "on";
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

function OsegEditor() {

    const [data, setData] = useState<ScenarioModel | null>(null);
    const [dataString, setDataString] = useState<string>("");

    const [logic, setLogic] = useState<string>("");
    const [mapUrl, setMapUrl] = useState<string>("");

    const [isPlaying, setIsPlaying] = useState(false);

    const [autosave/*, setAutosave*/] = useState(false);//useState<boolean>(getAutosaveFromStorage());
    const [lastSaved, setLastSaved] = useState<number>(-1);

    async function loadDefaultData() {
        const defaultData = await fetch("./editor/templates/default/data.json");
        const defaultDataJson = await defaultData.json();
        const defaultMapUrl: string = "./editor/templates/default/map.svg";

        const defaultLogic = await fetch("./editor/templates/default/logic.js");
        const defaultLogicText = await defaultLogic.text();

        setData(defaultDataJson);
        setLogic(defaultLogicText);
        setMapUrl(defaultMapUrl);

        const stringifiedData = JSON.stringify(defaultDataJson, null, 4);
        setDataString(stringifiedData);
    }

    function save() {
        console.log("Saved")
        localStorage.setItem("editorLogic", logic);
        localStorage.setItem("editorData", dataString);
        localStorage.setItem("editorMapUrl", mapUrl);
        setLastSaved(Date.now());
    }

    async function load() {
        try {
            const autosaveLogic = localStorage.getItem("editorLogic");
            const autosaveData = localStorage.getItem("editorData");
            const autosaveMapUrl = localStorage.getItem("editorMapUrl");
    
            if(autosaveData == null || autosaveLogic == null || autosaveMapUrl == null) {
                throw new Error("Did not have autosave data to load!");
            }

            try {
                setData(JSON.parse(autosaveData) as ScenarioModel);
            }
            catch {
                setData(errorScenario);
            }
            
            setLogic(autosaveLogic);
            setMapUrl(autosaveMapUrl);
            setDataString(autosaveData);
        }
        catch(e) {
            alert("Could not load saved data: " + e);
        }
    }

    /*
    function toggleAutosave() {
        setAutosave(!autosave);
    }*/

    useEffect(() => {
        localStorage.setItem("editorAutosave", autosave ? "on" : "off");
    }, [autosave])

    useEffect(() =>{
        async function saveAutosave() {
            if(!getAutosaveFromStorage()) {
                return;
            }
            await save();
        }    

        const saveHandle = setInterval(saveAutosave, 10 * 1000);

        async function loadAutosaveData() {
            try {
                const autosaveLogic = localStorage.getItem("editorLogic");
                const autosaveData = localStorage.getItem("editorData");
                const autosaveMapUrl = localStorage.getItem("editorMapUrl");
        
                if(autosaveData == null || autosaveLogic == null || autosaveMapUrl == null) {
                    throw new Error("Did not have autosave data to load!");
                }
    
                if(autosaveData != "") {
                    setData(JSON.parse(autosaveData) as ScenarioModel);
                }
                else {
                    setData(errorScenario);
                }
                
                setLogic(autosaveLogic);
                setMapUrl(autosaveMapUrl);
                setDataString(autosaveData);
            }
            catch(e) {
                console.error("Failed to load autosave data:", e);
                await loadDefaultData();
            }
        }

        if(autosave) {
            loadAutosaveData();
        }
        else {
            loadDefaultData();
        }

        return () => {
            clearInterval(saveHandle);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function exportFiles() {
        downloadString(dataString, "data.json");
        downloadString(logic, "logic.js");
    }

    if (data == null) {
        return <h1>Loading default data, map</h1>;
    }

    if(isPlaying) {
        return (
            <div>
                <button className="RedButton" onClick={() => setIsPlaying(false)}>Stop Playing</button>
                <Game injectedData={data} injectedLogic={logic} injectedMapUrl={mapUrl}></Game>
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
                <button onClick={() => loadDefaultData()}>Load Default</button>
                {/*<button className={autosave ? "GreenButton" : "RedButton"} onClick={() => toggleAutosave()}>Autosave ({autosave ? "On" : "Off"})</button>*/}
                <button className="GreenButton" onClick={() => setIsPlaying(true)}>Start Playing</button>
            </div>
            {lastSaved != -1 && <p className="LastSaved">Last saved: {new Date(lastSaved).toTimeString()}</p>}
            <PanelGroup direction="horizontal" id="group">
            <Panel className="Panel" id="left-panel">
                <OsegLeftPanel mapUrl={mapUrl} setMapUrl={setMapUrl} setData={setData} setLogic={setLogic} setDataString={setDataString} dataString={dataString} logic={logic}></OsegLeftPanel>
            </Panel>
            <PanelResizeHandle className="ResizeHandle" id="resize-handle" />
            <Panel className="Panel" id="right-panel">
                <OsegRightPanel data={data} mapUrl={mapUrl}></OsegRightPanel>
            </Panel>
            </PanelGroup>
        </div>
    );
}

export default OsegEditor;
import { useState, useEffect } from "react";
import ScenarioModel from "../models/ScenarioModel";
import "./OsegEditor.css";
import OsegLeftPanel from "./OsegLeftPanel";
import OsegRightPanel from "./OsegRightPanel";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Game from "../Game";

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

    useEffect(() => {
        loadDefaultData();
    }, []);

    if (data == null || mapUrl == "") {
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
            <button className="GreenButton" onClick={() => setIsPlaying(true)}>Start Playing</button>
            <PanelGroup direction="horizontal" id="group">
            <Panel className="Panel" id="left-panel">
                <OsegLeftPanel mapUrl={mapUrl} setMapUrl={setMapUrl} setData={setData} setLogic={setLogic} setDataString={setDataString} dataString={dataString} logic={logic}></OsegLeftPanel>
            </Panel>
            <PanelResizeHandle className="ResizeHandle" id="resize-handle" />
            <Panel className="Panel" id="right-panel">
                <OsegRightPanel data={data} mapUrl={mapUrl}></OsegRightPanel>
            </Panel>
            </PanelGroup>
            <div className="DownloadButtons">
                <button onClick={() => downloadString(dataString, "data.json")}>Download data.json</button>
                <button onClick={() => downloadString(logic, "logic.js")}>Download logic.js</button>
            </div>
        </div>
    );
}

export default OsegEditor;
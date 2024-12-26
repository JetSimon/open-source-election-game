import { Engine } from "../engine/Engine";
import { useState, useEffect } from "react";
import ScenarioModel from "../models/ScenarioModel";
import MapView from "../views/MapView";
import { Editor } from "@monaco-editor/react";
import { editor } from 'monaco-editor';

const engine = new Engine();

function OsegEditor() {
    const [data, setData] = useState<ScenarioModel | null>(null);
    const [logic, setLogic] = useState<string>("");
    const [mapUrl, setMapUrl] = useState<string>("");

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function onLogicChanged(value: string | undefined, _ev: editor.IModelContentChangedEvent) {
        if (value != undefined) {
            setLogic(value);
        }
    }

    async function loadDefaultData() {
        const defaultData = await fetch("./editor/templates/default/data.json");
        const defaultDataJson = await defaultData.json();
        const defaultMapUrl: string = "./editor/templates/default/map.svg";

        const defaultLogic = await fetch("./editor/templates/default/logic.js");
        const defaultLogicText = await defaultLogic.text();

        setData(defaultDataJson);
        setLogic(defaultLogicText);
        setMapUrl(defaultMapUrl);
    }

    useEffect(() => {
        loadDefaultData();
    }, []);

    useEffect(() => {
        if (data != null) {
            engine.mapUrl = mapUrl;
            engine.loadScenario(data, true);
        }
    }, [data, mapUrl]);

    if (data == null || mapUrl == "") {
        return <h1>Loading default data, map</h1>;
    }

    return (
        <>
            <Editor
                height="512px"
                language="javascript"
                theme="vs-dark"
                value={logic}
                onChange={onLogicChanged}
            ></Editor>
            <MapView engine={engine} mapUrl={mapUrl} onStateClicked={null}></MapView>
        </>
    );
}

export default OsegEditor;
import { Engine } from "../engine/Engine";
import { useState, useEffect } from "react";
import ScenarioModel from "../models/ScenarioModel";
import MapView from "../views/MapView";
import { Editor } from "@monaco-editor/react";
import { editor } from 'monaco-editor';

const engine = new Engine();

function makeEmptyScenarioModel(): ScenarioModel {
    return {
        hasStateVisits: false,
        scenarioName: "",
        scenarioDescription: "",
        scenarioImageUrl: "",
        candidates: [],
        states: [],
        issues: [],
        scenarioSides: []
    };
}

function getMissingKeys(scenarioModel: ScenarioModel): string[] {
    const requiredKeys = new Set(Object.keys(makeEmptyScenarioModel()).map((x) => x.toString()));
    const missingKeys: string[] = [];

    console.log(requiredKeys);

    for (const key of Object.keys(scenarioModel)) {
        if (!requiredKeys.has(key.toString())) {
            missingKeys.push(key.toString());
        }
    }

    return missingKeys;
}

function OsegEditor() {

    const [errorWithDataJson, setErrorWithDataJson] = useState<string>("");
    const [data, setData] = useState<ScenarioModel | null>(null);
    const [dataString, setDataString] = useState<string>("")

    const [logic, setLogic] = useState<string>("");
    const [mapUrl, setMapUrl] = useState<string>("");

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function onLogicChanged(value: string | undefined, _ev: editor.IModelContentChangedEvent) {
        if (value != undefined) {
            setLogic(value);
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function onDataChanged(value: string | undefined, _ev: editor.IModelContentChangedEvent) {
        if (value != undefined) {
            setDataString(value);
            try {
                const parsed = JSON.parse(value) as ScenarioModel;

                const missingKeys = getMissingKeys(parsed);
                if(missingKeys.length > 0) {
                    throw new Error("ScenarioModel is missing keys: " + missingKeys.join(", "))
                }

                setData(parsed);
                setErrorWithDataJson("");
            }
            catch (e) {
                if (e instanceof Error) {
                    setErrorWithDataJson(e.message);
                }
            }
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
            setDataString(JSON.stringify(data, null, 4));
            engine.mapUrl = mapUrl;
            engine.loadScenario(data, true);
        }
    }, [data, mapUrl]);

    if (data == null || mapUrl == "") {
        return <h1>Loading default data, map</h1>;
    }

    return (
        <>
            <h2>Scenario Data JSON</h2>
            {errorWithDataJson != "" && <div>JSON Error: {errorWithDataJson}</div>}
            <Editor
                height="512px"
                language="json"
                theme="vs-dark"
                value={dataString}
                onChange={onDataChanged}
            ></Editor>
            <h2>Logic Code</h2>
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
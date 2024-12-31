import { useState } from "react";
import { Editor } from "@monaco-editor/react";
import { editor } from 'monaco-editor';
import EnumNavBar from "./components/EnumNavBar";
import ScenarioModel from "../engine/models/ScenarioModel";

enum LeftNavBar {
    Data,
    Logic,
    Map,
    CSS
}

const leftNavBarValues = Object.keys(LeftNavBar).filter((item) => {
    return isNaN(Number(item));
});

interface OsegLeftPanelProps {
    setData: (data: ScenarioModel | null) => void;
    setLogic: (s: string) => void;
    setDataString: (s: string) => void;
    setMapSvg: (url: string) => void;
    setCustomCss: (url: string) => void;
    logic: string;
    dataString: string;
    mapSvg: string;
    customCss: string;
}

function OsegLeftPanel(props: OsegLeftPanelProps) {

    const { setData, setLogic, setDataString, dataString, logic, mapSvg, setMapSvg, customCss, setCustomCss} = props;

    const [errorWithDataJson, setErrorWithDataJson] = useState<string>("");
    const [leftNavBar, setLeftNevBar] = useState<LeftNavBar>(LeftNavBar.Data);

    function setLeftNavBarFromString(s: string) {
        setLeftNevBar(LeftNavBar[s as keyof typeof LeftNavBar]);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function onLogicChanged(value: string | undefined, _ev: editor.IModelContentChangedEvent) {
        if (value != undefined) {
            setLogic(value);
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function onDataChanged(value: string | undefined, _ev: editor.IModelContentChangedEvent) {
        if (value != undefined) {
            try {
                const parsed = JSON.parse(value) as ScenarioModel;
                setData(parsed);
                setErrorWithDataJson("");
            }
            catch (e) {
                if (e instanceof Error) {
                    setErrorWithDataJson(e.message);
                }
            }

            setDataString(value);
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function onMapSvgChanged(value: string | undefined, _ev: editor.IModelContentChangedEvent) {
        if (value != undefined) {
            setMapSvg(value);
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function onCustomCssChanged(value: string | undefined, _ev: editor.IModelContentChangedEvent) {
        if (value != undefined) {
            setCustomCss(value);
        }
    }

    function getEditorArea() {
        if (leftNavBar == LeftNavBar.Data) {
            return (
                <div>
                    <h2>Scenario Data JSON</h2>
                    {errorWithDataJson != "" && <div className="JsonError"><span style={{ fontWeight: "bold" }}>JSON Error: </span>{errorWithDataJson}</div>}
                    <Editor
                        height="512px"
                        language="json"
                        theme="vs-dark"
                        value={dataString}
                        onChange={onDataChanged}
                    ></Editor>
                </div>
            );
        }
        else if (leftNavBar == LeftNavBar.Logic) {
            return (
                <div>
                    <h2>Logic Code</h2>
                    <Editor
                        height="512px"
                        language="javascript"
                        theme="vs-dark"
                        value={logic}
                        onChange={onLogicChanged}
                    ></Editor>
                </div>
            );
        }
        else if (leftNavBar == LeftNavBar.Map) {
            return (
                <div>
                    <h2>Map Svg</h2>
                    <Editor
                        height="512px"
                        language="html"
                        theme="vs-dark"
                        value={mapSvg}
                        onChange={onMapSvgChanged}
                    ></Editor>
                    <p>Note: Ensure all path ids correspond to a state abbreviation in Data</p>
                </div>
            );
        }
        else if (leftNavBar == LeftNavBar.CSS) {
            return (
                <div>
                    <h2>CSS</h2>
                    <Editor
                        height="512px"
                        language="css"
                        theme="vs-dark"
                        value={customCss}
                        onChange={onCustomCssChanged}
                    ></Editor>
                </div>
            );
        }
    }


    return (
        <div className="OsegPanel">
            <EnumNavBar description="Edit" enumValueAsString={LeftNavBar[leftNavBar].toString()} setEnumFromString={setLeftNavBarFromString} enumKeys={leftNavBarValues} ></EnumNavBar>
            {getEditorArea()}
        </div>
    );
}

export default OsegLeftPanel;
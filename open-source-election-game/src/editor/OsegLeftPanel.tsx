import { Editor } from "@monaco-editor/react";
import { editor } from 'monaco-editor';
import { useEffect, useState } from "react";
import { BaseCandidateStateModifier } from "../oseg/engine/models/BaseCandidateStateModifier";
import { IssueScore } from "../oseg/engine/models/IssueScore";
import { ScenarioModel } from "../oseg/engine/models/ScenarioModel";
import { StateModel } from "../oseg/engine/models/StateModel";
import { getAllPathIdsInSvg } from "../oseg/utils/SvgUtils";
import { BulkStateFunction } from "./bulkMapComponents/BulkStateFunction";
import EditorWarningBox from "./components/EditorWarningBox";
import EnumNavBar from "./components/EnumNavBar";
import CandidateEditor from "./graphicalEditors/CandidateEditor";
import IssuesEditor from "./graphicalEditors/IssuesEditor";
import MarginTools from "./graphicalEditors/MarginTools";
import QuestionsEditor from "./graphicalEditors/QuestionsEditor";
import ScenarioDetailsEditor from "./graphicalEditors/ScenarioDetailsEditor";
import StateEditor from "./graphicalEditors/StateEditor";
import OsegBulkTools from "./OsegBulkTools";
import "./OsegEditorStyle.css";

enum LeftNavBar {
    DataJson,
    LogicCode,
    MapSvg,
    CustomCss,
    MarginTools,
    Candidates,
    Issues,
    Questions,
    ScenarioDetails,
    States,
    BulkTools
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
    data : ScenarioModel;
    logic: string;
    dataString: string;
    mapSvg: string;
    customCss: string;
    setBulkStateFunction : (f : BulkStateFunction) => void;
    sideIndex: number;
    setSideIndex: (sideIndex : number) => void;
    questionIndex: number;
    setQuestionIndex: (questionIndex : number) => void;
}

function OsegLeftPanel(props: OsegLeftPanelProps) {

    const { data, setData, setLogic, setDataString, dataString, logic, mapSvg, setMapSvg, customCss, setCustomCss, setBulkStateFunction, sideIndex, setSideIndex, questionIndex, setQuestionIndex} = props;

    const [errorWithDataJson, setErrorWithDataJson] = useState<string>("");
    const [leftNavBar, setLeftNevBar] = useState<LeftNavBar>(LeftNavBar.DataJson);

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

    useEffect(() => {
        if(leftNavBar != LeftNavBar.DataJson) {
            setDataString(JSON.stringify(data, null, 4));
        }
    }, [data, leftNavBar, setDataString])

    function getEditorArea() {
        if (leftNavBar == LeftNavBar.DataJson) {
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
                    <button onClick={() => navigator.clipboard.writeText(dataString)}>Copy to Clipboard</button>
                </div>
            );
        }
        else if (leftNavBar == LeftNavBar.LogicCode) {
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
                    <button onClick={() => navigator.clipboard.writeText(logic)}>Copy to Clipboard</button>
                </div>
            );
        }
        else if (leftNavBar == LeftNavBar.MapSvg) {

            const pathIdSet = new Set(getAllPathIdsInSvg(mapSvg));
            const modelStateAbbrSet = new Set(data.states.map((x) => x.abbr));

            const pathsWithoutStatesDefined : string[] = [];
            const statesWithoutPathsDefined = new Set<StateModel>();

            for(const pathId of pathIdSet) {
                if(!modelStateAbbrSet.has(pathId)) {
                    pathsWithoutStatesDefined.push(pathId);
                }
            }

            for(const state of data.states) {
                if(!pathIdSet.has(state.abbr)) {
                    statesWithoutPathsDefined.add(state);
                }
            }

            function getHighestStateId() {
                if(data.states.length == 0) {
                    return Math.round(Math.random() * 231255);
                }
                return Math.max(...data.states.map((x) => x.id));
            }

            const anyPathsWithoutStates = pathsWithoutStatesDefined.length > 0;
            const anyStatesWithoutPaths = statesWithoutPathsDefined.size > 0;

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

                    <button onClick={() => navigator.clipboard.writeText(mapSvg)}>Copy to Clipboard</button>

                    {anyPathsWithoutStates && <EditorWarningBox destructiveAction={false} onClick={() => {
                        for(const pathId of pathsWithoutStatesDefined) {
                            const newState : StateModel = {
                                id: getHighestStateId() + 1,
                                name: pathId,
                                abbr: pathId,
                                electoralVotes: 0,
                                popularVotes: 0,
                                baseIssueScores: data.issues.map((issue) => {
                                    const issueScore : IssueScore = {
                                        issueId: issue.id,
                                        issueScore: 0,
                                        weight: 1
                                    }
                                    return issueScore;
                                }),
                                baseCandidateStateModifiers: data.candidates.map((candidate) => {
                                    const candidateMod : BaseCandidateStateModifier = {
                                        candidateId: candidate.id,
                                        amount: 1
                                    }
                                    return candidateMod;
                                })
                            }
                            data.states.push(newState);
                        }
                        setData(JSON.parse(JSON.stringify(data)));
                        setMapSvg(mapSvg);
                    }} header={"Paths Without States"} body={"The following paths in this svg do not have states defined in data: " + pathsWithoutStatesDefined.toString() + ". Would you like to automatically add them all?"} buttonText={"Add Missing States"}></EditorWarningBox>
                }
                    {anyStatesWithoutPaths && <EditorWarningBox destructiveAction={true} onClick={() => {
                        data.states = data.states.filter((x) => !statesWithoutPathsDefined.has(x))
                        setData(JSON.parse(JSON.stringify(data)));
                        setMapSvg(mapSvg);
                    }} header={"States Without Paths"} body={"The following states in data do not have paths in this svg: " + Array.from(statesWithoutPathsDefined).map((state : StateModel) => state.name).toString() + ". Would you like to delete them?"} buttonText={"Delete Missing States"}></EditorWarningBox>
                }

                </div>
            );
        }
        else if (leftNavBar == LeftNavBar.CustomCss) {
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
                    <button onClick={() => navigator.clipboard.writeText(customCss)}>Copy to Clipboard</button>
                </div>
            );
        }
        else if(leftNavBar == LeftNavBar.MarginTools) {
            return <MarginTools data={data} setBulkStateFunction={setBulkStateFunction}></MarginTools>
        }
        else if(leftNavBar == LeftNavBar.Candidates) {
            return <CandidateEditor data={data} setData={setData}></CandidateEditor>
        }
        else if(leftNavBar == LeftNavBar.Issues) {
            return <IssuesEditor data={data} setData={setData}></IssuesEditor>
        }
        else if(leftNavBar == LeftNavBar.Questions) {
            return <QuestionsEditor data={data} setData={setData} sideIndex={sideIndex} setSideIndex={setSideIndex} questionIndex={questionIndex} setQuestionIndex={setQuestionIndex}></QuestionsEditor>
        }
        else if(leftNavBar == LeftNavBar.ScenarioDetails) {
            return <ScenarioDetailsEditor data={data} setData={setData}></ScenarioDetailsEditor>
        }
        else if(leftNavBar == LeftNavBar.States) {
            return <StateEditor data={data} setData={setData}></StateEditor>
        }
        else if(leftNavBar == LeftNavBar.BulkTools) {
            return <OsegBulkTools data={data} setData={setData}></OsegBulkTools>
        }
    }

    return (
        <div className="OsegEditorStyle OsegLeftPanel OsegPanel">
            <EnumNavBar description="Edit" enumValueAsString={LeftNavBar[leftNavBar].toString()} setEnumFromString={setLeftNavBarFromString} enumKeys={leftNavBarValues} ></EnumNavBar>
            {getEditorArea()}
        </div>
    );
}

export default OsegLeftPanel;
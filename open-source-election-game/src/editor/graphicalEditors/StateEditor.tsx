import { useState } from "react";
import { ScenarioModel } from "../../oseg/engine/models/ScenarioModel";
import { StateModel } from "../../oseg/engine/models/StateModel";
import GenericEditorInput from "../components/GenericEditorInput";
import IssueScoreEditor from "../components/IssueScoreEditor";

interface StateEditorProps {
    data: ScenarioModel;
    setData: (data: ScenarioModel) => void;
}

function StateEditor(props: StateEditorProps) {
    const { data, setData } = props;
    const [stateId, setStateId] = useState(data.states.length > 0 ? data.states[0].id : -1);

    if (data.states.length == 0) {
        return <p>No states are defined in data.</p>;
    }

    const state: StateModel = data.states.filter((x) => x.id == stateId)[0];

    function updateFieldAndUpdateData<T>(field: string, newValue: T) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const dynamicState = state as { [k: string]: any; };
        dynamicState[field] = newValue;
        setData(JSON.parse(JSON.stringify(data)));
    }

    return (
        <div className="EditorForm">
            <h2>State Editor</h2>

            <label>Select a State: </label>
            <select value={stateId} onChange={(e) => setStateId(Number(e.target.value))}>
                {data.states.sort((a, b) => a.name.localeCompare(b.name)).map((state) => <option key={state.id} value={state.id}>{state.name}</option>)}
            </select>

            {
                state == undefined ?
                    <p>State with id {stateId} is undefined</p>
                    :
                    <div className="EditorBox EditorForm">
                        <div style={{ fontWeight: "bold" }}>Id: {state.id}</div>

                        <GenericEditorInput
                            defaultValue={state.name}
                            onChange={(e) => updateFieldAndUpdateData<string>("name", e.target.value)}
                            label={"State Name"}
                            type={"text"}
                        />

                        <GenericEditorInput
                            defaultValue={state.abbr}
                            onChange={(e) => updateFieldAndUpdateData<string>("abbr", e.target.value)}
                            label={"State Abbreviation"}
                            type={"text"}
                        />
                        <p className="EditorNote">Note: State Abbreviation must have a matching path on the map svg to show in game. Unless you want an invisible state.</p>

                        <GenericEditorInput
                            defaultValue={state.electoralVotes}
                            onChange={(e) => updateFieldAndUpdateData<number>("electoralVotes", Number(e.target.value))}
                            label={"Electoral Votes"}
                            type={"number"}
                        />
                        <p className="EditorNote">Note: If all states have 0 electoral votes, that field will be hidden in game.</p>

                        <GenericEditorInput
                            defaultValue={state.popularVotes}
                            onChange={(e) => updateFieldAndUpdateData<number>("popularVotes", Number(e.target.value))}
                            label={"Popular Votes"}
                            type={"number"}
                        />

                        <GenericEditorInput
                            defaultValue={state.pollClosingTime ?? 0}
                            onChange={(e) => updateFieldAndUpdateData<number>("pollClosingTime", Number(e.target.value))}
                            label={"Poll Closing Time"}
                            type={"number"}
                        />
                        <div className="EditorNote">A higher closing time means the state results will be counted later</div>

                        <h3>Issue Scores</h3>
                        <div>
                            {state.baseIssueScores.sort().map((x) => <IssueScoreEditor data={data} setData={setData} issueScore={x}></IssueScoreEditor>)}
                        </div>
                        <div className="EditorNote">Note: Most of the time the you want the weight to be between 0 - 1, but some scenarios go higher</div>
                    </div>
            }


        </div>
    );
}

export default StateEditor;
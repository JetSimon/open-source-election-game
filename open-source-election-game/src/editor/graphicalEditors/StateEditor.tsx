import ScenarioModel from "../../oseg/engine/models/ScenarioModel";
import { useState } from "react";
import StateModel from "../../oseg/engine/models/StateModel";
import GenericEditorInput from "../components/GenericEditorInput";

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
        <div style={{ textAlign: "left" }}>
            <h2>State Editor</h2>
            <p className="EditorNote">Note: to adjust state margins (opinions of candidates, issue scores), use the Margin Tools tab instead. This is for adjusting state details</p>

            <label>Select a State: </label>
            <select value={stateId} onChange={(e) => setStateId(Number(e.target.value))}>
                {data.states.map((state) => <option key={state.id} value={state.id}>{state.name}</option>)}
            </select>

            {
                state == undefined ?
                    <p>State with id {stateId} is undefined</p>
                    :
                    <div>
                        <p style={{ fontWeight: "bold" }}>Id: {state.id}</p>

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
                    </div>
            }


        </div>
    );
}

export default StateEditor;
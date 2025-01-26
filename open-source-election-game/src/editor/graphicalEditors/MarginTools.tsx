import { useState } from "react";
import { ScenarioModel } from "../../oseg/engine/models/ScenarioModel";
import { StateModel } from "../../oseg/engine/models/StateModel";
import AdjustCandidateStateModifier from "../bulkMapComponents/AdjustCandidateStateModifier";
import AdjustStateIssueScore from "../bulkMapComponents/AdjustStateIssueScore";
import { BulkStateFunction } from "../bulkMapComponents/BulkStateFunction";

interface MarginToolsProps {
    data : ScenarioModel;
    setBulkStateFunction : (f : BulkStateFunction) => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function doNothing(_s : StateModel) {}

enum MarginToolType {
    None,
    StateCandidateModifier,
    StateIssueScore
}

function MarginTools(props : MarginToolsProps) {

    const [selectedTool, setSelectedTool] = useState(MarginToolType.None);
    const {data, setBulkStateFunction} = props;

    function applyBulkStateFunction(t : MarginToolType, f : BulkStateFunction) {
        setSelectedTool(t);
        setBulkStateFunction(f);
    }

    function setAndApplyBulkStateFunction(t : MarginToolType) {
        return (f : BulkStateFunction) => {
            setSelectedTool(t);
            setBulkStateFunction(f);
        };
    }

    return (
        <div>
            <p>Select a bulk tool to use by pressing Use, and then click on the Map on the states you want to apply this change to.</p>
            <button disabled={selectedTool == MarginToolType.None} style={{backgroundColor:"lightgrey", width:"95%"}} onClick={() => applyBulkStateFunction(MarginToolType.None, doNothing)}>Select No Tool</button>
            <div className="EditorForm">
                <AdjustCandidateStateModifier inUse={selectedTool == MarginToolType.StateCandidateModifier} data={data} setBulkStateFunction={setAndApplyBulkStateFunction(MarginToolType.StateCandidateModifier)}></AdjustCandidateStateModifier>
                <AdjustStateIssueScore inUse={selectedTool == MarginToolType.StateIssueScore} data={data} setBulkStateFunction={setAndApplyBulkStateFunction(MarginToolType.StateIssueScore)}></AdjustStateIssueScore>
            </div>
        </div>
    )
}

export default MarginTools;
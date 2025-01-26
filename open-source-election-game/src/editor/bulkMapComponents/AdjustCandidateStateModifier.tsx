import { useEffect, useState } from "react";
import { BaseCandidateStateModifier } from "../../oseg/engine/models/BaseCandidateStateModifier";
import { StateModel } from "../../oseg/engine/models/StateModel";
import "./BulkStateFunction.css";
import BulkStateFunctionProps from "./BulkStateFunctionProps";
let magnitudeUsedInFunction = 1;
let selectedCandidateIdUsedInFunction = -1;

function AdjustCandidateStateModifier(props : BulkStateFunctionProps) {

    const {setBulkStateFunction, data, inUse} = props;
    const [magnitude, setMagnitude] = useState(magnitudeUsedInFunction);
    const [selectedCandidateId, setSelectedCandidateId] = useState(data.candidates[0].id);

    useEffect(() => {
        if(data.candidates.filter((x) => x.id == selectedCandidateId).length == 0) {
            setSelectedCandidateId(data.candidates[0].id);
        }
    }, [data, selectedCandidateId])

    useEffect(() => {
        magnitudeUsedInFunction = magnitude;
    }, [magnitude]);

    useEffect(() => {
        selectedCandidateIdUsedInFunction = selectedCandidateId;
    }, [selectedCandidateId]);

    function adjust(s : StateModel) {
        const idx = s.baseCandidateStateModifiers.map((x) => x.candidateId).indexOf(selectedCandidateIdUsedInFunction);
        if(idx == -1) {
            throw Error("Candidate not found with id " + selectedCandidateIdUsedInFunction);
            return;
        }

        const score : BaseCandidateStateModifier = {
            candidateId: selectedCandidateIdUsedInFunction,
            amount: magnitudeUsedInFunction
        }

        s.baseCandidateStateModifiers[idx] = score;
    }

    return (
        <div className="BulkStateFunction EditorBox EditorForm">
            <h4>Adjust State Candidate Modifier</h4>
            <div className="BulkStateFunctionDesc">Select a candidate</div>
            <select onChange={(e) => setSelectedCandidateId(Number(e.target.value))}>
                {data.candidates.map((candidate) => {
                    return <option value={candidate.id}>{candidate.firstName} {candidate.lastName}</option>
                })}
            </select>

            <div>{magnitude.toFixed(2)}</div>
            <div className="BulkStateFunctionDesc">How much this state likes this candidate outside of issues</div>
            <input step="0.01" type="range" min="0" max="5" value={magnitude} onChange={(e) => setMagnitude(Number(e.target.value))}></input>
            <button disabled={inUse} className="GreenButton" onClick={() => setBulkStateFunction((adjust))}>Use</button>
        </div>
    );
}

export default AdjustCandidateStateModifier;
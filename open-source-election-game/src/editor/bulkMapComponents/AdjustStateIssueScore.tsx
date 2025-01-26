import { useEffect, useState } from "react";
import { IssueScore } from "../../oseg/engine/models/IssueScore";
import { StateModel } from "../../oseg/engine/models/StateModel";
import "./BulkStateFunction.css";
import BulkStateFunctionProps from "./BulkStateFunctionProps";
let issueScoreUsedInFunction = 0;
let selectedIssueIdUsedInFunction = -1;
let issueWeightUsedInFunction = 0;

function AdjustStateIssueScore(props : BulkStateFunctionProps) {

    const {setBulkStateFunction, data, inUse} = props;

    const [issueScore, setIssueScore] = useState(issueScoreUsedInFunction);
    const [issueWeight, setIssueWeight] = useState(issueScoreUsedInFunction);

    const [selectedIssueId, setSelectedIssueId] = useState(data.issues[0].id);

    useEffect(() => {
        if(data.issues.filter((x) => x.id == selectedIssueId).length == 0) {
            setSelectedIssueId(data.issues[0].id);
        }
        
    }, [data, selectedIssueId])

    useEffect(() => {
        issueScoreUsedInFunction = issueScore;
    }, [issueScore]);

    useEffect(() => {
        issueWeightUsedInFunction = issueWeight;
    }, [issueWeight]);

    useEffect(() => {
        selectedIssueIdUsedInFunction = selectedIssueId;
    }, [selectedIssueId]);

    function adjust(s : StateModel) {
        const idx = s.baseIssueScores.map((x) => x.issueId).indexOf(selectedIssueIdUsedInFunction);
        if(idx == -1) {
            throw Error("Issue id not found with id " + selectedIssueIdUsedInFunction);
            return;
        }

        const score : IssueScore = {
            issueId: selectedIssueIdUsedInFunction,
            issueScore: issueScoreUsedInFunction,
            weight: issueWeightUsedInFunction
        }

        s.baseIssueScores[idx] = score;
    }

    const issue = data.issues.filter((x) => x.id == selectedIssueId)[0];

    if(issue == undefined) {
        return <p>Issue is undefined</p>
    }

    const remappedIssueScore = Math.min(Math.floor(
        ((issueScore + 1) / 2) * (issue.stances.length)
      ), issue.stances.length - 1);
    const stance = issue.stances[remappedIssueScore];

    return (
        <div className="EditorBox EditorForm BulkStateFunction">
            <h4>Adjust State Issue Score</h4>

            <div className="BulkStateFunctionDesc">Select an issue</div>
            <select onChange={(e) => setSelectedIssueId(Number(e.target.value))}>
                {data.issues.map((issue) => {
                    return <option value={issue.id}>{issue.name}</option>
                })}
            </select>

            <label>State Issue Score ({issueScore}) ({stance})</label>
            <div className="BulkStateFunctionDesc">Their stance on the issue</div>
            <input step="0.01" type="range" min="-1" max="1" value={issueScore} onChange={(e) => setIssueScore(Number(e.target.value))}></input>

            <label>State Issue Weight ({issueWeight})</label>
            <div className="BulkStateFunctionDesc">How import  ant the issue is to them</div>
            <input step="0.01" type="range" min="0" max="1" value={issueWeight} onChange={(e) => setIssueWeight(Number(e.target.value))}></input>

            <button disabled={inUse} className="GreenButton" onClick={() => setBulkStateFunction((adjust))}>Use</button>
        </div>
    );
}

export default AdjustStateIssueScore;
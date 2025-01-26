import { useState } from "react";
import { Issue } from "../../oseg/engine/models/Issue";
import { IssueScore } from "../../oseg/engine/models/IssueScore";
import { ScenarioModel } from "../../oseg/engine/models/ScenarioModel";
import IssueEditor from "./IssueEditor";

interface IssuesEditorProps {
    data : ScenarioModel;
    setData : (data : ScenarioModel) => void;
}

function IssuesEditor(props : IssuesEditorProps) {
    const {data, setData} = props;

    const [issueId, setIssueId] = useState(data.issues[0]?.id ?? -1);
    const issue = data.issues.filter((x) => x.id == issueId)[0];

    function highestIssueId() {
        if(data.issues.length == 0) {
            return Math.round(Math.random() * 30000);
        }
        return Math.max(...data.issues.map((x) => x.id));
    }

    function deleteIssue() {
        data.issues = data.issues.filter((x) => x.id != issueId);

        for(const candidate of data.candidates) {
            candidate.issueScores = candidate.issueScores.filter((x) => x.issueId != issueId);
        }

        for(const state of data.states) {
            state.baseIssueScores = state.baseIssueScores.filter((x) => x.issueId != issueId);
        }

        setData(JSON.parse(JSON.stringify(data)));
        setIssueId(data.issues[0]?.id ?? -1);
    }

    function addIssue() {
        const id = (highestIssueId()) + 1;
        const emptyIssue : Issue = {
            id: id,
            name: "New Issue",
            description: "",
            stances: new Array(7).fill("Stance"),
            stanceDescriptions: new Array(7).fill("")
        }

        data.issues.push(emptyIssue);

        for(const candidate of data.candidates) {
            const emptyIssueScore : IssueScore = {
                issueId: id,
                issueScore: 0,
                weight: 1
            }
            candidate.issueScores.push(emptyIssueScore);
        }

        for(const state of data.states) {
            const emptyIssueScore : IssueScore = {
                issueId: id,
                issueScore: 0,
                weight: 1
            }
            state.baseIssueScores.push(emptyIssueScore);
        }

        setData(JSON.parse(JSON.stringify(data)));
        setIssueId(id);
    }

    return (
        <div style={{textAlign:"left"}}>
            <h2>Issues Editor</h2>
            <label>Select Issue: </label>
            <select value={issueId} onChange={(e) => setIssueId(Number(e.target.value))}>
                {data.issues.map((issue) => <option value={issue.id} key={issue.id}>{issue.name}</option>)}
            </select>
            <button className="GreenButton" onClick={addIssue}>Add New Issue</button>
            <button className="RedButton" onClick={deleteIssue}>Delete Issue</button>
            {issue != undefined && <IssueEditor data={data} setData={setData} issue={issue}></IssueEditor>}
        </div>
    )
}

export default IssuesEditor;
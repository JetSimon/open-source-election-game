import { IssueScore } from "../../oseg/engine/models/IssueScore";
import { ScenarioModel } from "../../oseg/engine/models/ScenarioModel";

import "./IssueScoreEditor.css";

interface IssueScoreEditorProps {
    issueScore : IssueScore;
    data : ScenarioModel;
    setData : (data : ScenarioModel) => void;
}

function IssueScoreEditor(props : IssueScoreEditorProps) {

    const { issueScore, data, setData } = props;

    const linkedIssue = data.issues.filter((x) => x.id == issueScore.issueId)[0]

    if(linkedIssue == undefined) {
        return <p>Linked issue is undefined</p>
    }

    const remappedIssueScore = Math.min(Math.floor(
        ((issueScore.issueScore + 1) / 2) * (linkedIssue.stances.length)
    ), linkedIssue.stances.length - 1);

    function setIssueScore(newValue : number) {
        issueScore.issueScore = newValue;
        updateData();
    }

    function setIssueWeight(newValue : number) {
        issueScore.weight = newValue;
        updateData();
    }

    function updateData() {
        setData(JSON.parse(JSON.stringify(data)));
    }

    const stance = linkedIssue.stances[remappedIssueScore];

    return (
    <div className="IssueScoreEditor">
        <h4>{linkedIssue.name}</h4>
        <div className="IssueScoreEditorSlider">
            <label>Issue Score</label>
            <span> ({issueScore.issueScore}) ({stance})</span>
            <br></br>
            <input step="0.01" type="range" min="-1" max="1" value={issueScore.issueScore} onChange={(e) => setIssueScore(Number(e.target.value))}></input>
        </div>
        
        <div className="IssueScoreEditorSlider">
            <label>Issue Weight</label>
            <span> ({issueScore.weight})</span>
            <br></br>
            <input step="0.01" type="range" min="0" max="3" value={issueScore.weight} onChange={(e) => setIssueWeight(Number(e.target.value))}></input>
        </div>
    </div>
    )
}

export default IssueScoreEditor;
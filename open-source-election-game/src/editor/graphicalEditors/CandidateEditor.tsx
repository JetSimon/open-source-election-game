import { useState } from "react";
import { CandidateModel } from "../../oseg/engine/models/CandidateModel";
import { IssueScore } from "../../oseg/engine/models/IssueScore";
import { ScenarioModel } from "../../oseg/engine/models/ScenarioModel";
import { ScenarioSideModel } from "../../oseg/engine/models/ScenarioSideModel";
import EditorWarningBox from "../components/EditorWarningBox";
import GenericEditorInput from "../components/GenericEditorInput";
import GenericEditorTextArea from "../components/GenericEditorTextArea";
import IssueScoreEditor from "../components/IssueScoreEditor";

interface CandidateEditorProps {
    data: ScenarioModel;
    setData: (data: ScenarioModel) => void;
}

function CandidateEditor(props: CandidateEditorProps) {
    const { data, setData } = props;

    const [candidateId, setCandidateId] = useState(data.candidates.length == 0 ? -1 : data.candidates[0].id);

    const candidate = data.candidates.filter((x) => x.id == candidateId)[0];

    const isMissingIssueScores = candidate == undefined ? false : candidate.issueScores.length < data.issues.length;

    function updateFieldAndUpdateData<T>(field: string, newValue: T) {
        if(candidate == undefined) {
            return;
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const dynamicCandidate = candidate as { [k: string]: any; };
        dynamicCandidate[field] = newValue;
        setData(JSON.parse(JSON.stringify(data)));
    }

    function addMissingIssueScores() {
        const issuesHad = new Set(candidate.issueScores.map((x) => x.issueId));
        const issueIdsNeeded = data.issues.filter((x) => !issuesHad.has(x.id));

        for (const issue of issueIdsNeeded) {
            const issueScore: IssueScore = {
                issueId: issue.id,
                issueScore: 0,
                weight: 1
            };
            candidate.issueScores.push(issueScore);
        }

        setData(JSON.parse(JSON.stringify(data)));
    }

    const isPlayable = data.scenarioSides.filter((x) => x.playerId == candidateId).length > 0;

    function createSide() {
        if(!isPlayable) {
            const newSide :ScenarioSideModel = {
                playerId: candidateId,
                questions: []
            }
            console.log(data.scenarioSides.length);
            data.scenarioSides.push(newSide);
            console.log(data.scenarioSides.length)
            setData(JSON.parse(JSON.stringify(data)));
        }
    }

    function highestCandidateId() {
        if(data.candidates.length == 0) {
            return Math.round(Math.random() * 100000);
        }

        return Math.max(...data.candidates.map((x) => x.id));
    }
    
    function addCandidate() {
        const id = highestCandidateId() + 1;
        const newCandidate : CandidateModel = {
            id: id,
            firstName: "Seb",
            lastName: "Kastanos",
            party: "Freedom Party",
            homeState: "South Dakota",
            color: "#FF0000",
            issueScores: data.issues.map((issue) => {
                const issueScore : IssueScore = {
                    issueId: issue.id,
                    issueScore: 0,
                    weight: 1
                }
                return issueScore;
            }),
            description: "Just a normal guy",
            imageUrl: "https://placecats.com/300/300",
            runningMateIds: [],
            startingGlobalMultiplier: 1.0
        }

        data.candidates.push(newCandidate);

        for(const state of data.states) {
            state.baseCandidateStateModifiers.push({
                candidateId: id,
                amount: 1.0
            })
        }

        setData(JSON.parse(JSON.stringify(data)));
        setCandidateId(id);
    }

    function deleteCandidate() {
        data.candidates = data.candidates.filter((x) => x.id != candidateId);

        for(const state of data.states) {
            state.baseCandidateStateModifiers = state.baseCandidateStateModifiers.filter((x) => x.candidateId != candidateId);
        }

        for(const candidate of data.candidates) {
            candidate.runningMateIds = candidate.runningMateIds.filter((x) => x != candidateId);
        }

        data.scenarioSides = data.scenarioSides.filter((x) => x.playerId != candidateId);

        setData(JSON.parse(JSON.stringify(data)));
        setCandidateId(data.candidates.length == 0 ? -1 : data.candidates[0].id);
    }

    const runningMateSet = candidate == undefined ? new Set() : new Set(candidate.runningMateIds);

    function toggleRunningMate(mateId : number) {
        if(runningMateSet.has(mateId)) {
            candidate.runningMateIds = candidate.runningMateIds.filter((x) => x != mateId)
        }
        else {
            candidate.runningMateIds.push(mateId);
        }
        setData(JSON.parse(JSON.stringify(data)));
    }
    
    if(candidate == undefined) {
        return (<div style={{ textAlign: "left" }}>
        <h2>Candidate Editor</h2>
        <label htmlFor="candidateSelector">Select a Candidate: </label>
        <select value={candidateId} id="candidateSelector" onChange={(e) => setCandidateId(Number(e.target.value))}>
            {data.candidates.map((c) => <option key={c.id} value={c.id}>{c.firstName} {c.lastName}</option>)}
        </select>

        <button className="GreenButton" onClick={addCandidate}>Add Candidate</button>

        <p>No valid candidate is selected</p>
        </div>)
    }

    return (
        <div style={{ textAlign: "left" }}>
            <h2>Candidate Editor</h2>
            <label htmlFor="candidateSelector">Select a Candidate: </label>
            <select value={candidateId} id="candidateSelector" onChange={(e) => setCandidateId(Number(e.target.value))}>
                {data.candidates.map((c) => <option key={c.id} value={c.id}>{c.firstName} {c.lastName}</option>)}
            </select>

            <button className="GreenButton" onClick={addCandidate}>Add Candidate</button>
            <button className="RedButton" onClick={deleteCandidate}>Delete Candidate</button>

            <h3>Candidate Info</h3>

            {!isPlayable &&
            <EditorWarningBox destructiveAction={false} buttonText={"Create ScenarioSide for " + candidate.firstName + " " + candidate.lastName} onClick={createSide} header={"No ScenarioSide Defined"} body={"This candidate will not be playable without a ScenarioSide defined. Would you like to create a ScenarioSide for this candidate? You don't need to create one if they are only a running mate."} ></EditorWarningBox>
            }

            <div style={{ fontWeight: "bold" }}>Id: {candidate.id}</div>

            <GenericEditorInput
                defaultValue={candidate.firstName}
                onChange={(e) => updateFieldAndUpdateData<string>("firstName", e.target.value)}
                label={"First Name"}
                type={"text"}
            />

            <GenericEditorInput
                defaultValue={candidate.lastName}
                onChange={(e) => updateFieldAndUpdateData<string>("lastName", e.target.value)}
                label={"Last Name"}
                type={"text"}
            />

            <GenericEditorInput
                defaultValue={candidate.party}
                onChange={(e) => updateFieldAndUpdateData<string>("party", e.target.value)}
                label={"Party"}
                type={"text"}
            />

            <GenericEditorInput
                defaultValue={candidate.homeState}
                onChange={(e) => updateFieldAndUpdateData<string>("homeState", e.target.value)}
                label={"Home State"}
                type={"text"}
            />

            <GenericEditorInput
                defaultValue={candidate.color}
                onChange={(e) => updateFieldAndUpdateData<string>("color", e.target.value)}
                label={"Color"}
                type={"color"}
            />

            <GenericEditorTextArea
                label={"Description"}
                defaultValue={candidate.description}
                onChange={(e) => updateFieldAndUpdateData<string>("description", e.target.value)}
            />

            <GenericEditorInput
                defaultValue={candidate.imageUrl}
                onChange={(e) => updateFieldAndUpdateData<string>("imageUrl", e.target.value)}
                label={"Image Url"}
                type={"text"}
            />

            <GenericEditorInput
                defaultValue={candidate.bannerImageUrl ?? ""}
                onChange={(e) => updateFieldAndUpdateData<string>("bannerImageUrl", e.target.value)}
                label={"Banner Image Url (Leave Blank For None)"}
                type={"text"}
            />

            <GenericEditorInput
                defaultValue={candidate.startingGlobalMultiplier}
                onChange={(e) => updateFieldAndUpdateData<number>("startingGlobalMultiplier", Number(e.target.value))}
                label={"Starting Global Multiplier"}
                type={"number"}
            />

            <div>
                <h3>Running Mates</h3>
                <div>
                    {data.candidates.filter((x) => x.id != candidateId).map((candidate) => 
                        <button key={candidate.id} className={runningMateSet.has(candidate.id) ? "EditorToggleChecked" : "EditorToggleUnchecked"} onClick={() => toggleRunningMate(candidate.id)}>{candidate.firstName} {candidate.lastName}</button>
                    )}
                </div>
            </div>

            <h3>Issue Scores</h3>
            <div>
                {candidate.issueScores.sort().map((x) => <IssueScoreEditor data={data} setData={setData} issueScore={x}></IssueScoreEditor>)}
            </div>
            {isMissingIssueScores && <EditorWarningBox destructiveAction={false} buttonText="Create Missing IssueScores" onClick={addMissingIssueScores} header={"Not All IssueScores Defined"} body={"This candidate doesn't have all issue scores defined, this means they won't work in game. If they are a running mate this is fine. If not create some."} ></EditorWarningBox>}
        </div>
    );
}

export default CandidateEditor;
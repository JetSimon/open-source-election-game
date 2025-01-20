import { useEffect } from "react";
import ScenarioModel from "../../oseg/engine/models/ScenarioModel";
import QuestionEditor from "./QuestionEditor";

interface QuestionsEditorProps {
    data : ScenarioModel;
    setData : (data : ScenarioModel) => void;
    sideIndex: number;
    setSideIndex: (sideIndex : number) => void;
    questionIndex: number;
    setQuestionIndex: (questionIndex : number) => void;
}

function QuestionsEditor(props : QuestionsEditorProps) {

    function getNameForCandidate(id : number) {
        const can = data.candidates.filter(x => x.id == id)[0];
        return can.firstName + " " + can.lastName;
    }

    const {data, setData, sideIndex, setSideIndex, questionIndex, setQuestionIndex} = props;

    const side = data.scenarioSides[sideIndex];

    useEffect(() => {
        if(side != undefined) {
            setQuestionIndex(0)
        }
    }, [sideIndex]);

    if(data.scenarioSides.length == 0 || side == undefined) {
        return <p>There are no scenario sides defined. Go to Candidates and create a new ScenarioSide from there for the candidate you want to be able to play as.</p>
    }

    function deleteSide() {

        if(data.scenarioSides.length == 1) {
            alert("You cannot delete the last side from the OSEG editor. Create a new one and then delete this one.");
            return;
        }

        data.scenarioSides.splice(sideIndex, 1);
        setData(JSON.parse(JSON.stringify(data)));
    }

    const questions = side.questions;

    function deleteQuestion() {
        side.questions.splice(questionIndex, 1);
        setData(JSON.parse(JSON.stringify(data)));
        if(side.questions[questionIndex] == undefined && side.questions.length > 0) {
            setQuestionIndex(side.questions.length - 1);
        }
    }

    function highestQuestionId() {
        if(side.questions.length == 0) {
            return Math.round(Math.random() * 1000000)
        }

        return Math.max(...side.questions.map((x) => x.id));
    }

    function addQuestion() {
        const id = highestQuestionId() + 1;
        side.questions.push({
            id: id,
            description: "Description goes here",
            answers: [],
            keepInPlaceIfQuestionsShuffled: true,
            enabled: true,
            onlyEnableAtStartIfRunningMateId: -1
        })
        setData(JSON.parse(JSON.stringify(data)));
        setQuestionIndex(side.questions.length - 1);
    }

    return (
        <div style={{textAlign:"left"}}>
            <label>Select a Scenario Side: </label>
            <select value={sideIndex} onChange={(e) => setSideIndex(Number(e.target.value))}>
                {data.scenarioSides.map((x) => <option key={x.playerId} value={data.scenarioSides.indexOf(x)}>{getNameForCandidate(x.playerId)}</option>)}
            </select>

            <button className="RedButton" onClick={deleteSide}>Delete Scenario Side</button>

            <br></br>

            {
                side.questions.length == 0 ?
                <div>
                    <button className="GreenButton" onClick={addQuestion}>Add Question</button>
                    <p>This Scenario Side has no questions yet!</p>
                </div>
                :
                <div>
                <label>Select a Question: </label>
                <select value={questionIndex} onChange={(e) => setQuestionIndex(Number(e.target.value))}>
                    {questions.map(question => <option value={questions.indexOf(question)}>{questions.indexOf(question) + 1} - {question.description.slice(0, 30)}...</option>)}
                </select>

                <button className="GreenButton" onClick={addQuestion}>Add Question</button>
                <button className="RedButton" onClick={deleteQuestion}>Delete Question</button>
                
                <QuestionEditor sideIndex={sideIndex} questionIndex={questionIndex} question={side.questions[questionIndex]} data={data} setData={setData}></QuestionEditor>
                
                </div>
            }
            
        </div>
    )
}

export default QuestionsEditor;
import { useEffect, useState } from "react";
import { Engine } from "../../../engine/Engine";
import { QuestionModel } from "../../../engine/models/QuestionModel";
import DebugMenuAnswer from "./DebugMenuAnswer";

interface DebugMenuProps {
    currentQuestion : QuestionModel;
    engine : Engine;
    setCurrentQuestion : (q : QuestionModel) => void;
}

function DebugMenu(props : DebugMenuProps) {

    const { engine, currentQuestion, setCurrentQuestion } = props;

    const [questionIndex, setQuestionIndex] = useState(engine.currentQuestionIndex);

    const [candidateGlobalMultiplier, setCandidateGlobalMultiplier] = useState(engine.scenarioController.getGlobalModifierForCandidate(engine.getPlayerCandidateController().getId()))

    function goToQuestionIndex() {
        engine.currentQuestionIndex = questionIndex;
        engine.currentQuestionNumber = questionIndex + 1;

        const question = engine.getCurrentQuestion();

        if(question != null) {
            setCurrentQuestion(question);
        }
        else {
            alert("Cannot go to null question");
        }
    }

    useEffect(() => {
        const candidateId = engine.getPlayerCandidateController().getId();
        engine.scenarioController.setCandidateGlobalModifier(candidateId, candidateGlobalMultiplier);
    }, [candidateGlobalMultiplier, engine])

    return (
        <div className="DebugMenu">

            <div className="DebugMenuButtons">

                <h4>Debug Menu</h4>

                <div className="DebugMenuOption">
                    <label>Go to Question: </label>
                    <select onChange={(e) => setQuestionIndex(Number(e.target.value))} value={questionIndex}>
                        {
                            engine.scenarioController.questions.map((question, index) => {
                                return <option value={index}>{index + 1} - {question.description.slice(0, 30) + "..."}</option>
                            })
                        }
                    </select>
                    <button onClick={goToQuestionIndex}>Go</button>
                </div>

                <div className="DebugMenuOption">
                    <label>Difficulty: </label>
                    <input style={{margin:"auto",maxWidth:"200px"}} step="0.1" type="range" min="0" max="100" onChange={(e) => setCandidateGlobalMultiplier(Number(e.target.value))} value={candidateGlobalMultiplier}></input>
                    <input style={{margin:"auto",maxWidth:"200px"}}  value={candidateGlobalMultiplier} onChange={(e) => setCandidateGlobalMultiplier(Number(e.target.value))}></input>
                    <p style={{margin:0,fontSize:"x-small"}}>Low = hard, high = easy</p>
                </div>

            </div>

            <details className="DebugMenuDropdown">
                <summary>
                    Benefit Checker
                </summary>

                {currentQuestion.answers.map((answer) => (
                    <DebugMenuAnswer answer={answer} engine={engine}></DebugMenuAnswer>
                ))}
            </details>
        </div>
    )
}

export default DebugMenu;
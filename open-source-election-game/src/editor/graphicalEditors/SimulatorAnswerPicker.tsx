import { useState } from "react";
import { ScenarioModel } from "../../oseg/engine/models/ScenarioModel";

import "./SimulatorAnswerPicker.css";

interface SimulatorAnswerPickerProps {
    data: ScenarioModel;
    sideIndex: number;
    selectedAnswerIds: Set<number>;
    setSelectedAnswersId: (selectedAnswerIds: Set<number>) => void;
}

function SimulatorAnswerPicker(props: SimulatorAnswerPickerProps) {
    const { data, sideIndex, selectedAnswerIds, setSelectedAnswersId } = props;

    const questions = data.scenarioSides[sideIndex].questions;

    const [lockedInStatus, setLockedInStatus] = useState<boolean[]>(Array(questions.length).fill(false));
    const [tempAnswerIds, setTempAnswerIds] = useState<number[]>(Array(questions.length).fill(null));
    const [showBasic, setShowBasic] = useState<boolean>(true);
    const [advancedText, setAdvancedText] = useState<string>('');

    const trackSelectedAnswer = (answerId: number, questionIndex: number) => {
        const updatedTempAnswers = [...tempAnswerIds];
        updatedTempAnswers[questionIndex] = answerId;
        setTempAnswerIds(updatedTempAnswers);

        // If answer is locked in, update selectedAnswerIds automatically
        if (lockedInStatus[questionIndex]) {
            const updatedSelectedAnswerIds = new Set(selectedAnswerIds);
            updatedSelectedAnswerIds.add(answerId);
            setSelectedAnswersId(updatedSelectedAnswerIds);
        }
    }

    const lockInAnswer = (questionIndex: number, checked: boolean) => {
        const updatedLockedInStatus = [...lockedInStatus];
        updatedLockedInStatus[questionIndex] = checked;
        setLockedInStatus(updatedLockedInStatus);
        
        let answerId = tempAnswerIds[questionIndex];

        if (answerId == null) {
            answerId = questions[questionIndex].answers[0].id;
        }

        const updatedSelectedAnswerIds = new Set(selectedAnswerIds);
        
        if (checked) {
            updatedSelectedAnswerIds.add(answerId);
        } else {
            updatedSelectedAnswerIds.delete(answerId);
        }
        setSelectedAnswersId(updatedSelectedAnswerIds);
    }

    const lockInAllAnswers = () => {
        const answerIds = questions.map((question, index) => {
            const selectedAnswerId = tempAnswerIds[index];
            const defaultAnswerId = question.answers[0].id;
            return selectedAnswerId !== null ? selectedAnswerId : defaultAnswerId;
        });

        const updatedAnswers = new Set<number>(answerIds);
        setSelectedAnswersId(updatedAnswers);
        setLockedInStatus(Array(questions.length).fill(true));
    };

    const unlockAllAnswers = () => {
        setSelectedAnswersId(new Set());
        setTempAnswerIds(Array(questions.length).fill(null));
        setLockedInStatus(Array(questions.length).fill(false));
    };

    const clickDetails = () => {
        setShowBasic(!showBasic);
    }

    const getSimulatorInputAnswers = () => {
        const splitAnswerIds = advancedText.replace(/\s/g, "").split(",");
        const simulatorInputAnswers = splitAnswerIds.map(id => parseInt(id)).filter(id => !isNaN(id));
        setSelectedAnswersId(new Set(simulatorInputAnswers));
    }

    return (
        <div>
            <details>
                <summary onClick={clickDetails}>Manually enter ids</summary>
                <p>For situations where you the answer id may not be in data.json, or for quick copy + paste testing - input COMPLETE list of answer ids separated by commas:</p>
                <textarea className="SimulatorAnswerTextarea" value={advancedText} onChange={(e) => setAdvancedText(e.target.value)}></textarea>
                <p>Make sure to Lock In Logic Answers before simulating</p>
                <button onClick={getSimulatorInputAnswers}>Lock In Logic Answers</button>
            </details>
            {showBasic && (
                <div>
                    <button onClick={lockInAllAnswers}>Lock All Answers</button>
                    <button onClick={unlockAllAnswers}>Unlock All Answers</button>
                    <ol>
                        {questions.map((question, questionIndex) => (
                            <div key={questionIndex}>
                                <li>{question.description}</li>
                                <select 
                                    className="SimulatorAnswerSelect" 
                                    value={tempAnswerIds[questionIndex] || ""} 
                                    onChange={(e) => trackSelectedAnswer(parseInt(e.target.value), questionIndex)}
                                >
                                    {question.answers.map((answer, answerIndex) => (
                                        <option key={answerIndex} value={answer.id}>
                                            {answer.description}
                                        </option>
                                    ))}
                                </select>
                                <label>Lock in:</label>
                                <input type="checkbox" checked={lockedInStatus[questionIndex]} onChange={(e) => lockInAnswer(questionIndex, e.target.checked)}></input>
                            </div>
                        ))}
                    </ol>
                </div>
            )}
        </div>
    )
}

export default SimulatorAnswerPicker;
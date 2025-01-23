import { useState } from "react";
import ScenarioModel from "../../oseg/engine/models/ScenarioModel";

import "./SimulatorAnswerPicker.css";

interface SimulatorAnswerPickerProps {
    data: ScenarioModel;
    sideIndex: number;
    selectedAnswerIds: number[];
    setSelectedAnswersId: (selectedAnswerIds: number[]) => void;
}

function SimulatorAnswerPicker(props: SimulatorAnswerPickerProps) {
    const { data, sideIndex, selectedAnswerIds, setSelectedAnswersId } = props;

    const questions = data.scenarioSides[sideIndex].questions;

    const [tempSelectedAnswers, setTempSelectedAnswers] = useState<number[]>(Array(questions.length).fill(null));
    const [lockedInStatus, setLockedInStatus] = useState<boolean[]>(Array(questions.length).fill(false));

    const [showBasic, setShowBasic] = useState<boolean>(true);

    const [logicIsOpen, setLogicIsOpen] = useState<boolean>(false);
 
    const [advancedText, setAdvancedText] = useState<string>('');

    const trackSelectedAnswer = (answerId: number, questionIndex: number) => {
        const updatedTempAnswers = [...tempSelectedAnswers];
        updatedTempAnswers[questionIndex] = answerId;
        setTempSelectedAnswers(updatedTempAnswers);

        // If answer is locked in, update selectedAnswerIds automatically
        if (lockedInStatus[questionIndex]) {
            const updatedAnswers = [...selectedAnswerIds];
            updatedAnswers[questionIndex] = answerId;
            setSelectedAnswersId(updatedAnswers);
        }
    }

    // Update answer ids when user checks lock in checkbox
    const lockInAnswers = (questionIndex: number, checked: boolean) => {
        let answerId = tempSelectedAnswers[questionIndex];

        // Use default options in dropdown 
        if (answerId == null) {
            answerId = questions[questionIndex].answers[0].id;
        }

        if (checked && answerId != null) {
            const updatedAnswers = [...selectedAnswerIds];
            updatedAnswers[questionIndex] = answerId;
            setSelectedAnswersId(updatedAnswers);
        }

        const updatedLockedQuestions = [...lockedInStatus];
        updatedLockedQuestions[questionIndex] = checked;
        setLockedInStatus(updatedLockedQuestions);
    }

    const lockInAllAnswers = () => {
        const updatedAnswers = questions.map((question, index) => {
            const selectedAnswerId = tempSelectedAnswers[index];
            const defaultAnswerId = question.answers[0].id;
            return selectedAnswerId !== null ? selectedAnswerId : defaultAnswerId;
        });

        setSelectedAnswersId(updatedAnswers);
        setLockedInStatus(Array(questions.length).fill(true));
    };

    const unlockAllAnswers = () => {
        setSelectedAnswersId(Array(questions.length).fill(null));
        setLockedInStatus(Array(questions.length).fill(false));
        setTempSelectedAnswers(Array(questions.length).fill(null));
    };

    const clickDetails = () => {
        // Open/Close Logic textarea
        const detailIsOpen = !logicIsOpen;
        setLogicIsOpen(!logicIsOpen);

        if (detailIsOpen) {
            setShowBasic(false);
            unlockAllAnswers();
        } else {
            setShowBasic(true);
            setSelectedAnswersId(Array(questions.length).fill(null));
        }
    }

    const getSimulatorInputAnswers = () => {
        // Converts into numbers array
        const splitAnswerIds = advancedText.replace(/\s/g, "").split(",").map(id => parseInt(id)).filter(id => !isNaN(id));
        setSelectedAnswersId(splitAnswerIds);
    }

    return (
        <div>
            <details>
                <summary onClick={clickDetails}>Manual Mode</summary>
                <p>For situations where answer ids may not be in the default data.json - input COMPLETE list of answer ids separated by commas:</p>
                <textarea className="SimulatorAnswerTextarea" value={advancedText} onChange={(e) => setAdvancedText(e.target.value)}></textarea>
                <p>Hit Lock In Answers before you press Simulate</p>
                <button onClick={getSimulatorInputAnswers}>Lock In Answers</button>
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
                                    value={tempSelectedAnswers[questionIndex] || ""} 
                                    onChange={(e) => trackSelectedAnswer(parseInt(e.target.value), questionIndex)}
                                >
                                    {question.answers.map((answer, answerIndex) => (
                                        <option key={answerIndex} value={answer.id}>
                                            {answer.description}
                                        </option>
                                    ))}
                                </select>
                                <label>Lock in:</label>
                                <input type="checkbox" checked={lockedInStatus[questionIndex]} onChange={(e) => lockInAnswers(questionIndex, e.target.checked)}></input>
                            </div>
                        ))}
                    </ol>
                </div>
            )}
        </div>
    )
}

export default SimulatorAnswerPicker;
import ScenarioModel from "../../oseg/engine/models/ScenarioModel";

import "./SimulatorAnswerPicker.css";

interface SimulatorAnswerPickerProps {
    data: ScenarioModel;
    sideIndex: number;
    selectedAnswerIds : number[];
    setSelectedAnswersId: (selectedAnswerIds: number[]) => void;
}   

function SimulatorAnswerPicker(props : SimulatorAnswerPickerProps) {
    const { data, sideIndex, selectedAnswerIds, setSelectedAnswersId } = props;

    const questions = data.scenarioSides[sideIndex].questions;

    console.log(selectedAnswerIds);

    // Update array with new answer id when different option is selected
    const updateSelectedAnswers = (answerId : number, questionIndex : number) => {
        const updatedAnswers = [...selectedAnswerIds];
        updatedAnswers[questionIndex] = answerId;
        setSelectedAnswersId(updatedAnswers);
    }

    return (
        <div>
            <ol>
                {questions.map((question, questionIndex) => (
                    <div key={questionIndex}>   
                        <li>{question.description}</li>
                        <select className="SimulatorAnswerSelect" onChange={(e) => updateSelectedAnswers(parseInt(e.target.value), questionIndex)}>
                            {question.answers.map((answer, answerIndex) => (
                                <option key={answerIndex} value={answer.id}>
                                    {answer.description}
                                </option>
                            ))}
                        </select>
                    </div>
                ))}
            </ol>
        </div>
    )
}

export default SimulatorAnswerPicker;
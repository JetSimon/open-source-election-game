import Engine from "../engine/Engine";
import QuestionModel from "../models/QuestionModel";
import Answer from "../components/Answer";
import AnswerModel from "../models/AnswerModel";
import "./QuestionView.css";

interface QuestionViewProps {
    currentQuestionIndex: number,
    engine: Engine;
    currentQuestion: QuestionModel;
    submitAnswer: () => void;
    selectedAnswer: AnswerModel | null;
    setSelectedAnswer: (answer: AnswerModel) => void;
}

function QuestionView(props: QuestionViewProps) {
    const { currentQuestion, currentQuestionIndex, engine, submitAnswer, selectedAnswer, setSelectedAnswer } = props;
    return (
        <div className="QuestionView">
            <div>
                <h2>Question {currentQuestionIndex + 1}/{engine.getNumberOfQuestions()}</h2>

                <p className="QuestionDescription">{currentQuestion.description}</p>
                <div>
                    {currentQuestion.answers.map((answerModel) => <Answer answerId={currentQuestion.answers.indexOf(answerModel).toString()} key={currentQuestion.answers.indexOf(answerModel)} answerModel={answerModel} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer}></Answer>)}
                </div>

                <button className="ConfirmAnswerButton" onClick={submitAnswer}>Okay</button>
            </div>
        </div>
    );
}

export default QuestionView;
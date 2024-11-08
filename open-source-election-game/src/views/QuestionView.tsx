import Engine from "../engine/Engine";
import QuestionModel from "../models/QuestionModel";
import Answer
    from "../components/Answer";
import AnswerModel from "../models/AnswerModel";
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
        <>
            <div>
                <h2>Question {currentQuestionIndex + 1}/{engine.getNumberOfQuestions()}</h2>

                <p>{currentQuestion.description}</p>
                <div>
                    {currentQuestion.answers.map((answerModel) => <Answer answerId={currentQuestion.answers.indexOf(answerModel).toString()} key={currentQuestion.answers.indexOf(answerModel)} answerModel={answerModel} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer}></Answer>)}
                </div>

                <button onClick={submitAnswer}>Okay</button>
            </div>
        </>
    );
}

export default QuestionView;
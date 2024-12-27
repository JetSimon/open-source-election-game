import { Engine } from "../engine/Engine";
import QuestionModel from "../models/QuestionModel";
import Answer from "../components/Answer";
import AnswerModel from "../models/AnswerModel";
import "./QuestionView.css";
import ThemeModel from "../models/ThemeModel";
interface QuestionViewProps {
  currentQuestionIndex: number;
  engine: Engine;
  currentQuestion: QuestionModel;
  submitAnswer: () => void;
  selectedAnswer: AnswerModel | null;
  setSelectedAnswer: (answer: AnswerModel) => void;
  theme : ThemeModel;
}

function QuestionView(props: QuestionViewProps) {
  const {
    currentQuestion,
    currentQuestionIndex,
    engine,
    submitAnswer,
    selectedAnswer,
    setSelectedAnswer,
    theme
  } = props;
  return (
    <div className="QuestionView">
      <div>
        <h2>
          Question {currentQuestionIndex + 1}/{engine.getNumberOfQuestions()}
        </h2>

        <p style={{backgroundColor:theme.secondaryGameWindowColor, color:theme.secondaryGameWindowTextColor}} className="QuestionDescription">{currentQuestion.description}</p>
        <div className="AnswerHolder" style={{backgroundColor:theme.primaryGameWindowColor, color:theme.primaryGameWindowTextColor}}>
          {currentQuestion.answers.map((answerModel) => (
            <Answer
              answerId={currentQuestion.answers.indexOf(answerModel).toString()}
              key={currentQuestion.answers.indexOf(answerModel)}
              answerModel={answerModel}
              selectedAnswer={selectedAnswer}
              setSelectedAnswer={setSelectedAnswer}
            ></Answer>
          ))}
            <button style={{backgroundColor:theme.secondaryGameWindowColor, color:theme.secondaryGameWindowTextColor}}
          disabled={selectedAnswer == null}
          className="ConfirmAnswerButton"
          onClick={submitAnswer}
        >
          Okay
        </button>
        </div>

      </div>
    </div>
  );
}

export default QuestionView;

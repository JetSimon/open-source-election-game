import QuestionModel from "../../engine/models/QuestionModel";
import Answer from "../components/Answer";
import AnswerModel from "../../engine/models/AnswerModel";
import "./QuestionView.css";
import ThemeModel from "../../engine/models/ThemeModel";
interface QuestionViewProps {
  currentQuestion: QuestionModel;
  submitAnswer: () => void;
  selectedAnswer: AnswerModel | null;
  setSelectedAnswer: (answer: AnswerModel) => void;
  theme : ThemeModel;
}

function QuestionView(props: QuestionViewProps) {
  const {
    currentQuestion,
    submitAnswer,
    selectedAnswer,
    setSelectedAnswer,
    theme
  } = props;
  return (
    <div style={{backgroundColor:theme.secondaryGameWindowColor, color:theme.secondaryGameWindowTextColor}}  className="QuestionView">
      <div>
        <p style={{backgroundColor:theme.primaryGameWindowColor, color:theme.primaryGameWindowTextColor}} className="QuestionDescription" dangerouslySetInnerHTML={{__html:currentQuestion.description}}></p>
        <div className="AnswerHolder">
          {currentQuestion.answers.map((answerModel) => (
            <Answer
              answerId={currentQuestion.answers.indexOf(answerModel).toString()}
              key={currentQuestion.answers.indexOf(answerModel)}
              answerModel={answerModel}
              selectedAnswer={selectedAnswer}
              setSelectedAnswer={setSelectedAnswer}
            ></Answer>
          ))}
            <button style={{backgroundColor:theme.primaryGameWindowColor, color:theme.secondaryGameWindowTextColor}}
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

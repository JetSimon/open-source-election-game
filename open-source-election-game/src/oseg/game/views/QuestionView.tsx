import QuestionModel from "../../engine/models/QuestionModel";
import Answer from "../components/Answer";
import AnswerModel from "../../engine/models/AnswerModel";
import "./QuestionView.css";
import ThemeModel from "../../engine/models/ThemeModel";

import { useEffect } from "react";

interface QuestionViewProps {
  currentQuestion: QuestionModel;
  submitAnswer: () => void;
  selectedAnswer: AnswerModel | null;
  setSelectedAnswer: (answer: AnswerModel) => void;
  theme : ThemeModel;
  setShowMap : (b : boolean) => void;
}

function QuestionView(props: QuestionViewProps) {
  const {
    currentQuestion,
    submitAnswer,
    selectedAnswer,
    setSelectedAnswer,
    theme,
    setShowMap
  } = props;

  useEffect(() => {
    function answerKeyPress(e : KeyboardEvent) {

      if(e.key == "Enter" && selectedAnswer != null) {
        submitAnswer();
        console.log("answer submitted")
        return;
      }

      const keyAsNumber = parseInt(e.key);

      if(!isNaN(keyAsNumber)) {
        if(keyAsNumber < 1 || keyAsNumber > currentQuestion.answers.length) {
          return;
        }
        setSelectedAnswer(currentQuestion.answers[keyAsNumber - 1]);
      }
    }

    window.addEventListener("keydown", answerKeyPress);

    return () => {
      window.removeEventListener("keydown", answerKeyPress);
    }
  }, [setSelectedAnswer, currentQuestion.answers, selectedAnswer, submitAnswer])

  return (
    <div style={{backgroundColor:theme.primaryGameWindowColor, color:theme.primaryGameWindowTextColor}}  className="QuestionView">
      <div>
        <p style={{backgroundColor:theme.questionBackgroundColor ?? theme.secondaryGameWindowColor, color:theme.questionTextColor ?? theme.secondaryGameWindowTextColor}} className="QuestionDescription" dangerouslySetInnerHTML={{__html:currentQuestion.description}}></p>
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
        </div>
        <button
          disabled={selectedAnswer == null}
          className="ConfirmAnswerButton"
          onClick={submitAnswer}
          style={{fontWeight:"bold"}}
        >
          CONTINUE
        </button>
        <button className="ToggleMapButton" onClick={() => setShowMap(true)}>Latest Polls/Electoral Map</button>
      </div>
    </div>
  );
}

export default QuestionView;

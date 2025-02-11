import { Engine } from "../../engine/Engine";
import { AnswerModel } from "../../engine/models/AnswerModel";
import { QuestionModel } from "../../engine/models/QuestionModel";
import { ThemeModel } from "../../engine/models/ThemeModel";
import Answer from "../components/Answer";
import "./InGameTooltip.css";
import "./QuestionView.css";

interface QuestionViewProps {
  currentQuestion: QuestionModel;
  submitAnswer: () => void;
  selectedAnswer: AnswerModel | null;
  setSelectedAnswer: (answer: AnswerModel) => void;
  theme : ThemeModel;
  setShowMap : (b : boolean) => void;
  showingFeedbackBox : boolean;
  engine : Engine;
}

function QuestionView(props: QuestionViewProps) {


  const {
    currentQuestion,
    submitAnswer,
    selectedAnswer,
    setSelectedAnswer,
    theme,
    setShowMap,
    showingFeedbackBox,
    engine
  } = props;

  function answerKeyPress(e : React.KeyboardEvent<HTMLDivElement>) {

    if(e.repeat || showingFeedbackBox) {
      return;
    }

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

    let answerDelta = 0;
    if(e.key == "w" || e.key == "ArrowUp") {
      answerDelta = -1;
    }
    else if(e.key == "s" || e.key == "ArrowDown") {
      answerDelta = 1;
    }

    if(answerDelta == 0) {
      return;
    }

    let newAnswerIndex = selectedAnswer == null ? 0 : currentQuestion.answers.indexOf(selectedAnswer) + answerDelta; 
    if(newAnswerIndex < 0) {
      newAnswerIndex = currentQuestion.answers.length - 1;
    }
    newAnswerIndex = newAnswerIndex % currentQuestion.answers.length;

    setSelectedAnswer(currentQuestion.answers[newAnswerIndex])
  }

  return (
    <div style={{backgroundColor:theme.primaryGameWindowColor, color:theme.primaryGameWindowTextColor}}  className="QuestionView">
      <div className="QuestionArea">
        <h3 style={{backgroundColor:theme.questionBackgroundColor ?? theme.secondaryGameWindowColor, color:theme.questionTextColor ?? theme.secondaryGameWindowTextColor}} className="QuestionDescription" dangerouslySetInnerHTML={{__html:engine.addTooltips(currentQuestion.description)}}></h3>
        <div onKeyDown={answerKeyPress} className="AnswerHolder">
          {currentQuestion.answers.map((answerModel, idx) => (
            <Answer
              engine={engine}
              index={idx}
              showingFeedbackBox={showingFeedbackBox}
              answerId={currentQuestion.answers.indexOf(answerModel).toString()}
              key={answerModel.id}
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
        <button className="ToggleMapButton" onClick={() => setShowMap(true)}>{engine.getLocalization("Latest Polls/Electoral Map")}</button>
      </div>
    </div>
  );
}

export default QuestionView;

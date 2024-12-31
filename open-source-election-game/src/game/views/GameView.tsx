import { useState } from "react";

import QuestionView from "./QuestionView";
import EndingView from "./EndingView";
import PopupBox from "../components/PopupBox";
import MapView from "./MapView";
import BottomBanner from "../components/BottomBanner";
import { Engine } from "../../engine/Engine";
import AnswerModel from "../../engine/models/AnswerModel";
import StateController from "../../engine/controllers/StateController";
import ThemeModel from "../../engine/models/ThemeModel";

interface GameViewProps {
  engine: Engine;
  mapSvg: string;
  theme: ThemeModel;
  setTheme: (theme : ThemeModel) => void;
}

let showFeedback = true;
let autoplayHandle: undefined | number = undefined;

function GameView(props: GameViewProps) {
  const { engine, mapSvg, theme, setTheme } = props;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
    engine.currentQuestionIndex
  );
  const [currentQuestion, setCurrentQuestion] = useState(
    engine.getCurrentQuestion()
  );
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerModel | null>(
    null
  );
  const [showMap, setShowMap] = useState(false);

  const [feedbackText, setFeedbackText] = useState("");
  const [showingFeedbackBox, setShowingFeedbackBox] = useState(false);

  function showFeedbackPopup(body : string) {
    setFeedbackText(body);
    setShowingFeedbackBox(true);
  }

  function autoplay() {
    if (engine.isGameOver()) {
      clearInterval(autoplayHandle);
      return;
    }

    const answer = document.getElementsByClassName("Answer")[0];
    if(!answer) {
      return;
    }

    if(answer.firstChild)
    {
      const radioButton = answer.firstChild as HTMLInputElement;
      radioButton.click();

      const confirmButton = document.getElementsByClassName("ConfirmAnswerButton")[0] as HTMLButtonElement;
      if(confirmButton) {
        confirmButton.click();
      }
    }
  }

  function startAutoplay() {
    if (autoplayHandle) {
      clearInterval(autoplayHandle);
    }

    showFeedback = false;
    autoplayHandle = setInterval(autoplay, 25);
    if(engine.currentScenario) {
      engine.currentScenario.hasStateVisits = false;
    }
  }

  function submitAnswer() {
    if (selectedAnswer == null) {
      alert("You must select an answer!");
      return;
    }

    if (showFeedback && selectedAnswer.feedback != "") {
      showFeedbackPopup(selectedAnswer.feedback);
    }

    engine.applyAnswer(selectedAnswer);
    setSelectedAnswer(null);
    engine.nextQuestion();
    setCurrentQuestionIndex(engine.currentQuestionIndex);

    // Force theme to update after a question is answered
    setTheme(JSON.parse(JSON.stringify(engine.scenarioController.theme)));

    if (engine.isGameOver()) {
      alert("Game over!");
      return;
    }

    if(engine.currentScenario != null && engine.currentScenario.hasStateVisits) {
      setShowMap(true);
      engine.waitingToPickState = true;
    }
    
    setCurrentQuestion(engine.getCurrentQuestion());
  }

  function onStateClicked(state : StateController) {

    if(!engine.waitingToPickState) {
      return;
    }

    engine.waitingToPickState = false;
    // Apply state visit bonus
    state.changeCandidateStateModifier(engine.getPlayerCandidateController().getId(), 0.01);
    setShowMap(false);
  }

  if (currentQuestion == null) {
    return <p>Current question is null</p>;
  }

  const questionString = engine.isGameOver() ? "" : "Question " + (currentQuestionIndex + 1) + "/" + engine.getNumberOfQuestions();

  return (
    <div className="GameView">
      {engine.isGameOver() ? (
        <div className="EndingViewHolder">
        <EndingView theme={theme} engine={engine} mapSvg={mapSvg}></EndingView>
        </div>
      ) :
      (
        engine.waitingToPickState || showMap ?
        <MapView theme={theme} onStateClicked={onStateClicked} engine={engine} mapSvg={mapSvg}></MapView>
        :
        (
        <QuestionView
          currentQuestion={currentQuestion}
          submitAnswer={submitAnswer}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          theme={theme}
        ></QuestionView>
        )
      )}
      <div className="BottomButtons">
      {!engine.isGameOver() && !engine.waitingToPickState && <button style={{backgroundColor:theme.secondaryGameWindowColor, color:theme.secondaryGameWindowTextColor}} onClick={() => setShowMap(!showMap)}>{showMap ? "Hide Map" : "Show Map"}</button>}
      {!engine.isGameOver() && !engine.waitingToPickState && !showMap && <button onClick={startAutoplay}>Autoplay</button>}
      </div>
      {!engine.isGameOver() && engine.waitingToPickState && <p className="ChooseState" style={{color:theme.primaryGameWindowTextColor}}>Click on a state to visit</p>}
      <h3 style={{color:theme.primaryGameWindowTextColor}}>{questionString}</h3>
      <BottomBanner theme={theme} engine={engine}></BottomBanner>
      <PopupBox
        title="Feedback"
        body={feedbackText}
        buttonText="Okay"
        isShowing={showingFeedbackBox}
        setIsShowing={setShowingFeedbackBox}
        image={theme.advisorImage}
      ></PopupBox>
    </div>
  );
}

export default GameView;

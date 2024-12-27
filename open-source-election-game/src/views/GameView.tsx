import { useState } from "react";

import QuestionView from "./QuestionView";
import EndingView from "./EndingView";
import PopupBox from "../components/PopupBox";
import MapView from "./MapView";
import BottomBanner from "../components/BottomBanner";
import { Engine } from "../engine/Engine";
import AnswerModel from "../models/AnswerModel";
import StateController from "../engine/controllers/StateController";
import ThemeModel from "../models/ThemeModel";

interface GameViewProps {
  engine: Engine;
  mapUrl: string;
  theme: ThemeModel;
}

let autoplayHandle: undefined | number = undefined;

function GameView(props: GameViewProps) {
  const { engine, mapUrl, theme } = props;

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

  function autoplay() {
    if (engine.isGameOver()) {
      clearInterval(autoplayHandle);
      return;
    }

    const answer = currentQuestion?.answers[0];
    if (answer != undefined) {
      setSelectedAnswer(answer);
      if (selectedAnswer != null) submitAnswer(false);
    } else {
      console.error("Answer undefined");
    }
  }

  function startAutoplay() {
    if (autoplayHandle) {
      clearInterval(autoplayHandle);
    }

    autoplayHandle = setInterval(autoplay, 50);
    if(engine.currentScenario) {
      engine.currentScenario.hasStateVisits = false;
    }
  }

  function submitAnswer(showFeedback = true) {
    if (selectedAnswer == null) {
      alert("You must select an answer!");
      return;
    }

    if (showFeedback) {
      setFeedbackText(selectedAnswer.feedback);
      setShowingFeedbackBox(true);
    }

    engine.applyAnswer(selectedAnswer);
    setSelectedAnswer(null);
    engine.nextQuestion();
    setCurrentQuestionIndex(engine.currentQuestionIndex);

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

  return (
    <div className="GameView">
      {!engine.isGameOver() && !engine.waitingToPickState && !showMap && <button onClick={startAutoplay}>Autoplay (PRESS TWICE)</button>}
      {engine.isGameOver() ? (
        <div className="EndingViewHolder">
        <EndingView theme={theme} engine={engine}></EndingView>
        <MapView theme={theme} onStateClicked={null} engine={engine} mapUrl={mapUrl}></MapView>
        </div>
      ) :
      (
        engine.waitingToPickState || showMap ?
        <MapView theme={theme} onStateClicked={onStateClicked} engine={engine} mapUrl={mapUrl}></MapView>
        :
        (
        <QuestionView
          currentQuestionIndex={currentQuestionIndex}
          engine={engine}
          currentQuestion={currentQuestion}
          submitAnswer={submitAnswer}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          theme={theme}
        ></QuestionView>
        )
      )}
      {!engine.isGameOver() && !engine.waitingToPickState && <button style={{backgroundColor:theme.secondaryGameWindowColor, color:theme.secondaryGameWindowTextColor}} onClick={() => setShowMap(!showMap)}>{showMap ? "Hide Map" : "Show Map"}</button>}
      {!engine.isGameOver() && engine.waitingToPickState && <p style={{color:theme.primaryGameWindowTextColor}}>Choose a state to visit</p>}
      <BottomBanner theme={theme} engine={engine}></BottomBanner>
      <PopupBox
        title="Feedback"
        body={feedbackText}
        buttonText="Okay"
        isShowing={showingFeedbackBox}
        setIsShowing={setShowingFeedbackBox}
      ></PopupBox>
    </div>
  );
}

export default GameView;

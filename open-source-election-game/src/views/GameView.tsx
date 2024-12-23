import { useState } from "react";

import QuestionView from "./QuestionView";
import EndingView from "./EndingView";
import PopupBox from "../components/PopupBox";
import MapView from "./MapView";
import BottomBanner from "../components/BottomBanner";
import { Engine } from "../engine/Engine";
import AnswerModel from "../models/AnswerModel";

interface GameViewProps {
  engine: Engine;
  mapUrl: string;
}

let autoplayHandle: undefined | number = undefined;

function GameView(props: GameViewProps) {
  const { engine, mapUrl } = props;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
    engine.currentQuestionIndex
  );
  const [currentQuestion, setCurrentQuestion] = useState(
    engine.getCurrentQuestion()
  );
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerModel | null>(
    null
  );

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

    setCurrentQuestion(engine.getCurrentQuestion());
  }

  if (currentQuestion == null) {
    return <p>Current question is null</p>;
  }

  return (
    <>
      <button onClick={startAutoplay}>Autoplay (PRESS TWICE)</button>
      {engine.isGameOver() ? (
        <EndingView engine={engine}></EndingView>
      ) : (
        <QuestionView
          currentQuestionIndex={currentQuestionIndex}
          engine={engine}
          currentQuestion={currentQuestion}
          submitAnswer={submitAnswer}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
        ></QuestionView>
      )}
      <MapView engine={engine} mapUrl={mapUrl}></MapView>
      <BottomBanner engine={engine}></BottomBanner>
      <PopupBox
        title="Feedback"
        body={feedbackText}
        buttonText="Okay"
        isShowing={showingFeedbackBox}
        setIsShowing={setShowingFeedbackBox}
      ></PopupBox>
    </>
  );
}

export default GameView;

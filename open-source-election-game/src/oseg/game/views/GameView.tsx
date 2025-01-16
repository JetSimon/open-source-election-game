import { useState } from "react";

import QuestionView from "./QuestionView";
import EndingView from "./EndingView";
import PopupBox from "../components/PopupBox";
import ConfirmCancelPopupBox from "../components/ConfirmCancelPopupBox";
import MapView from "./MapView";
import BottomBanner from "../components/BottomBanner";
import { Engine } from "../../engine/Engine";
import AnswerModel from "../../engine/models/AnswerModel";
import StateController from "../../engine/controllers/StateController";
import ThemeModel from "../../engine/models/ThemeModel";
import HighscoreSubmissionModel from "../../engine/models/HighscoreSubmissionModel";
import { useEffect } from "react";

interface GameViewProps {
  engine: Engine;
  mapSvg: string;
  theme: ThemeModel;
  refreshThemeAndMusic : () => void;
  onGameOver : ((m : HighscoreSubmissionModel) => void) | null;
}

let showFeedback = true;
let autoplayHandle: undefined | ReturnType<typeof setInterval> = undefined;

function GameView(props: GameViewProps) {
  const { engine, mapSvg, theme, refreshThemeAndMusic, onGameOver } = props;

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

  const [showAutoplay, setShowAutoplay] = useState(0);

  const [selectedState, setSelectedState] = useState<StateController | null>(
    null
  );
  const [showVisitPopup, setShowVisitPopup] = useState(false);

  useEffect(() => {
    function checkForAutoplay(e : KeyboardEvent) {
      if(e.key == "@") {
        setShowAutoplay(a => a + 1);
      }
    }

    window.addEventListener("keydown", checkForAutoplay);

    return () => {
      window.removeEventListener("keydown", checkForAutoplay);
    }
  }, [])

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
    else {
      onFeedbackPopupClosed();
    }
  }

  function onFeedbackPopupClosed() {
      engine.applyAnswer(selectedAnswer);
      setSelectedAnswer(null);
      engine.nextQuestion();
      setCurrentQuestionIndex(engine.currentQuestionIndex);

      if (engine.isGameOver()) {
        engine.getEnding();

        if(onGameOver != null) {
          const highscoreModel : HighscoreSubmissionModel = {
            candidate: engine.getPlayerCandidateController().getId(),
            runningMate: engine.getPlayerRunningMateModel().id,
            answers: engine.getAnswers(),
            visits: engine.getVisits(),
            seed: engine.getSeed(),
            isShuffled: engine.isShuffled
          }
          onGameOver(highscoreModel);
        }

        refreshThemeAndMusic();
        alert("Game over!");
        return;
      }
      else {
        refreshThemeAndMusic();
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

    setSelectedState(state);
    setShowVisitPopup(true);
  }

  function confirmStateVisit() {
    if (!selectedState) return;

    engine.waitingToPickState = false;
    selectedState.visit(engine.getPlayerCandidateController().getId(), engine);
    setShowVisitPopup(false);
    setShowMap(false);
  }

  function cancelStateVisit() {
    setShowVisitPopup(false);
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
      {showAutoplay >= 3 && !engine.isGameOver() && !engine.waitingToPickState && !showMap && <button onClick={startAutoplay}>Autoplay</button>}
      </div>
      {!engine.isGameOver() && engine.waitingToPickState && <p className="ChooseState" style={{color:theme.primaryGameWindowTextColor}}>Click on a state to visit</p>}
      <h3 style={{color:theme.primaryGameWindowTextColor}}>{questionString}</h3>
      <BottomBanner theme={theme} engine={engine}></BottomBanner>
      <PopupBox
        theme={theme}
        title="Feedback"
        body={feedbackText}
        buttonText="Okay"
        isShowing={showingFeedbackBox}
        setIsShowing={setShowingFeedbackBox}
        image={theme.advisorImage}
        onClosed={onFeedbackPopupClosed}
      ></PopupBox>
      {selectedState && (
        <ConfirmCancelPopupBox
          theme={theme}
          title="Feedback"
          description={`Are you sure you want to visit ${selectedState?.model.name}?`}
          isShowing={showVisitPopup}
          onConfirm={confirmStateVisit}
          onCancel={cancelStateVisit}
          image={theme.advisorImage}
        />
      )}
    </div>
  );
}

export default GameView;

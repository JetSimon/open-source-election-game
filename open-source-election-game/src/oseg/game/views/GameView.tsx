import { useState } from "react";

import { useEffect } from "react";
import { StateController } from "../../engine/controllers/StateController";
import { CustomViewCreator } from "../../engine/CustomView";
import { Engine } from "../../engine/Engine";
import { AnswerModel } from "../../engine/models/AnswerModel";
import { HighscoreSubmissionModel } from "../../engine/models/HighscoreSubmissionModel";
import { ThemeModel } from "../../engine/models/ThemeModel";
import BottomBanner from "../components/BottomBanner";
import ConfirmCancelPopupBox from "../components/ConfirmCancelPopupBox";
import DebugMenu from "../components/debug/DebugMenu";
import PopupBox from "../components/PopupBox";
import CandidateSelectionView from "./CandidateSelectionView";
import CustomView from "./CustomView";
import EndingView from "./EndingView";
import MapView from "./MapView";
import QuestionView from "./QuestionView";

interface GameViewProps {
  engine: Engine;
  mapSvg: string;
  theme: ThemeModel;
  refreshThemeAndMusic: () => void;
  onGameOver: ((m: HighscoreSubmissionModel) => void) | null;
}

let showFeedback = true;
let autoplayHandle: undefined | ReturnType<typeof setInterval> = undefined;

function GameView(props: GameViewProps) {
  const { engine, mapSvg, theme, refreshThemeAndMusic, onGameOver } = props;

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
  const [showDebugMenu, setShowDebugMenu] = useState(false);

  const [selectedState, setSelectedState] = useState<StateController | null>(
    null
  );
  const [showVisitPopup, setShowVisitPopup] = useState(false);

  const [donePlayingMapAnimation, setDonePlayingMapAnimation] = useState(false);

  const [customViewName, setCustomViewName] = useState("");

  const [usedCheatMenu, setUsedCheatMenu] = useState(false);

  useEffect(() => {
    function checkForAutoplay(e: KeyboardEvent) {
      if (e.key == "@") {
        setShowAutoplay((a) => a + 1);
      }

      if (e.key == "!") {
        setShowDebugMenu((x) => !x);
        setUsedCheatMenu(true);
      }

      if (engine.waitingToPickState) {
        if (e.key == "Enter") {
          const states = engine.scenarioController.getStates();
          onStateClicked(states[Math.floor(Math.random() * states.length)]);
        }
      }
    }

    window.addEventListener("keydown", checkForAutoplay);

    refreshThemeAndMusic();

    return () => {
      window.removeEventListener("keydown", checkForAutoplay);
    };
  }, []);

  function showFeedbackPopup(body: string) {
    setFeedbackText(body);
    setShowingFeedbackBox(true);
  }

  function autoplay() {
    if (engine.isGameOver()) {
      showFeedback = true;
      clearInterval(autoplayHandle);
      return;
    }

    const answer = document.getElementsByClassName("Answer")[0];
    if (!answer) {
      return;
    }

    if (answer.firstChild) {
      const radioButton = answer.firstChild as HTMLInputElement;
      radioButton.click();

      const confirmButton = document.getElementsByClassName(
        "ConfirmAnswerButton"
      )[0] as HTMLButtonElement;
      if (confirmButton) {
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
    if (engine.currentScenario) {
      engine.currentScenario.hasStateVisits = false;
    }
  }

  function submitAnswer() {
    if (selectedAnswer == null) {
      alert("You must select an answer!");
      return;
    }

    if (showFeedback && selectedAnswer.feedback != "") {
      showFeedbackPopup(engine.addTooltips(selectedAnswer.feedback));
    } else {
      onFeedbackPopupClosed();
    }
  }

  function onFeedbackPopupClosed() {
    engine.applyAnswer(selectedAnswer);
    setSelectedAnswer(null);
    engine.nextQuestion();

    if (engine.isGameOver()) {
      engine.getEnding();

      if (onGameOver != null) {
        const highscoreModel: HighscoreSubmissionModel = {
          candidate: engine.getPlayerCandidateController().getId(),
          runningMate: engine.getPlayerRunningMateModel().id,
          answers: engine.getAnswers(),
          visits: engine.getVisits(),
          seed: engine.getSeed(),
          isShuffled: engine.isShuffled,
          difficulty: engine.difficulty,
        };

        if(!usedCheatMenu) {
          onGameOver(highscoreModel);
        }
      }

      refreshThemeAndMusic();
      alert("Game over!");
      return;
    } else {
      refreshThemeAndMusic();
    }

    const questionsBetweenVisits = engine.scenarioController.model.questionsPerVisit ?? 1;
    const timeToVisitState = engine.currentScenario != null && engine.currentScenario.hasStateVisits && ((engine.currentQuestionNumber - 1) % questionsBetweenVisits == 0)

    if (timeToVisitState) {
      setShowMap(true);
      engine.waitingToPickState = true;
    }

    setCurrentQuestion(engine.getCurrentQuestion());
  }

  function onStateClicked(state: StateController) {
    if (!engine.waitingToPickState) {
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

  function afterMidGameRunningMateSelection(_sideIndex : number, runningMateId : number) {
    engine.runningMateId = runningMateId;
    engine.waitingToSelectNewRunningMate = false;
    refreshThemeAndMusic();
  }

  if(engine.waitingToSelectNewRunningMate) {
    return (
      <CandidateSelectionView
        theme={theme}
        setSelectingCandidate={() => {}}
        afterChooseCandidateAndRunningMate={afterMidGameRunningMateSelection}
        engine={engine}
        onStartButtonPressed={() => {}}
        canChooseCandidate={false}
        canChooseRunningMate={true}
      ></CandidateSelectionView>
    )
  }

  function getGameView() {

    const customViewCreator : CustomViewCreator | undefined = engine.customViews.get(customViewName);

    if(engine.isGameOver()) {
      if(donePlayingMapAnimation) {
        return (
          <div className="EndingViewHolder">
            <EndingView
              theme={theme}
              engine={engine}
              mapSvg={mapSvg}
            ></EndingView>
          </div>
        )
      }
      else {
        return (
          <MapView
            playAnimationBeforeFinalResults={true}
            afterAnimationCompletes={() => setDonePlayingMapAnimation(true)}
            theme={theme}
            onStateClicked={onStateClicked}
            engine={engine}
            mapSvg={mapSvg}
          ></MapView>
        )
      }
    }
    else {
      if(engine.waitingToPickState || showMap ) {
        return (<MapView
          theme={theme}
          onStateClicked={onStateClicked}
          engine={engine}
          mapSvg={mapSvg}
        ></MapView>)
      }
      else if(customViewCreator != undefined && customViewName != ""){
        return (
          <CustomView theme={theme} innerHtml={customViewCreator(engine)}>
          </CustomView>
        )
      }
      else {
        return (
          <QuestionView
            engine={engine}
            setShowMap={setShowMap}
            currentQuestion={currentQuestion!}
            submitAnswer={submitAnswer}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
            theme={theme}
            showingFeedbackBox={showingFeedbackBox}
          ></QuestionView>
        )
      }
    }
  }

  function makeCustomButtons() {
    if(engine == null) {
      return <></>;
    }

    return Array.from(engine.customViews.keys()).map((viewName) => 
      <button disabled={customViewName == viewName} onClick={() => setCustomViewName(viewName)}>{viewName}</button>
    )
  }

  return (
    <div className="GameView">
      {getGameView()}
      <div className="BottomButtons">
        {showMap && !engine.waitingToPickState && (
          <button className="ToggleMapButton" onClick={() => setShowMap(false)}>
            {engine.getLocalization("Back to the Game")}
          </button>
        )}
        {showAutoplay >= 3 &&
          !engine.isGameOver() &&
          !engine.waitingToPickState &&
          !showMap && <button onClick={startAutoplay}>Autoplay</button>}
        {engine.isGameOver() && !donePlayingMapAnimation && (
          <button
            className="ToggleMapButton"
            onClick={() => setDonePlayingMapAnimation(true)}
          >
            {engine.getLocalization("Skip to Results")}
          </button>
        )}
        {!engine.isGameOver() && !showMap && engine.customViews.size > 0 && <button disabled={customViewName == ""} onClick={() => setCustomViewName("")}>{engine.getLocalization("Questions")}</button>}
        {!showMap && !engine.isGameOver() && makeCustomButtons()}
      </div>
      {!engine.isGameOver() && engine.waitingToPickState && (
        <p
          className="ChooseState"
          style={{ color: theme.primaryGameWindowTextColor }}
        >
          {engine.getLocalization("Click on a state to visit")}
        </p>
      )}
      <BottomBanner theme={theme} engine={engine}></BottomBanner>
      <PopupBox
        theme={theme}
        title={engine.getLocalization("Feedback")}
        body={feedbackText}
        buttonText={engine.getLocalization("Okay")}
        isShowing={showingFeedbackBox}
        setIsShowing={setShowingFeedbackBox}
        image={theme.advisorImage}
        onClosed={onFeedbackPopupClosed}
      ></PopupBox>
      {selectedState && (
        <ConfirmCancelPopupBox
          theme={theme}
          title={engine.getLocalization("Feedback")}
          description={`${engine.getLocalization(
            "Are you sure you want to visit"
          )} ${selectedState?.model.name}?`}
          isShowing={showVisitPopup}
          onConfirm={confirmStateVisit}
          onCancel={cancelStateVisit}
          image={theme.advisorImage}
        />
      )}
      {showDebugMenu && !engine.isGameOver() && (
        <DebugMenu setCurrentQuestion={setCurrentQuestion} currentQuestion={currentQuestion} engine={engine}></DebugMenu>
      )}
    </div>
  );
}

export default GameView;
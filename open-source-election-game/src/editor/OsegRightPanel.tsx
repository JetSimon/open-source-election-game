import { useEffect, useState } from "react";
import { StateController } from "../oseg/engine/controllers/StateController";
import { Engine } from "../oseg/engine/Engine";
import { ScenarioModel } from "../oseg/engine/models/ScenarioModel";
import { convertHistoricalResultsToFinalResults } from "../oseg/utils/FinalResultsAdapter";
import BottomBanner from "../oseg/game/components/BottomBanner";
import MusicPlayer from "../oseg/game/components/MusicPlayer";
import QuoteHeader from "../oseg/game/components/QuoteHeader";
import FinalResults from "../oseg/game/components/FinalResults";
import CandidateSelectionView from "../oseg/game/views/CandidateSelectionView";
import ElectionDescriptionView from "../oseg/game/views/ElectionDescriptionView";
import MapView from "../oseg/game/views/MapView";
import QuestionView from "../oseg/game/views/QuestionView";
import EnumNavBar from "./components/EnumNavBar";
import CustomViewPreview from "./CustomViewPreview";
import OsegSimulator from "./OsegSimulator";
import EndingPreview from "./graphicalEditors/EndingPreview";
import FurtherReading from "../oseg/game/components/FurtherReading";

enum RightNavBar {
  Map,
  Election,
  Candidates,
  Simulator,
  Question,
  Ending,
  Results,
  FurtherReading,
  CustomView
}

const rightNavBarValues = Object.keys(RightNavBar).filter((item) => {
  return isNaN(Number(item));
});

interface OsegRightPanelProps {
  mapSvg: string;
  logic: string;
  data: ScenarioModel;
  css : string;
  onStateClicked: ((c: StateController) => void) | null;
  sideIndex: number;
  questionIndex: number;
}

const engine = new Engine();
engine.useRng = false;

function OsegRightPanel(props: OsegRightPanelProps) {
  const { mapSvg, data, logic, onStateClicked, sideIndex, questionIndex } =
    props;
  const [rightNavBar, setRightNavBar] = useState<RightNavBar>(RightNavBar.Map);
  // Using this to make sure that the candidate information updates as you type in the editor
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_lastUpdatedTime, setLastUpdatedTime] = useState(Date.now());

  const [finalResults, setFinalResults] = useState(() => engine.getFinalResults());
  const [historicalResults, setHistoricalResults] = useState(() => engine.getHistoricalResults());

  function setRightNavBarFromString(s: string) {
    setRightNavBar(RightNavBar[s as keyof typeof RightNavBar]);
  }

  useEffect(() => {
    if (data != null) {
      // Load scenario as observer (aka we don't assume the player is playing as anyone, just for previewing)
      engine.loadScenario(data, true);

      setFinalResults(engine.getFinalResults());
      setHistoricalResults(engine.getHistoricalResults());

      const handle = setTimeout(() => {
        setLastUpdatedTime(Date.now());
      }, 1);

      return () => {
        clearTimeout(handle);
      };
    }
  }, [data, mapSvg]);

  // Loads ending for preview
  useEffect(() => {
    const loadInLogicCode = async () => {
      const encodedLogic = encodeURIComponent(logic);
      const logicDataUri = "data:text/javascript;charset=utf-8," + encodedLogic;

      const { createEnding, onScenarioStarted } = await import  (/* @vite-ignore */ logicDataUri);

      engine.onScenarioStarted = onScenarioStarted;
      engine.createEnding = createEnding;

      if(engine.onScenarioStarted != null) {
        try {
          engine.onScenarioStarted(engine);
        }
        catch(e) {
          console.error(e);
        }
      }
    }
    loadInLogicCode();
  }, [logic]);

  function getEditorArea() {
    const side = data.scenarioSides[sideIndex];

    if (side == undefined) {
      return (
        <p>
          Side is undefined. Go out of and then go back into this tab (or maybe
          you have no defined ScenarioSides! Make sure one exists).
        </p>
      );
    }

    const question = side.questions[questionIndex];
    const theme = engine.scenarioController.theme;
    const backgroundImage = "url('" + theme.backgroundImageUrl + "')";

    if (rightNavBar == RightNavBar.Map) {
      return (
        <div>
          <h2>Starting Margins</h2>
          <MapView
            theme={engine.scenarioController.theme}
            engine={engine}
            mapSvg={mapSvg}
            onStateClicked={onStateClicked}
          ></MapView>
          <p>
            Note: starting margins may be slightly different in game due to RNG
          </p>
        </div>
      );
    } else if (
      rightNavBar == RightNavBar.Election ||
      rightNavBar == RightNavBar.Candidates
    ) {
      return (
        <div
          style={{
            backgroundColor: theme.backgroundColor,
            backgroundImage: backgroundImage,
          }}
          className="Game"
        >
          <img className="TopBanner" src={theme.headerImageUrl}></img>
          <QuoteHeader engine={engine} theme={theme}></QuoteHeader>
          {rightNavBar == RightNavBar.Election ? (
            <ElectionDescriptionView
              setIsShuffled={() => {}}
              isShuffled={false}
              refreshThemeAndMusic={() => {}}
              theme={engine.scenarioController.theme}
              setSelectingCandidate={() => {}}
              engine={engine}
            ></ElectionDescriptionView>
          ) : (
            <CandidateSelectionView
              onStartButtonPressed={null}
              theme={engine.scenarioController.theme}
              setSelectingCandidate={() => {}}
              engine={engine}
              afterChooseCandidateAndRunningMate={() => {}}
              canChooseCandidate={true}
              canChooseRunningMate={true}
            ></CandidateSelectionView>
          )}

          <MusicPlayer
            songs={engine.scenarioController.model.music}
          ></MusicPlayer>
        </div>
      );
    } else if (rightNavBar == RightNavBar.Simulator) {
      return (
        <OsegSimulator
          engine={engine}
          theme={engine.scenarioController.theme}
          data={data}
          logic={logic}
        ></OsegSimulator>
      );
    } else if (rightNavBar == RightNavBar.Question) {
      if (!question) {
        return <div>No questions found for candidate!</div>;
      }

      return (
        <div
          style={{ backgroundColor: theme.primaryGameWindowColor }}
          className="Game"
        >
          <QuestionView
            engine={engine}
            showingFeedbackBox={false}
            currentQuestion={question}
            submitAnswer={() => {}}
            selectedAnswer={null}
            setSelectedAnswer={() => {}}
            theme={engine.scenarioController.theme}
            setShowMap={() => {}}
          ></QuestionView>
          <BottomBanner
            engine={engine}
            theme={engine.scenarioController.theme}
          ></BottomBanner>
        </div>
      );
    } else if (rightNavBar == RightNavBar.Ending) {
      return (
        <EndingPreview
          data={data}
          engine={engine}
          theme={theme}
          initialResults={finalResults}
        ></EndingPreview>
      );
    } else if (rightNavBar == RightNavBar.Results) {
      return (
        <>
          <h2>Results - This Game</h2>
          <FinalResults engine={engine} theme={theme} results={finalResults} />
          {historicalResults && (
            <>
              <h2>Results - Historical</h2>
              <FinalResults engine={engine} theme={theme} results={convertHistoricalResultsToFinalResults(historicalResults, engine.scenarioController.getCandidates())} />
            </>
          )}
        </>
      )
    } else if (rightNavBar == RightNavBar.FurtherReading) {
      return (
        <FurtherReading theme={theme} engine={engine} />
      );
    } else if(rightNavBar == RightNavBar.CustomView) {
      return (
        <CustomViewPreview engine={engine} theme={theme}>
        </CustomViewPreview>
      )
    }
  }

  return (
    <div className="OsegPanel">
      <EnumNavBar
        description="Preview"
        enumValueAsString={RightNavBar[rightNavBar].toString()}
        setEnumFromString={setRightNavBarFromString}
        enumKeys={rightNavBarValues}
      ></EnumNavBar>
      {getEditorArea()}
    </div>
  );
}

export default OsegRightPanel;
import { useState } from "react";
import { Engine } from "../oseg/engine/Engine";
import { CandidateModel } from "../oseg/engine/models/CandidateModel";
import { FinalResultsModel } from "../oseg/engine/models/FinalResultsModel";
import { ScenarioModel } from "../oseg/engine/models/ScenarioModel";
import { ThemeModel } from "../oseg/engine/models/ThemeModel";
import FinalResults from "../oseg/game/components/FinalResults";
import Histogram from "./components/Histogram";
import SimulatorAnswerPicker from "./graphicalEditors/SimulatorAnswerPicker";
import "./OsegSimulator.css";

interface OsegSimulatorProps {
  data: ScenarioModel;
  logic: string;
  theme: ThemeModel;
  engine: Engine;
}

const numberOfSimulations = 500;

function OsegSimulator(props: OsegSimulatorProps) {
  const [isSimulating, setIsSimulating] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [showSimulatedResults, setShowSimulatedResults] = useState(false);

  const [allResults, setAllResults] = useState<FinalResultsModel[]>([]);
  const [allResultsIndex, setAllResultsIndex] = useState(0);

  const [averageResult, setAverageResult] = useState<FinalResultsModel | null>(
    null
  );
  const [bestResult, setBestResult] = useState<FinalResultsModel | null>(null);
  const [worstResult, setWorstResult] = useState<FinalResultsModel | null>(
    null
  );
  const [histogram, setHistogram] = useState<number[]>([]);

  const { data, logic, theme, engine } = props;

  const [selectedCandidate, setSelectedCandidate] = useState<number>(() => {
    const cans = getCandidatesWithSides();
    return cans.length > 0 ? cans[0].id : -1;
  });

  const [selectedRunningMate, setSelectedRunningMate] = useState<number>(() => {
    const mates = getRunningMatesForCandidate(selectedCandidate);
    return mates.length > 0 ? mates[0].id : -1;
  });

  const sides = data.scenarioSides;
  const sideIndex = sides.map((x) => x.playerId).indexOf(selectedCandidate);

  // Initial set of answer ids with default answer id
  const [selectedAnswerIds, setSelectedAnswerIds] = useState<Set<number>>(
    () => new Set()
  );

  function getCandidatesWithSides(): CandidateModel[] {
    const candidates: CandidateModel[] = [];

    const candidatesWithSides: Set<number> = new Set(
      data.scenarioSides.map((x) => x.playerId)
    );

    for (const candidate of data.candidates) {
      if (candidatesWithSides.has(candidate.id)) {
        candidates.push(candidate);
      }
    }

    return candidates;
  }

  function getAllResults() {
    return (
      <div>
        <h2>
          Result {allResultsIndex + 1}/{allResults.length}
        </h2>
        <FinalResults
          engine={engine}
          results={allResults[allResultsIndex]}
          theme={theme}
        ></FinalResults>
        <div>
          <button
            disabled={allResultsIndex <= 0}
            onClick={() => setAllResultsIndex(allResultsIndex - 1)}
          >
            Prev
          </button>
          <button
            disabled={allResultsIndex >= allResults.length - 1}
            onClick={() => setAllResultsIndex(allResultsIndex + 1)}
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  function getRunningMatesForCandidate(candidateId: number) {
    const currentCandidate = data.candidates.filter(
      (x) => x.id == candidateId
    )[0];

    if (currentCandidate == undefined || currentCandidate == null) {
      return [];
    }

    const runningMates = new Set(currentCandidate.runningMateIds);

    return data.candidates.filter((x) => runningMates.has(x.id));
  }

  async function simulateResults() {
    setIsSimulating(true);
    const sides = data.scenarioSides;
    const sideIndex = sides.map((x) => x.playerId).indexOf(selectedCandidate);

    const allResultsRun = [];

    const averageResult: FinalResultsModel = {
      popularVotes: new Map(),
      electoralVotes: new Map(),
      candidates: [],
      totalPopularVotes: 0,
      totalElectoralVotes: 0,
    };

    for (const candidate of averageResult.candidates) {
      averageResult.popularVotes.set(candidate.getId(), 0);
      averageResult.electoralVotes.set(candidate.getId(), 0);
    }

    const encodedLogic = encodeURIComponent(logic);
    const logicDataUri = "data:text/javascript;charset=utf-8," + encodedLogic;

    const tempHistogram: number[] = [];
    for (let i = 0; i < 20; i++) {
      tempHistogram.push(0);
    }

    for (let i = 0; i < numberOfSimulations; i++) {
      const tempEngine = new Engine();

      const {
        createEnding,
        onAnswerPicked,
        onScenarioStarted,
        onCandidateSelectionStarted,
      } = await import  (/* @vite-ignore */ logicDataUri);
      tempEngine.createEnding = createEnding;
      tempEngine.onAnswerPicked = onAnswerPicked;
      tempEngine.onScenarioStarted = onScenarioStarted;
      tempEngine.onCandidateSelectionStarted = onCandidateSelectionStarted;

      tempEngine.setSeed((Math.random() * 10000000).toString());
      tempEngine.loadScenario(data, false);

      if (tempEngine.onCandidateSelectionStarted != null) {
        tempEngine.onCandidateSelectionStarted(tempEngine);
      }

      tempEngine.setScenarioSide(sideIndex, selectedRunningMate, isShuffled);
      const candidateId = tempEngine.getPlayerCandidateController().getId();
      const answerSet = new Set(selectedAnswerIds);

      while (!tempEngine.isGameOver()) {
        const question = tempEngine.getCurrentQuestion();
        if (question == null) break;

        let answer = null;

        for (const currentAnswer of question.answers) {
          if (answerSet.has(currentAnswer.id)) {
            answer = currentAnswer;
            break;
          }
        }

        if (answer == null) {
          const randomIndex = Math.floor(
            question.answers.length * tempEngine.random()
          );
          answer = question.answers[randomIndex];
        }

        tempEngine.applyAnswer(answer);

        const states = tempEngine.scenarioController.getStates();
        states[Math.floor(tempEngine.random() * states.length)].visit(
          candidateId,
          tempEngine
        );

        tempEngine.nextQuestion();
      }

      const result = tempEngine.getFinalResults();

      if (i == 0) {
        averageResult.candidates = result.candidates;
        averageResult.totalElectoralVotes = result.totalElectoralVotes;
        averageResult.totalPopularVotes = result.totalPopularVotes;
      }

      for (const candidate of result.candidates) {
        const id = candidate.getId();

        const pv: number = result.popularVotes.get(id) ?? 0;
        const ev: number = result.electoralVotes.get(id) ?? 0;
        const totalPv: number = averageResult.popularVotes.get(id) ?? 0;
        const totalEv: number = averageResult.electoralVotes.get(id) ?? 0;

        averageResult.popularVotes.set(id, totalPv + pv / numberOfSimulations);
        averageResult.electoralVotes.set(
          id,
          totalEv + ev / numberOfSimulations
        );
      }

      const playerPvPercent =
        (result.popularVotes.get(candidateId) ?? 0) / result.totalPopularVotes;
      const index = Math.floor((playerPvPercent / 1.0) * 20);
      tempHistogram[index] += 1;

      allResultsRun.push(result);
    }

    setAllResultsIndex(0);
    setAllResults(allResultsRun);
    setAverageResult(averageResult);
    setHistogram(tempHistogram);
    setShowSimulatedResults(true);

    const sortedResults = allResultsRun.sort((a, b) => {
      const apv = a.popularVotes.get(selectedCandidate) ?? 0;
      const aev = a.electoralVotes.get(selectedCandidate) ?? 0;
      const bpv = b.popularVotes.get(selectedCandidate) ?? 0;
      const bev = b.electoralVotes.get(selectedCandidate) ?? 0;

      return aev - bev || apv - bpv;
    });

    setBestResult(sortedResults[sortedResults.length - 1]);
    setWorstResult(sortedResults[0]);
    setIsSimulating(false);
  }

  const resetSimulation = () => {
    setShowSimulatedResults(false);
    setAllResults([]);
    setAverageResult(null);
    setBestResult(null);
    setWorstResult(null);
    setHistogram([]);
    setAllResultsIndex(0);
    setSelectedAnswerIds(new Set());
  };

  if (isSimulating) {
    return <p>Simulating...</p>;
  }

  if (sides[sideIndex] == undefined) {
    return <p>Got into a weird state, go to another tab and come back</p>;
  }

  const shouldShowShuffle =
    data.scenarioSides[sideIndex].questions.filter(
      (x) => !x.keepInPlaceIfQuestionsShuffled
    ).length > 0;

  return (
    <div>
      {!showSimulatedResults ? (
        <>
          <label className="LabelText" htmlFor="candidate">
            Candidate:{" "}
          </label>
          <select
            id="candidate"
            onChange={(e) =>
              setSelectedCandidate(Number.parseInt(e.target.value))
            }
            defaultValue={selectedCandidate}
          >
            {getCandidatesWithSides().map((candidate) => {
              return (
                <option value={candidate.id} key={candidate.id}>
                  {candidate.firstName} {candidate.lastName}
                </option>
              );
            })}
          </select>
          <label className="LabelText" htmlFor="runningMate">
            Running Mate:{" "}
          </label>
          {getRunningMatesForCandidate(selectedCandidate).length > 0 && (
            <select
              id="runningMate"
              onChange={(e) =>
                setSelectedRunningMate(Number.parseInt(e.target.value))
              }
            >
              {getRunningMatesForCandidate(selectedCandidate).map(
                (candidate) => {
                  return (
                    <option value={candidate.id} key={candidate.id}>
                      {candidate.firstName + " " + candidate.lastName}
                    </option>
                  );
                }
              )}
            </select>
          )}

          {shouldShowShuffle && (
            <div>
              <label>Shuffle Questions? </label>
              <input
                type="checkbox"
                checked={isShuffled}
                onChange={(e) => setIsShuffled(e.target.checked)}
              ></input>
            </div>
          )}

          <button onClick={() => simulateResults()}>
            Simulate {numberOfSimulations} Times
          </button>

          <SimulatorAnswerPicker
            data={data}
            sideIndex={sideIndex}
            selectedAnswerIds={selectedAnswerIds}
            setSelectedAnswersId={setSelectedAnswerIds}
          ></SimulatorAnswerPicker>
        </>
      ) : (
        <div>
          <button onClick={resetSimulation}>Back to Answer Picker</button>

          {histogram.length > 0 && (
            <div>
              <h2>Histogram</h2>
              <Histogram counts={histogram}></Histogram>
            </div>
          )}

          {averageResult != null && (
            <div>
              <h2>Average Result</h2>
              <FinalResults
                engine={engine}
                results={averageResult}
                theme={theme}
              ></FinalResults>
            </div>
          )}

          {bestResult != null && (
            <div>
              <h2>Best Result</h2>
              <FinalResults
                engine={engine}
                results={bestResult}
                theme={theme}
              ></FinalResults>
            </div>
          )}

          {worstResult != null && (
            <div>
              <h2>Worst Result</h2>
              <FinalResults
                engine={engine}
                results={worstResult}
                theme={theme}
              ></FinalResults>
            </div>
          )}

          {allResults.length > 0 && getAllResults()}
        </div>
      )}
    </div>
  );
}

export default OsegSimulator;

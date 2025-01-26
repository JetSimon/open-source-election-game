import { useEffect, useState } from "react";
import { CandidateController } from "../../engine/controllers/CandidateController";
import { StateController } from "../../engine/controllers/StateController";
import { Engine } from "../../engine/Engine";
import { FinalResultsModel } from "../../engine/models/FinalResultsModel";
import { ThemeModel } from "../../engine/models/ThemeModel";
import FinalResults from "./FinalResults";

interface ResultsByStateProps {
  engine: Engine;
  theme: ThemeModel;
}

interface ResultSorter {
  name: string;
  sorter: (a: StateController, b: StateController) => number;
  filter?: (a : StateController) => boolean;
}

function createCandidateSorter(candidate: CandidateController): ResultSorter {
  const candidateName = candidate.getFullName();
  const id = candidate.getId();
  const name = "Highest " + candidateName + " %";

  return {
    name: name,
    sorter: (a: StateController, b: StateController) =>
      b.getOpinionForCandidate(id) - a.getOpinionForCandidate(id),
  };
}

function createClosestCandidateSorter(candidate: CandidateController, engine : Engine): ResultSorter {
  const candidateName = candidate.getFullName();
  const id = candidate.getId();
  const name = "Closest " + candidateName + " Wins";

  function getMarginOfVictory(stateController : StateController)
  {
    const opinion = stateController.getOpinionForCandidate(id);
    const vals = Array.from(stateController.opinions.values()).sort();
    const secondOpinion = vals[vals.length - 2];
    return opinion -  secondOpinion;
  }

  return {
    name: name,
    sorter: (a: StateController, b: StateController) => {
      return getMarginOfVictory(a) - getMarginOfVictory(b);
    },
    filter: (a : StateController) => a.getHighestCandidate(engine) == candidate
  };
}

function ResultsByState(props: ResultsByStateProps) {
  const { engine, theme } = props;

  const sorters: ResultSorter[] = [
    {
      name: "Alpabetical",
      sorter: (a: StateController, b: StateController) =>
        a.model.name.localeCompare(b.model.name),
    },
  ];

  const [selectedSorter, setSelectedSorted] = useState<ResultSorter>(
    sorters[0]
  );

  if (engine.getTotalElectoralVotes() > 0) {
    sorters.push({
      name: "Most Electoral Votes",
      sorter: (a: StateController, b: StateController) =>
        b.model.electoralVotes - a.model.electoralVotes,
    });
  }

  sorters.push({
    name: engine.getLocalization("Closest States"),
    sorter: (a: StateController, b: StateController) =>
      a.getOpinionForCandidate(a.getHighestCandidate(engine)?.getId() ?? 0) -
      b.getOpinionForCandidate(b.getHighestCandidate(engine)?.getId() ?? 0),
  });

  for (const candidate of engine.scenarioController.getCandidates()) {
    sorters.push(createClosestCandidateSorter(candidate, engine));
  }

  for (const candidate of engine.scenarioController.getCandidates()) {
    sorters.push(createCandidateSorter(candidate));
  }

  const states = engine.scenarioController
    .getStates()
    .filter(selectedSorter.filter ?? (() => true))
    .sort(selectedSorter.sorter);

  const [selectedState, setSelectedState] = useState(states[0]);

  useEffect(() => {
    const states = engine.scenarioController
      .getStates()
      .filter(selectedSorter.filter ?? (() => true))
      .sort(selectedSorter.sorter);

      setSelectedState(states[0]);
  }, [selectedSorter, engine]);

  function setSort(e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedSorted(sorters.filter((x) => x.name == e.target.value)[0]);
  }

  let results : FinalResultsModel | null = null;
  const popularVotes = new Map<number, number>();
  const electoralVotes = new Map<number, number>();
  const candidates = engine.scenarioController.getCandidates();

  if(selectedState != undefined) {
    for (const candidate of candidates) {
      popularVotes.set(
        candidate.getId(),
        Math.round(selectedState.getPvsForCandidate(candidate))
      );
      electoralVotes.set(
        candidate.getId(),
        selectedState.getEvsForCandidate(engine, candidate)
      );
    }
  
    results = {
      popularVotes: popularVotes,
      electoralVotes: electoralVotes,
      candidates: candidates,
      totalPopularVotes: selectedState.model.popularVotes,
      totalElectoralVotes: selectedState.model.electoralVotes,
    };
  }

  return (
    <div style={{ color: theme.primaryGameWindowTextColor }}>
      <h2>{engine.getLocalization("Election Results and Data by State")}</h2>
      <label>{engine.getLocalization("View states by")}: </label>
      <select
        style={{ marginBottom: "16px" }}
        onChange={setSort}
        value={selectedSorter.name}
      >
        {sorters.map((x) => (
          <option value={x.name}>{x.name}</option>
        ))}
      </select>
      <br></br>
      {states.length > 0 && selectedState != null && <label>{engine.getLocalization("Select a state")}: </label>}
      {states.length > 0 && selectedState != null && <select
        style={{ marginBottom: "16px" }}
        value={selectedState.getId()}
        onChange={(e) =>
          setSelectedState(
            states.filter((s) => s.getId() == Number(e.target.value))[0]
          )
        }
      >
        {states.map((x) => (
          <option key={x.getId() + JSON.stringify(selectedSorter)} value={x.getId()}>{x.model.name}</option>
        ))}
      </select>}
      {states.length > 0 && selectedState != null && <h4>{selectedState.model.name}</h4>}
      {states.length > 0 && selectedState != null && results != null ? <FinalResults
        engine={engine}
        results={results}
        theme={theme}
      ></FinalResults> : <h4>No states match this filter</h4>}
    </div>
  );
}

export default ResultsByState;

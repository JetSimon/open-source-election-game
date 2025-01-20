import { useState, useEffect } from "react";
import { Engine } from "../../engine/Engine";
import ThemeModel from "../../engine/models/ThemeModel";
import FinalResults from "./FinalResults";
import StateController from "../../engine/controllers/StateController";
import CandidateController from "../../engine/controllers/CandidateController";
import FinalResultsModel from "../../engine/models/FinalResultsModel";

interface ResultsByStateProps {
    engine : Engine;
    theme : ThemeModel;
}

interface ResultSorter {
    name : string;
    sorter : (a : StateController, b : StateController) => number;
}

function createCandidateSorter(candidate : CandidateController) : ResultSorter {
    const candidateName = candidate.getFullName();
    const id = candidate.getId();
    const name = "Highest " + candidateName + " %";

    return {
        name: name,
        sorter: (a : StateController, b : StateController) => b.getOpinionForCandidate(id) - a.getOpinionForCandidate(id)
    };
}

function ResultsByState(props : ResultsByStateProps) {
    const { engine, theme } = props;

    const sorters : ResultSorter[] = [
        {
            name: "Alpabetical",
            sorter: (a : StateController, b : StateController) => a.model.name.localeCompare(b.model.name),
        }
    ];

    const [selectedSorter, setSelectedSorted] = useState<ResultSorter>(sorters[0]);

    if(engine.getTotalElectoralVotes() > 0) {
        sorters.push({
            name: "Most Electoral Votes",
            sorter: (a : StateController, b : StateController) => b.model.electoralVotes - a.model.electoralVotes
        })
    }

    sorters.push({
        name: engine.getLocalization("Closest States"),
        sorter: (a : StateController, b : StateController) => a.getOpinionForCandidate(a.getHighestCandidate(engine)?.getId() ?? 0) -  b.getOpinionForCandidate(b.getHighestCandidate(engine)?.getId() ?? 0)
    })

    for(const candidate of engine.scenarioController.getCandidates()) {
        sorters.push(createCandidateSorter(candidate))
    }

    const states = engine.scenarioController.getStates().sort(selectedSorter.sorter);

    const [selectedState, setSelectedState] = useState(states[0]);

    useEffect(() => {
        const states = engine.scenarioController.getStates().sort(selectedSorter.sorter);
        setSelectedState(states[0]);
    }, [selectedSorter, engine]);

    function setSort(e : React.ChangeEvent<HTMLSelectElement>) {
        setSelectedSorted(sorters.filter((x) => x.name == e.target.value)[0])
    }

    const popularVotes = new Map<number, number>();
    const electoralVotes = new Map<number, number>();
    const candidates = engine.scenarioController.getCandidates();

    for(const candidate of candidates) {
        popularVotes.set(candidate.getId(), selectedState.getPvsForCandidate(candidate));
        electoralVotes.set(candidate.getId(), selectedState.getEvsForCandidate(engine, candidate))
    }

    const results : FinalResultsModel = {
        popularVotes: popularVotes,
        electoralVotes: electoralVotes,
        candidates: candidates,
        totalPopularVotes: selectedState.model.popularVotes,
        totalElectoralVotes: selectedState.model.electoralVotes
    }

    return (
        <div style={{color:theme.primaryGameWindowTextColor}}>
            <h2>{engine.getLocalization("Election Results and Data by State")}</h2>
            <label>{engine.getLocalization("View states by")}: </label>
            <select style={{marginBottom:"16px"}} onChange={setSort} value={selectedSorter.name}>
                {sorters.map((x) => <option value={x.name}>{x.name}</option>)}
            </select>
            <br></br>
            <label>{engine.getLocalization("Select a state")}: </label>
            <select style={{marginBottom:"16px"}} value={selectedState.getId()} onChange={(e) => setSelectedState(states.filter((s) => s.getId() == Number(e.target.value))[0])}>
                {states.map((x) => <option value={x.getId()}>{x.model.name}</option>)}
            </select>
            <FinalResults results={results} theme={theme}></FinalResults>
        </div>
    )
}

export default ResultsByState;
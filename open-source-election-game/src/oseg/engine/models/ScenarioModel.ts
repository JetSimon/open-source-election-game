import CandidateModel from "./CandidateModel";
import StateModel from "./StateModel";
import Issue from "./Issue";
import ScenarioSideModel from "./ScenarioSideModel";
import ThemeModel from "./ThemeModel";
import SongModel from "./SongModel";
import Tooltip from "./Tooltip";

interface ScenarioModel {
    theme : ThemeModel;
    hasStateVisits: boolean;
    scenarioName: string;
    scenarioDescription: string;
    scenarioImageUrl: string;
    candidates: CandidateModel[];
    states: StateModel[];
    issues: Issue[];
    scenarioSides: ScenarioSideModel[];
    credits: string;
    music : SongModel[];
    tooltips? : Tooltip[];
}

export default ScenarioModel;
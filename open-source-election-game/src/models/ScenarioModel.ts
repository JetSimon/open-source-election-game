import CandidateModel from "./CandidateModel";
import StateModel from "./StateModel";
import Issue from "./Issue";
import QuestionModel from "./QuestionModel";
import ThemeModel from "./ThemeModel";

interface ScenarioSideModel {
    playerId: number;
    questions: QuestionModel[];
}

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
}

export default ScenarioModel;
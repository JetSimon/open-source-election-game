import CandidateModel from "./CandidateModel";
import StateModel from "./StateModel";
import Issue from "./Issue";
import QuestionModel from "./QuestionModel";

interface ScenarioSideModel {
    playerId: number;
    questions: QuestionModel[];
}

interface ScenarioModel {
    scenarioName: string;
    scenarioDescription: string;
    scenarioImageUrl: string;
    candidates: CandidateModel[];
    states: StateModel[];
    issues: Issue[];
    scenarioSides: ScenarioSideModel[];
}

export default ScenarioModel;
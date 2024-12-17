import CandidateModel from "./CandidateModel";
import StateModel from "./StateModel";
import Issue from "./Issue";
import QuestionModel from "./QuestionModel";

interface ScenarioSideModel {
    questions: QuestionModel[];
}

interface ScenarioModel {
    candidates: CandidateModel[];
    states: StateModel[];
    issues: Issue[];
    scenarioSides: ScenarioSideModel[];
}

export default ScenarioModel;
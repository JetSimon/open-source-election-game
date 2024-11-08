import CandidateModel from "./CandidateModel";
import StateModel from "./StateModel";
import Issue from "./Issue";
import QuestionModel from "./QuestionModel";

interface ScenarioModel {
    candidates: CandidateModel[];
    states: StateModel[];
    issues: Issue[];
    questions: QuestionModel[];
}

export default ScenarioModel;
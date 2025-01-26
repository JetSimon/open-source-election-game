import { Engine } from "../../../engine/Engine";
import { AnswerEffectModel } from "../../../engine/models/AnswerEffectModel";
import { AnswerEffectType } from "../../../engine/models/AnswerEffectType";

interface DebugMenuAnswerEffectProps {
    answerEffect : AnswerEffectModel;
    engine : Engine;
}

function DebugMenuAnswerEffect(props : DebugMenuAnswerEffectProps) {

    const { answerEffect, engine } = props;

    function getCandidateName(id : number) {
        const model = engine.getCandidateModelById(id);
        return model.firstName + " " + model.lastName;
    }

    function getIssueName(id : number) {
        return engine.scenarioController.model.issues.filter((x) => x.id == id)[0]?.name ?? "Error";
    }

    function getQuestionDesc(id : number | undefined) {
        if(id == undefined) {
            return "Error id undefined";
        }
        return (engine.scenarioController.questions.filter((x) => x.id == id)[0]?.description.slice(0, 15) ?? "Error") + "...";
    }

    function getAmountStyle() {
        return {
            color: answerEffect.amount > 0 ? "green" : "red"
        }
    }

    function getAnswerEffectText() {

        const answerEffectType: AnswerEffectType = AnswerEffectType[answerEffect.answerEffectType as keyof typeof AnswerEffectType];

        if(answerEffectType == AnswerEffectType.Global) {
            return <p>Change global multiplier for {getCandidateName(answerEffect.candidateId)} by <span style={getAmountStyle()}>{answerEffect.amount}</span></p>;
        }
        else if(answerEffectType == AnswerEffectType.Issue) {
            return <p>Change issue score on issue {getIssueName(answerEffect.issueId)} for {getCandidateName(answerEffect.candidateId)} by <span style={getAmountStyle()}>{answerEffect.amount}</span></p>
        }
        else if(answerEffectType == AnswerEffectType.SetQuestionEnabled) {
            return <p>Sets question with id {answerEffect.questionId} ({getQuestionDesc(answerEffect.questionId)}) to {answerEffect.questionEnabled ? "enabled" : "disabled"}</p>
        }
        else if(answerEffectType == AnswerEffectType.State) {
            return <p>Change state multiplier for {engine.scenarioController.getStateControllerByStateId(answerEffect.stateId)?.model.name ?? "Error"} for {getCandidateName(answerEffect.candidateId)} by <span style={getAmountStyle()}>{answerEffect.amount}</span></p>
        }
        else if(answerEffectType == AnswerEffectType.TctIssue) {
            return <p>Apply TCT style issue score effect for issue {getIssueName(answerEffect.issueId)} with score of {answerEffect.amount} weight of {answerEffect.weight} for candidate {getCandidateName(answerEffect.candidateId)}</p>
        }
        else {
            return <p>Error could not make string</p>;
        }
    }

    return (
        <li className="DebugMenuAnswerEffect">
            {getAnswerEffectText()}
        </li>
    )
}

export default DebugMenuAnswerEffect;
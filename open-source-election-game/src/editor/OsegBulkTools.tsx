import { useState } from "react";
import { CandidateModel } from "../oseg/engine/models/CandidateModel";
import { ScenarioModel } from "../oseg/engine/models/ScenarioModel";
import GenericEditorBulkTool from "./components/GenericEditorBulkTool";

interface OsegBulkToolsProps {
  setData: (d: ScenarioModel) => void;
  data: ScenarioModel;
}

enum EffectDirection {
  Positive,
  Negative,
  All,
}

function OsegBulkTools(props: OsegBulkToolsProps) {
  const { data, setData } = props;

  const [amount, setAmount] = useState(1);
  const [selectedCandidate, setSelectedCandidate] = useState(
    data.candidates.length > 0 ? data.candidates[0].id : -1
  );
  const [effectDirection, setEffectDirection] = useState(EffectDirection.All);

  function multiplyAllAnswerEffects(n: number) {
    for (const scenarioSide of data.scenarioSides) {
      for (const question of scenarioSide.questions) {
        for (const answer of question.answers) {
          for (const effect of answer.answerEffects) {
            effect.amount *= n;
          }
        }
      }
    }

    setData(JSON.parse(JSON.stringify(data)));
    alert("All answer effects have been multiplied");
  }

  function multiplyAllIssueAnswerEffects(n: number) {
    for (const scenarioSide of data.scenarioSides) {
      for (const question of scenarioSide.questions) {
        for (const answer of question.answers) {
          for (const effect of answer.answerEffects) {
            if (effect.answerEffectType == "Issue") {
              effect.amount *= n;
            }
          }
        }
      }
    }

    setData(JSON.parse(JSON.stringify(data)));
    alert("All issue answer effects have been multiplied");
  }

  
  function multiplyAllTctIssueWeights(n: number) {
    for (const scenarioSide of data.scenarioSides) {
      for (const question of scenarioSide.questions) {
        for (const answer of question.answers) {
          for (const effect of answer.answerEffects) {
            if (effect.answerEffectType == "TctIssue") {
              if(effect.weight) {
                effect.weight *= n;
              }
             
            }
          }
        }
      }
    }

    setData(JSON.parse(JSON.stringify(data)));
    alert("All TctIssue weights have been multiplied");
  }

  function multiplyAnswerEffectsForCandidate(n: number) {
    for (const scenarioSide of data.scenarioSides) {
      for (const question of scenarioSide.questions) {
        for (const answer of question.answers) {
          for (const effect of answer.answerEffects) {
            const directionApplies =
              effectDirection == EffectDirection.All ||
              (effectDirection == EffectDirection.Positive &&
                effect.amount > 0) ||
              (effectDirection == EffectDirection.Negative &&
                effect.amount < 0);

            if (effect.candidateId == selectedCandidate && directionApplies) {
              effect.amount *= n;
            }
          }
        }
      }
    }

    setData(JSON.parse(JSON.stringify(data)));
    alert(
      "All answer effects for candidate with pk " +
        selectedCandidate +
        " have been multiplied"
    );
  }

  return (
    <div className="EditorForm">
      <GenericEditorBulkTool
        defaultValue={1}
        label="Multiply ALL AnswerEffects by"
        onClick={multiplyAllAnswerEffects}
      ></GenericEditorBulkTool>

      <div className="EditorForm EditorBox">
        <label>Multiply AnswerEffects for Candidate by: </label>
        <input
          type="number"
          step="0.1"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        ></input>

        <label>Affected Candidate: </label>
        <select
          onChange={(e) => setSelectedCandidate(Number(e.target.value))}
          value={selectedCandidate}
        >
          {data.candidates.map((candidate: CandidateModel) => (
            <option key={candidate.id} value={candidate.id}>
              {candidate.firstName} {candidate.lastName}
            </option>
          ))}
        </select>

        <label>Kinds of Effect: </label>
        <select
          onChange={(e) => setEffectDirection(Number(e.target.value))}
          value={effectDirection}
        >
          <option value={EffectDirection.All}>All</option>
          <option value={EffectDirection.Positive}>
            Positive Effects Only
          </option>
          <option value={EffectDirection.Negative}>
            Negative Effects Only
          </option>
        </select>

        <button
          onClick={() => multiplyAnswerEffectsForCandidate(amount)}
          className="GreenButton"
        >
          Go
        </button>
      </div>

      <GenericEditorBulkTool
        defaultValue={1}
        label="Multiply ALL Issue AnswerEffects by"
        onClick={multiplyAllIssueAnswerEffects}
      ></GenericEditorBulkTool>

    <GenericEditorBulkTool
        defaultValue={1}
        label="Multiply ALL TctIssue Weights by"
        onClick={multiplyAllTctIssueWeights}
      ></GenericEditorBulkTool>
    </div>
  );
}

export default OsegBulkTools;

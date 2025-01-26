import { useEffect } from "react";
import { QuestionModel } from "../../oseg/engine/models/QuestionModel";
import { ScenarioModel } from "../../oseg/engine/models/ScenarioModel";
import QuestionEditor from "./QuestionEditor";

interface QuestionsEditorProps {
  data: ScenarioModel;
  setData: (data: ScenarioModel) => void;
  sideIndex: number;
  setSideIndex: (sideIndex: number) => void;
  questionIndex: number;
  setQuestionIndex: (questionIndex: number) => void;
}

function QuestionsEditor(props: QuestionsEditorProps) {
  function getNameForCandidate(id: number) {
    const can = data.candidates.filter((x) => x.id == id)[0];
    return can.firstName + " " + can.lastName;
  }

  const {
    data,
    setData,
    sideIndex,
    setSideIndex,
    questionIndex,
    setQuestionIndex,
  } = props;

  const side = data.scenarioSides[sideIndex];

  useEffect(() => {
    if (side != undefined) {
      setQuestionIndex(0);
    }
  }, [sideIndex]);

  if (data.scenarioSides.length == 0 || side == undefined) {
    return (
      <p>
        There are no scenario sides defined. Go to Candidates and create a new
        ScenarioSide from there for the candidate you want to be able to play
        as.
      </p>
    );
  }

  function deleteSide() {
    if (data.scenarioSides.length == 1) {
      alert(
        "You cannot delete the last side from the OSEG editor. Create a new one and then delete this one."
      );
      return;
    }

    data.scenarioSides.splice(sideIndex, 1);
    setData(JSON.parse(JSON.stringify(data)));
  }

  const questions = side.questions;

  function deleteQuestion() {
    side.questions.splice(questionIndex, 1);
    setData(JSON.parse(JSON.stringify(data)));
    if (
      side.questions[questionIndex] == undefined &&
      side.questions.length > 0
    ) {
      setQuestionIndex(side.questions.length - 1);
    }
  }

  function highestQuestionId() {
    if (side.questions.length == 0) {
      return Math.round(Math.random() * 1000000);
    }

    return Math.max(...side.questions.map((x) => x.id));
  }

  function addQuestion() {
    const id = highestQuestionId() + 1;
    side.questions.push({
      id: id,
      description: "Description goes here",
      answers: [],
      keepInPlaceIfQuestionsShuffled: true,
      enabled: true,
      onlyEnableAtStartIfRunningMateId: -1,
    });
    setData(JSON.parse(JSON.stringify(data)));
    setQuestionIndex(side.questions.length - 1);
  }

  function getHighestAnswerId() {
    if (
      data.scenarioSides.length == 0 ||
      data.scenarioSides[0].questions.length == 0
    ) {
      return Math.round(Math.random() * 565464);
    }

    let highest = 0;

    for (const side of data.scenarioSides) {
      for (const question of side.questions) {
        for (const answer of question.answers) {
          highest = Math.max(highest, answer.id);
        }
      }
    }

    return highest;
  }

  function cloneQuestion() {
    const currentQuestion = side.questions[questionIndex];
    const newQuestion: QuestionModel = JSON.parse(
      JSON.stringify(currentQuestion)
    );
    newQuestion.id = highestQuestionId() + 1;

    let answerId = getHighestAnswerId() + 1;
    for (const answer of newQuestion.answers) {
      answer.id = answerId;
      answerId++;
    }

    side.questions.push(newQuestion);
    setData(JSON.parse(JSON.stringify(data)));
  }

  function moveQuestionDown() {
    if (questionIndex == side.questions.length - 1) {
      return;
    }

    const temp = side.questions[questionIndex];
    side.questions[questionIndex] = side.questions[questionIndex + 1];
    side.questions[questionIndex + 1] = temp;
    setData(JSON.parse(JSON.stringify(data)));
    setQuestionIndex(questionIndex + 1);
  }

  function moveQuestionUp() {
    if (questionIndex == 0) {
      return;
    }

    const temp = side.questions[questionIndex];
    side.questions[questionIndex] = side.questions[questionIndex - 1];
    side.questions[questionIndex - 1] = temp;
    setData(JSON.parse(JSON.stringify(data)));
    setQuestionIndex(questionIndex - 1);
  }

  return (
    <div style={{ textAlign: "left" }}>
      <label>Select a Scenario Side: </label>
      <select
        value={sideIndex}
        onChange={(e) => setSideIndex(Number(e.target.value))}
      >
        {data.scenarioSides.map((x) => (
          <option key={x.playerId} value={data.scenarioSides.indexOf(x)}>
            {getNameForCandidate(x.playerId)}
          </option>
        ))}
      </select>

      <button className="RedButton" onClick={deleteSide}>
        Delete Scenario Side
      </button>

      <br></br>

      {side.questions.length == 0 ? (
        <div>
          <button className="GreenButton" onClick={addQuestion}>
            Add Question
          </button>
          <p>This Scenario Side has no questions yet!</p>
        </div>
      ) : (
        <div>
          <label>Select a Question ({side.questions.length}): </label>
          <select
            value={questionIndex}
            onChange={(e) => setQuestionIndex(Number(e.target.value))}
          >
            {questions.map((question) => (
              <option value={questions.indexOf(question)}>
                {questions.indexOf(question) + 1} -{" "}
                {question.description.slice(0, 30)}...
              </option>
            ))}
          </select>

          <button className="GreenButton" onClick={addQuestion}>
            +
          </button>
          <button className="RedButton" onClick={deleteQuestion}>
            -
          </button>
          <button className="BlueButton" onClick={cloneQuestion}>
            Clone
          </button>

          <button disabled={questionIndex <= 0} onClick={moveQuestionUp}>
            ⬆️
          </button>
          <button
            disabled={questionIndex >= side.questions.length - 1}
            onClick={moveQuestionDown}
          >
            ⬇️
          </button>

          <QuestionEditor
            sideIndex={sideIndex}
            questionIndex={questionIndex}
            question={side.questions[questionIndex]}
            data={data}
            setData={setData}
          ></QuestionEditor>
        </div>
      )}
    </div>
  );
}

export default QuestionsEditor;

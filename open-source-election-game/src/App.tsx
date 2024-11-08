import './App.css';
import Engine from './engine/Engine';
import { useState } from 'react';
import testScenario from './scenarios/TestScenario';
import AnswerModel from './models/AnswerModel';
import Answer from './components/Answer';

const engine = new Engine();
engine.loadScenario(testScenario);
engine.updateStates();

engine.printStateOpinions();

function App() {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(engine.currentQuestionIndex);
  const [currentQuestion, setCurrentQuestion] = useState(engine.getCurrentQuestion());
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerModel | null>(null);

  function submitAnswer() {
    if (selectedAnswer == null) {
      alert("You must select an answer!");
      return;
    }

    alert("Feedback: " + selectedAnswer.feedback);
    engine.applyAnswer(selectedAnswer);
    engine.printStateOpinions();
    engine.nextQuestion();
    setCurrentQuestionIndex(engine.currentQuestionIndex);

    if (engine.isGameOver()) {
      alert("Game over!");
      return;
    }

    setCurrentQuestion(engine.getCurrentQuestion());
  }

  if (currentQuestion == null) {
    return <p>Current question is null</p>;
  }

  return (
    <>

      <div>
        <h2>Question {currentQuestionIndex + 1}/{engine.getNumberOfQuestions()}</h2>

        <p>{currentQuestion.description}</p>
        <div>
          {currentQuestion.answers.map((answerModel) => <Answer answerId={currentQuestion.answers.indexOf(answerModel).toString()} key={currentQuestion.answers.indexOf(answerModel)} answerModel={answerModel} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer}></Answer>)}
        </div>

        <button onClick={submitAnswer}>Okay</button>
      </div>

      <textarea value={engine.getStateOpinionsString()}></textarea>

    </>
  );
}

export default App;

import './App.css';
import Engine from './engine/Engine';
import { useState } from 'react';
import testScenario from './scenarios/TestScenario';
import AnswerModel from './models/AnswerModel';
import QuestionView from './views/QuestionView';

import MapView from './views/MapView';
import testMap from './scenarios/TestMap.svg';

const engine = new Engine();
engine.loadScenario(testScenario);
engine.updateStates();

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
    <h1>OSEG</h1>
      <QuestionView currentQuestionIndex={currentQuestionIndex} engine={engine} currentQuestion={currentQuestion} submitAnswer={submitAnswer} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer}></QuestionView>
      <MapView engine={engine} mapUrl={testMap}></MapView>
    </>
  );
}

export default App;

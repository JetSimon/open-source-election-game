import './App.css';
import Engine from './engine/Engine';
import { useState } from 'react';
import testScenario from './scenarios/TestScenario';
import AnswerModel from './models/AnswerModel';
import QuestionView from './views/QuestionView';

import BottomBanner from './components/BottomBanner';
import MapView from './views/MapView';
import testMap from './scenarios/TestMap.svg';

import EndingView from './views/EndingView';

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
    setSelectedAnswer(null);
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
    <div className="App">
      <h2>OSEG</h2>
      {
        engine.isGameOver() ? 
        <EndingView engine={engine}></EndingView>
        :
        <QuestionView currentQuestionIndex={currentQuestionIndex} engine={engine} currentQuestion={currentQuestion} submitAnswer={submitAnswer} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer}></QuestionView>
      }
      <MapView engine={engine} mapUrl={testMap}></MapView>
      <BottomBanner engine={engine}></BottomBanner>
    </div>
  );
}

export default App;

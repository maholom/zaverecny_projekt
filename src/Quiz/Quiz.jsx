import React, { useState } from 'react';
import { setQuiz, doTurn, isColisionAlert, isFinishAlert } from '../state';
import { questions } from '../questions.js';
import { Snowman } from '../Snowman/Snowman.jsx';
import './style.css';

export const Quiz = ({ state, setState }) => {
  const [question] = useState(
    questions[Math.round(Math.random() * (questions.length - 1))],
  );
  const [answerId, setAnswerId] = useState(null);
  const answer = answerId !== null ? question.answers[answerId] : null;

  let label, action;
  if (isColisionAlert(state)) {
    label = <span className="alert"> Pozor, hrozí kolize! </span>;
  } else if (isFinishAlert(state)) {
    label = <span className="alert"> Připrav se na výhru! </span>;
  } else {
    label = '';
  }

  if (answer && answer.value && isColisionAlert(state)) {
    action = 'Sejmi ho!';
  } else if (answer && answer.value && isFinishAlert(state)) {
    action = 'Finišuj!';
  } else if (answer && answer.value) {
    action = 'Odraž se a jeď!';
  } else {
    action = 'Nech hrát soupeře!';
  }

  return (
    <div className="shade">
      <div className="popup">
        <h2 className="quiz-h2">Kvíz</h2>
        <div className="quiz-comment">
          {' '}
          Padla ti {state.dice}. Chceš frčet dál? {label} Odpověz správně:
        </div>
        <div className="quiz-question">{question.text}</div>
        {question.answers.map((currentAnswer, i) => (
          <div
            key={i}
            onClick={() => (answer ? null : setAnswerId(i))}
            className={`answer ${i === answerId ? 'selected' : ''}`}
          >
            <Snowman
              className={`snowmanQuiz ${
                answer ? (currentAnswer.value ? 'right' : 'wrong') : ''
              }`}
            />
            <div>{currentAnswer.text}</div>
          </div>
        ))}
        <div className="quiz-evaluated">
          {answer
            ? answer.value
              ? 'Správná odpověď. Gratulujeme!'
              : 'Špatná odpověď. Zkus to příště!'
            : 'Vyber odpověď'}
        </div>
        {answer ? (
          <>
            <button
              className="quiz-btn"
              onClick={() => {
                setState(doTurn(setQuiz(state, answer.value)));
              }}
            >
              {action}
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};

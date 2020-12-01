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
    label = 'Pozor, hrozí kolize!';
  } else if (isFinishAlert(state)) {
    label = 'Připrav se na výhru!';
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
    action = 'Hraje kamarád!';
  }

  return (
    <div className="shade">
      <div className="popup">
        <h2>QUIZ</h2>
        Hodil jsi {state.dice}. Chceš frčet dál? {label} Odpověz správně:
        <br />
        {question.text}
        <br />
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
            <span>{currentAnswer.text}</span>
          </div>
        ))}
        <br />
        <br />
        <br />
        {answer
          ? answer.value
            ? 'Gratulujeme!'
            : 'Špatná odpověď. Zkus to příště!'
          : 'Vyber odpověď'}
        <br />
        {answer ? (
          <>
            <button
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

import React, { useState } from "react";
import { setQuiz, doTurn } from "../state";
import { questions } from "../questions.js";
import { Snowman } from "../Snowman/Snowman.jsx";
import "./style.css";

export const Quiz = ({ state, setState }) => {
  const question = questions[Math.round(Math.random() * (questions.length - 1))];
  const [answerId, setAnswerId] = useState(null);
  const answer = answerId !== null ? question.answers[answerId] : null;

  return (
    <div className="shade">
      <div className="popup">
        <h2>QUIZ</h2>
        Hodil jsi {state.dice}. Chceš frčet dál? Odpověz správně: ...
        <br />
        {question.text}
        <br />
        {question.answers.map((currentAnswer, i) => (
          <div
            key={i}
            onClick={() => (answer ? null : setAnswerId(i))}
            className={`answer ${i === answerId ? "selected" : ""}`}
          >
            <Snowman
              sign={answer ? (currentAnswer.value ? "right" : "wrong") : ""}
            />
            <span>{currentAnswer.text}</span>
          </div>
        ))}
        <br />
        <br />
        <br />
        {answer
          ? answer.value
            ? "Gratulujeme!"
            : "Špatná odpověď. Zkus to příště!"
          : "Vyber odpověď"}
        <br />
        {answer ? (
          <>
            <button
              onClick={() => {
                setState(doTurn(setQuiz(state, answer.value)));
              }}
            >
              {answer.value ? "Odraž se a jeď!" : "Hraje kamarád!"}
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};

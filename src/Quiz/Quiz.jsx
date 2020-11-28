import React, { useState } from "react";
import { setQuiz, doTurn } from "../state";
import { questions } from "../questions.js";
import { Snowman } from "../Snowman/Snowman.jsx";
import "./style.css";

export const Quiz = ({ state, setState }) => {
  const question = questions[0];
  const [answerId, setAnswerId] = useState(null);
  const answer = answerId !== null ? question.answers[answerId] : null;

  return (
    <div className="shade">
      <div className="popup">
        <h2>QUIZ</h2>
        Padlo ti {state.dice}, ale aby ti to jelo ukaž že na to máš ...
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
            ? "To jsi dal/a"
            : "Tak to jsi nedal/a"
          : "Vyber odpověď"}
        <br />
        {answer ? (
          <>
            <button
              onClick={() => {
                setState(doTurn(setQuiz(state, answer.value)));
              }}
            >
              {answer.value ? "Táhni" : "Nech kamráda"}
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};

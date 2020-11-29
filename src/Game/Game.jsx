import React, { useState } from "react";
import { Plan } from "../Plan/Plan1.jsx";
import { Quiz } from "../Quiz/Quiz.jsx";
import { Sidebar } from "../Sidebar/Sidebar.jsx";
import {
  isOverflowAlert,
  isPlayerInGame,
  setStarted,
  isWinner,
} from "../state";

export const Game = ({ state, setState }) => {
  const inGame = isPlayerInGame(state, state.player);

  return (
    <>
      <div className="game">
        <Plan state={state} />
        {isWinner(state) ? (
          <div>
            Vyhrál jsi, kámo!
            <button onClick={() => setState(setStarted(state, false))}>
              Zpět na začátek
            </button>
          </div>
        ) : (
          <Sidebar state={state} setState={setState} />
        )}
      </div>
      {inGame &&
      state.dice &&
      state.quiz === null &&
      !isOverflowAlert(state) ? (
        <Quiz state={state} setState={setState} />
      ) : null}
    </>
  );
};

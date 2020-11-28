import React, { useState } from 'react';
import { Plan } from '../Plan.jsx';
import { Quiz } from '../Quiz/Quiz.jsx';
import { Sidebar } from '../Sidebar/index.jsx';
import { isOverflowAlert, isPlayerInGame, setStarted } from '../state';

export const Game = ({ state, setState }) => {
  const inGame = isPlayerInGame(state, state.player);
  console.log(state.fields[state.fields.lenght - 1]);
  return (
    <>
      <div className="game">
        <Plan state={state} />
        {state.fields[state.fields.length - 1] === 0 ? (
          <Sidebar state={state} setState={setState} />
        ) : (
          <div>
            Vyhrál jsi, kámo!
            <button onClick={() => setState(setStarted(state, false))}>
              Zpět na začátek
            </button>
          </div>
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

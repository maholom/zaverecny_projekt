import React, { useState } from 'react';
import { Plan } from '../Plan/Plan1.jsx';
import { Quiz } from '../Quiz/Quiz.jsx';
import { Sidebar } from '../Sidebar/Sidebar.jsx';
import { SidebarFinish } from '../SidebarFinish/SidebarFinish';

import {
  isOverflowAlert,
  isPlayerInGame,
  setStarted,
  isWinner,
} from '../state';

export const Game = ({ state, setState }) => {
  const inGame = isPlayerInGame(state, state.player);

  return (
    <>
      <div className="game">
        <Plan state={state} />
        {isWinner(state) ? (
          <SidebarFinish />
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

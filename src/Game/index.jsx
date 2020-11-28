import React, { useState } from "react";
import { Plan } from "../Plan.jsx";
import { Quiz } from "../Quiz/Quiz.jsx";
import { Sidebar } from "../Sidebar/index.jsx";
import { isPlayerInGame } from "../state";

export const Game = ({ state, setState }) => {
  const inGame = isPlayerInGame(state, state.player);
  
  return (
    <>
      <Plan state={state} />
      <Sidebar state={state} setState={setState} />
      {inGame && state.dice && state.quiz === null ? (
        <Quiz state={state} setState={setState} />
      ) : null}
    </>
  );
};

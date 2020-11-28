import React from "react";
import { setStarted, isPlayerInGame, doTurn } from "../state";
import "./style.css";

export const Sidebar = ({ state, setState }) => {
  const inGame = isPlayerInGame(state, state.player);
  let label;
  let action;
  if (state.dice === null) {
    // kostka je prázdná
    label = inGame ? "Táhni" : "Budeš vyjíždět?";
    action = "Hoď kostkou";
  } else if (inGame && state.quiz === null) {
    // quiz je prázdný
    label = "Vyplň quiz"; // pomocny stav
    action = "Máš okno";
  } else if (inGame) {
    action = "Táhni";
  } else if (state.dice === 3) {
    label = "Nasazuješ";
    action = "Zahájit sjezd";
  } else {
    label = "Máš smúlu, hraje kamarád";
    action = "Ok";
  }

  return (
    <>
      Sidebar
      <button
        className="new-game"
        onClick={() => setState(setStarted(state, false))}
      >
        Nová hra
      </button>
      <div>
        Domeček
        <br />
        Červený {isPlayerInGame(state, 1) ? "NE" : "ANO"}
        <br />
        Zelený {isPlayerInGame(state, 2) ? "NE" : "ANO"}
        <br />
        {state.dice ? `Kostka ukazuje ${state.dice}` : ""}
        <div className={`bubble player-${state.player}`}>
          {label}
          <button onClick={() => setState(doTurn(state, 1, 1))}>
            {action}
          </button>
        </div>
      </div>
    </>
  );
};

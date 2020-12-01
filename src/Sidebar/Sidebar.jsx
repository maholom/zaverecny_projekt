import React from 'react';
import {
  setStarted,
  isPlayerInGame,
  doTurn,
  isOverflowAlert,
  diceMax,
} from '../state';
import { Snowflake } from '../Snowflake/Snowflake.jsx';
import { Lyzar } from '../Lyzar/Lyzar.jsx';
import { Dice } from '../Dice/Dice.jsx';
import './style.css';

export const Sidebar = ({ state, setState }) => {
  const inGame = isPlayerInGame(state, state.player);
  let label;
  let action;
  if (state.dice === null) {
    // kostka je prázdná
    label = inGame
      ? 'O kolik pojedeš dál?'
      : 'Jsi připraven vyjet na sjezdovku? Hoď kostkou!';
  } else if (inGame && isOverflowAlert(state)) {
    label = 'Hodil jsi moc.';
    action = 'Hraje kámoš!';
  } else if (inGame && state.quiz === null) {
    // quiz je prázdný
    /*label = /*"Pusť se do kvízu! action = 'Máš okno';*/
    // pomocny stav
  } else if (inGame) {
    action = 'Odstrč se a jeď!';
  } else if (state.dice === diceMax) {
    label = 'Padla ti šestka. Připrav se na start!';
    action = 'Zahájit sjezd';
  } else {
    label = 'Potřebuješ šestku. Hraje kamarád';
    action = 'Ok';
  }

  //player 1: !inGame, state.dice===diceMax, state.quiz === 0
  //player 2: inGame, targetPosition ===1
  //action: 'Jdi si radši namazat lyže. Druhý lyžař tě vyhodil hned na startu.'

  return (
    <div className="sidebar">
      <button
        className="new-game"
        onClick={() => setState(setStarted(state, false))}
      >
        Nová hra
      </button>
      <div className="home-lyzari">
        {isPlayerInGame(state, 1) ? (
          <div className="home-placeholder"></div>
        ) : (
          <Lyzar className="lyzar" fill="#cc2c00" />
        )}
        {isPlayerInGame(state, 2) ? (
          <div className="home-placeholder"></div>
        ) : (
          <Lyzar className="lyzar" fill="#16502d" />
        )}
      </div>
      <div className="homes">
        <Snowflake className="snowflake" />
        <Snowflake className="snowflake" />
      </div>
      <div className={`infobublina player-${state.player}`}>
        {label}
        {action ? (
          <button
            className="infobtn"
            onClick={() => setState(doTurn(state, 1, 1))}
          >
            {action}
          </button>
        ) : null}
      </div>
      <div className="div-dice">
        <Dice
          value={state.dice}
          onClick={() => setState(doTurn(state, 1, 1))}
        />
      </div>
    </div>
  );
};

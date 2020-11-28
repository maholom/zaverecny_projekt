import React from 'react';
import { setStarted, isPlayerInGame, doTurn } from '../state';
import { Snowflake } from '../Snowflake/Snowflake.jsx';
import './style.css';

export const Sidebar = ({ state, setState }) => {
  const inGame = isPlayerInGame(state, state.player);
  let label;
  let action;
  if (state.dice === null) {
    // kostka je prázdná
    label = inGame ? 'Připrav se na kvíz' : 'Jsi připraven vyjet na sjezdovku? Hoď kostkou!';
    action = 'Hoď kostkou';
  } else if (inGame && state.quiz === null) {
    // quiz je prázdný
    label = 'Pusť se do kvízu!'; // pomocny stav
    action = 'Máš okno';
  } else if (inGame) {
    action = 'Odstrč se a jeď!';
  } else if (state.dice === 3) {
    label = 'Padla ti šestka. Připrav se na start!';
    action = 'Zahájit sjezd';
  } else {
    label = 'Potřebuješ šestku. Hraje kamarád';
    action = 'Ok';
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
        Červený {isPlayerInGame(state, 1) ? 'NE' : 'ANO'}
        <br />
        Zelený {isPlayerInGame(state, 2) ? 'NE' : 'ANO'}
        <br />
        <div className="homes">
          <Snowflake /> 
          <Snowflake />
        </div>
        {state.dice ? `Kostka ukazuje ${state.dice}` : ''}
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

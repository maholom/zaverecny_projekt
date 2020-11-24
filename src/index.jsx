import { render } from 'react-dom';
import Plan from './Plan.jsx';
import './index.html';
import './style.css';
import React, { useState } from 'react';
import { initialState, doTurn, isPlayerInGame } from './state';

const App = () => {
  const [state, setState] = useState(initialState);

  let action;
  if (!state.dice) {
    action = 'Házej';
  } else if (isPlayerInGame(state, state.player)) {
    action = 'Táhni';
  } else if (state.dice === 3) {
    action = 'Nasazuj';
  } else {
    action = 'Nech hrát kamaráda';
  }

  return (
    <div className="App">
      <h1>Mensch, nezlob se!</h1>
      <div>
        {' '}
        <p>
          Táhne hráč:{' '}
          <span className={`player-${state.player}`}>{state.player}</span>{' '}
          {state.dice ? `Kostka ukazuje ${state.dice}` : ''}
        </p>
        <button onClick={() => setState(doTurn(state, 1, 1))}>{action}</button>{' '}
      </div>
      <Plan state={state} />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
};

render(
  <>
    <header></header>
    <main>
      <App />
    </main>
    <footer></footer>
  </>,
  document.querySelector('#app'),
);

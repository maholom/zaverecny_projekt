import { render } from 'react-dom';
import Plan from './Plan.jsx'
import './index.html';
import React, { useState } from "react";
import { initialState, doTurn } from "./State";


const App = () => {
  const [state, setState] = useState(initialState);

  return (
    <div className="App">
      <h1>Mensch, nezlob se!</h1>
      <div>
        {" "}
        Táhne hráč: {state.player}{" "}
        <button onClick={() => setState(doTurn(state, 1, 1))}>Tah</button>{" "}
      </div>
      <Plan state={state} />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

render(
  <>
    <header>
    </header>
    <main>
      <App />
    </main>
    <footer></footer>
  </>,
  document.querySelector('#app'),
);


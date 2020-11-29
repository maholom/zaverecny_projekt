import { render } from 'react-dom';
// import Plan from './Plan.jsx';
import { App } from './App/App.jsx';
import './index.html';
import './style.css';
import React, { useState } from 'react';
import { initialState, doTurn, isPlayerInGame } from './state';

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

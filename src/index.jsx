import { render } from 'react-dom';
import { App } from './App/App.jsx';
import './index.html';
import './style.css';
import React from 'react';

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

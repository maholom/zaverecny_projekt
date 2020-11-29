import React from 'react';
import { Snowman } from '../Snowman/Snowman';
import './style.css';
import { Logo } from './Logo';

export const Welcome = ({ startGame }) => {
  return (
    <>
      <div className="obrazovka">
        <div className="welcome">
          <p className="privitani rec">
            <h2>Herzlich willkommen - Srdečně vítej!</h2>
            Zahraj si, procvič si němčinu, potrap nervy při vyhazování a nauč se
            pár nových slovíček.
          </p>
          <p className="pravidla speech">
            <h2>Pravidla/Spielregeln:</h2>
            Hrají dva lyžaři. Rozdělte si, kdo bude červený a zelený sjezdař.
            Padne-li ti šestka, vyjedeš na sjezdovku. Na každém políčku na tebe
            čeká úkol. Pokud kvíz zodpovíš správně, postoupíš o hozený počet
            políček. Pokud se netrefíš, zůstaneš na svém políčku, namažeš si
            lyže a na tahu bude soupeř. Vyhrává ten, kdo jako první sjede z
            kopce.
          </p>
          <p>
            <button className="bublina start" onClick={startGame}>
              START!
            </button>
          </p>
          <Snowman className="snowman-uvodni" />
        </div>
        <footer>
          <div className="paticka">
            <Logo className="logo" />
          </div>
        </footer>
      </div>
    </>
  );
};

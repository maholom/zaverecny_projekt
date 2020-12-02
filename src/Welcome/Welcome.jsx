import React from 'react';
import { Snowman } from '../Snowman/Snowman';
import './style.css';
import { Logo } from './Logo';

export const Welcome = ({ startGame }) => {
  return (
    <>
      <div className="obrazovka">
        <div className="welcome">
          <div className="privitani rec">
            <h2>Herzlich willkommen - Srdečně vítej!</h2>
            Zahraj si, procvič si němčinu, potrap nervy při vyhazování a nauč se
            pár nových slovíček.
          </div>

          <div className="pravidla speech">
            <h2>Pravidla/Spielregeln:</h2>
            Hrají dva lyžaři. Rozdělte si, kdo bude červený a zelený sjezdař.
            Padne-li ti šestka, vyjedeš na sjezdovku. Na každém políčku na tebe
            čeká úkol. Pokud kvíz zodpovíš správně, postoupíš o hozený počet
            políček. Pokud se netrefíš, zůstaneš na svém políčku a na tahu bude
            soupeř. Vyhrává ten, kdo jako první sjede z kopce.
          </div>
          <div>
            <button className="bublina start" onClick={startGame}>
              START!
            </button>
          </div>
          <Snowman className="snowman-uvodni" />
        </div>
        <footer className="footer">
          <Logo className="logo" />
          <div className="container">
            <p className="paticka">
              Hra vytvořena během Digitální akademie 2020.
            </p>
            <p className="attribution">
              {' '}
              Lyžař a vločka designované u kolegů na Vecteezy a Visualpharm.{' '}
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

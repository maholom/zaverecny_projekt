import React from 'react';
import { Snowman } from '../Snowman/Snowman';
import { LyzarCerveny } from '../LyzarCerveny/LyzarCerveny';
import { LyzarZeleny } from '../LyzarZeleny/LyzarZeleny';
import './style.css';

export const Welcome = ({ startGame }) => {
  return (
    <>
      <div className="welcome">
        <p className="bubble ocas">
          Pravidla/Spielregeln
          <br />
          <br />
          Herzlich willkommen - Srdečně vítej! Připravili jsme pro tebe hru, kde
          si procvičíš němčinu, potrápíš nervy při vyhazování a naučíš se pár
          nových slovíček.
          <br />
          <br />
          Hrají dva lyžaři. Rozdělte si, kdo bude červený a zelený sjezdař.
          Padne-li ti šestka, vyjedeš na sjezdovku. Na každém políčku na tebe
          čeká úkol. Pokud kvíz zodpovíš správně, postoupíš o hozený počet
          políček. Pokud se netrefíš, zůstaneš na svém políčku, namažeš si lyže
          a na tahu bude soupeř. Vyhrává ten, kdo jako první sjede z kopce.
          <br />
          <br />A teď už jen: hurá do Alp!
        </p>
      </div>

      <div className="container">
        <div className="left-side">
          <Snowman className="snowman-uvodni" />
        </div>
        <div className="rigth-side">
          <LyzarCerveny className="lyzar cerveny" />
          <LyzarZeleny className="lyzar zeleny" />
        </div>
      </div>
    </>
  );
};

//<button className="bublina speech" onClick={startGame}>START</button>

import React from 'react';
import { Snowman } from '../Snowman/Snowman';
import { Lyzar } from '../Lyzar/Lyzar';
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
      <div className="tlacitko">
        <button className="bublina speech" onClick={startGame}>
          START
        </button>
      </div>
      <div className="container">
        <div className="left-side">
          <Snowman className="snowman-uvodni" />
        </div>
        <button className="bublina speech" onClick={startGame}>
          START
        </button>
        <div className="rigth-side">
          <Lyzar className="lyzar cerveny" fill="#cc2c00" />
          <Lyzar className="lyzar zeleny" fill="#16502d" />
        </div>
      </div>
    </>
  );
};

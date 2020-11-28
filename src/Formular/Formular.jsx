import React from "react";

export const Formular = () => {
  return (
    <>
      <div className="Formular"></div>

      <form>
        <p>Co budu dnes dělat:</p>
        <input id="A" type="radio" name="chooseone" value="A" />
        <label for="A">Jdu domu</label>
        <input id="B" type="radio" name="chooseone" value="B" />
        <label for="B"> Jdu se cvičit</label>
        <input id="C" type="radio" name="chooseone" value="C" />
        <label for="C"> Jdu se učit</label>
      </form>

      <h1>Custom Radio Buttons</h1>
      <label className="container">
        One
        <input type="radio" name="radio" />
        <span className="checkmark"></span>
      </label>
      <label className="container">
        Two
        <input type="radio" name="radio" />
        <span className="checkmark"></span>
      </label>
      <label className="container">
        Three
        <input type="radio" name="radio" />
        <span className="checkmark"></span>
      </label>
    </>
  );
};

// https://codepen.io/nikkipantony/pen/wpPGZp

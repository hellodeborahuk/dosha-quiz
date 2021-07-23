import React, { useState } from "react";
import "./App.css";
import Vata from "./Vata";
import Pitta from "./Pitta";

function Vatapitta() {
  let [dosha, setDosha] = useState(null);

  return (
    <div>
      <div className="container">
        <h1 className="dosha-title">Vata-Pitta</h1>
        <section className="dosha-info">
          <p>
            People with dual constitutions (two doshas) have personalities which
            are always in a sense “split”: under certain conditions, one dosha
            will predominate and under other circumstances the other dosha comes
            to the forefront. The inherent cohesion of personality which
            characterizes purely Vata, Pitta or Kapha people is more difficult
            to come by for those of us who have dual personalities, because we
            strive to balance the demands of two very dissimilar principles.
            Most individuals are dual in constitution.
          </p>
          <h2>Find out more about those doshas</h2>
          <div className="dosha-btns">
            <button className="dosha-btn" onClick={() =>setDosha(<Vata />)}>Vata</button>
            <button className="dosha-btn" onClick={() =>setDosha(<Pitta />)}>Pitta</button>
          </div>
        </section>
      </div>
      {dosha}
    </div>
  );
}

export default Vatapitta;

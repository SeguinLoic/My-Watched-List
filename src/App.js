import React from "react";
import './App.css';

import got from "./images/got.jpg"
import dame from "./images/dame.jpg"
import mandalorian from "./images/mandalorian.jpg"
import vikings from "./images/vikings.jpg"
import umbrella from "./images/umbrella.jpg"
import logoTMDB from "./images/logo-tmdb.svg";

function App() {
  return (
    <div className="App">
      <header>
        <h1>My series</h1>
        <form>
          <input type="text"/>
          <button>Search</button>
        </form>
      </header>

      <h2>Les dernières sorties</h2>
      <div className="sorties">
        <img src={got} alt="got"/>
        <img src={dame} alt="dame"/>
        <img src={mandalorian} alt="mandalorian"/>
        <img src={vikings} alt="vikings"/>
        <img src={umbrella} alt="umbrella"/>
      </div>

      <h2>Mon top</h2>
      <div className="monTop">
        <img src={dame} alt="dame"/>
        <img src={mandalorian} alt="mandalorian"/>
        <img src={umbrella} alt="umbrella"/>
      </div>

      <div className="attribution">
        <span>This product uses the TMDb API but is not endorsed or certified by TMDb.</span>
        <img src={logoTMDB} />
      </div>
    </div>
  );
}

export default App;

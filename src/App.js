import React, { useState } from "react";
import './App.css';

import got from "./images/got.jpg"
import dame from "./images/dame.jpg"
import mandalorian from "./images/mandalorian.jpg"
import vikings from "./images/vikings.jpg"
import umbrella from "./images/umbrella.jpg"
import logoTMDB from "./images/logo-tmdb.svg";

function App() {

  const API_KEY = process.env.REACT_APP_API_KEY;
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${search}`);
    const myJSON = await response.json();
    setResult(myJSON.results);
  }

  return (
    <div className="App">
      <header>
        <h1>My series</h1>
        <form onSubmit={handleSearch}>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
          <button>Search</button>
        </form>
      </header>

      <h2>Ma recherche</h2>
      <div className="search">
      </div>

      <h2>Les dernières sorties</h2>
      <div className="sorties">
        <img src={got} alt="got"/>
        <img src={dame} alt="dame"/>
        <img src={mandalorian} alt="mandalorian"/>
        <img src={vikings} alt="vikings"/>
        <img src={umbrella} alt="umbrella"/>
      </div>

      {/*<h2>Mon top</h2>
      <div className="monTop">
        <img src={dame} alt="dame"/>
        <img src={mandalorian} alt="mandalorian"/>
        <img src={umbrella} alt="umbrella"/>
      </div>*/}

      <div className="attribution">
        <span>This product uses the TMDb API but is not endorsed or certified by TMDb.</span>
        <img src={logoTMDB} alt="Logo TMDB" />
      </div>
    </div>
  );
}

export default App;

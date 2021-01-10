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
  const [myList, setMyList] = useState([]);


  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${search}`);
    const myJSON = await response.json();
    setResult(myJSON.results);
    setSearch("");
  }

  return (
    <div className="App">
      <header>
        <h1>My Watched List</h1>
        <form onSubmit={handleSearch}>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
          <button>Search</button>
        </form>
      </header>


      <div className="search">
        {
          result.length 
          ? 
          <div className="blocSearch">
            <h2>Ma recherche</h2>
            <div className="result">
              {
                result.map(res => {
                  return (
                    <div>
                      <img src={`https://image.tmdb.org/t/p/w500${res.poster_path}`} alt="hey"/>
                      {res.original_name}
                      <button onClick={() => setMyList([...myList, {res, note: ""}])}>Ajouter à ma liste</button>
                    </div>
                  )
                })
              } 
            </div>
          </div>
          : 
            <div className="blocSortie">
              <h2>Les dernières sorties</h2>
              <div className="sorties">
                <img src={got} alt="got"/>
                <img src={dame} alt="dame"/>
                <img src={mandalorian} alt="mandalorian"/>
                <img src={vikings} alt="vikings"/>
                <img src={umbrella} alt="umbrella"/>
              </div>
            </div>

        }
      </div>

      <h2>Mon top</h2>
      <div className="monTop">
        {
          myList.length 
          ? myList.map(serie => <div><img src={`https://image.tmdb.org/t/p/w500${serie.res.poster_path}`} alt="hey" /><span>{serie.res.original_name}</span></div>)
          : (
            <>
              <img src={dame} alt="dame"/>
              <img src={mandalorian} alt="mandalorian"/>
              <img src={umbrella} alt="umbrella"/>
            </>
          )
        }
      </div>

      <div className="attribution">
        <span>This product uses the TMDb API but is not endorsed or certified by TMDb.</span>
        <img src={logoTMDB} alt="Logo TMDB" />
      </div>
    </div>
  );
}

export default App;

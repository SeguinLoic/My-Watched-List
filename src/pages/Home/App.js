import React, { useState } from "react";
import './App.css';

import Header from "../../components/Header/Header";

import got from "../../images/got.jpg"
import dame from "../../images/dame.jpg"
import mandalorian from "../../images/mandalorian.jpg"
import vikings from "../../images/vikings.jpg"
import umbrella from "../../images/umbrella.jpg"
import logoTMDB from "../../images/logo-tmdb.svg";

function App() {

  const [myList, setMyList] = useState([]);
  const [result, setResult] = useState([]);

  return (
    <div className="App">

      <Header setResult={setResult} />

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

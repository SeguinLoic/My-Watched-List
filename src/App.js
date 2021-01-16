import React from "react";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home/Home"
import Login from "./pages/Authentication/Login"
import {AuthProvider} from "./"

import logoTMDB from "./images/logo-tmdb.svg";

function App() {

  return (
    <div className="App">

      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
        </div>
      </Router>

      <Login />

      <div className="attribution">
        <span>This product uses the TMDb API but is not endorsed or certified by TMDb.</span>
        <img src={logoTMDB} alt="Logo TMDB" />
      </div>
      
    </div>
  );
}

export default App;

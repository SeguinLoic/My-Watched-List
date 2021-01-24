import React, { useContext } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "../pages/Home/Home"
import Profile from "../pages/Profile/Profile"
import Authentication from "./Authentication/Authentication"
import Logout from "./Authentication/Logout";
import AppNavigation from "./Navigation/AppNavigation";
import { AuthContext } from "./Authentication/Auth";

import Attribution from "./Attribution/Attribution";

function App() {

  const {currentUser} = useContext(AuthContext);

  return (
    <div className="App">

      {
        currentUser 
        ?
          <Router>
            <AppNavigation />
            <Switch>
              <Route exact path="/Home" component={Home}/>
              <Route exact path="/Profile" component={Profile}/>
              <Route exact path="/logout" component={Logout}/>
            </Switch>
          </Router> 
        : 
        <Authentication />
      }

      <Attribution />
      
    </div>
  );
}

export default App;

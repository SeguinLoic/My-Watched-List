import React, { useContext } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

//import Home from "../pages/Home/Home"
import Home from "@/pages/Home/Home"
import Profile from "../pages/Profile/Profile"
//import Account from "../pages/Account/Account"
import Authentication from "../router/Authentication"
import SeriePage from "./SeriePage/SeriePage";
import Attribution from "./Attribution/Attribution";

de la merde 2

import { AuthContext } from "./Authentication/Auth";

function App() {

  const {currentUser} = useContext(AuthContext);

  return (
    <div className="App">

      {
        currentUser 
        ?
          <Router>
            <Redirect to ="/Home" />
            <Switch>
              <Route exact path="/Home" component={Home} />
              <Route exact path="/Profile" component={Profile} />
              <Route path="/serie/:name" component={SeriePage} />
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

// <Route exact path="/Account" component={Account}/>

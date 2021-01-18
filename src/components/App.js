import React, { useContext } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import Home from "../pages/Home/Home"
import Profile from "../pages/Profile/Profile"
import Login from "./Authentication/Login"
import Logout from "./Authentication/Logout"
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
            <nav>
              <Link to="/Home">Home</Link>
              <Link to="/Profile">Profile</Link>
            </nav>
            <Switch>
              <Route exact path="/Home" component={Home}/>
              <Route exact path="/Profile" component={Profile}/>
              <Route exact path="/logout" component={Logout}/>
            </Switch>
          </Router> 
        : 
        <Login />
      }

      <Attribution />
      
    </div>
  );
}

export default App;

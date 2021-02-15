import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { AuthContext } from "../components/Authentication/Auth";

import Home from "../pages/Home/Home"
import Profile from "../pages/Profile/Profile"
import SeriePage from "../components/SeriePage/SeriePage";
import Signin from "../components/Authentication/Signin";
import Login from "../components/Authentication/Login";
import ForgotPassword from "../components/Authentication/ForgotPassword";

export default function AppRouter() {

  const {currentUser} = useContext(AuthContext);

    return (
      <Router>
        <Switch>
          {
          currentUser ? (
            <>
              <Redirect to="/Home" />
              <Route exact path="/Home" component={Home} />
              <Route exact path="/Profile" component={Profile} />
              <Route path="/serie/:name" component={SeriePage} />
            </>
          ) : (
            <>
              <Redirect to="/Login" />
              <Route exact path="/Login" component={Login}/>
              <Route exact path="/Signin" component={Signin}/>
              <Route exact path="/ForgotPassword" component={ForgotPassword}/>
            </>
          )
          }
        </Switch>
      </Router> 
    )
}
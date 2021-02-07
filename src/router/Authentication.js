import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Signin from "../components/Authentication/Signin";
import Login from "../components/Authentication/Login";
import ForgotPassword from "../components/Authentication/ForgotPassword";

import LogNavigation from "../components/Navigation/LogNavigation"

export default function Authentication() {

    return (
        <div className="authentication">
            <Router>

              <Redirect to="/Login" />

              <Switch>
                <Route exact path="/Login" component={Login}/>
                <Route exact path="/Signin" component={Signin}/>
                <Route exact path="/ForgotPassword" component={ForgotPassword}/>
              </Switch>

              <LogNavigation />

            </Router> 
        </div>
    )
}
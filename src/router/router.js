import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Home from "../pages/Home/Home"
import Profile from "../pages/Profile/Profile"
import SeriePage from "./SeriePage/SeriePage";
import Signin from "../components/Authentication/Signin";
import Login from "../components/Authentication/Login";
import ForgotPassword from "../components/Authentication/ForgotPassword";

import LogNavigation from "../components/Navigation/LogNavigation"

export default function Router() {

    return (
        <div className="authentication">
            <Router>

              <Redirect to="/Login" />
              
              <Switch>
                <Route exact path="/Home" component={Home} />
                <Route exact path="/Profile" component={Profile} />
                <Route path="/serie/:name" component={SeriePage} />
                <Route exact path="/Login" component={Login}/>
                <Route exact path="/Signin" component={Signin}/>
                <Route exact path="/ForgotPassword" component={ForgotPassword}/>
              </Switch>

              <LogNavigation />

            </Router> 
        </div>
    )
}
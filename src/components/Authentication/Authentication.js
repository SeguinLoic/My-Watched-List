import React from "react";
import { BrowserRouter as Router, Link, Switch, Route, Redirect } from "react-router-dom";

import Signin from "./Signin";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";

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

              <Link to="/Login">Déjà membre ?</Link>
              <Link to="/Signin" >Pas inscrit ?</Link>
              <Link to="/ForgotPassword">Mot de passe oublié ?</Link>

            </Router>
        </div>
    )
}
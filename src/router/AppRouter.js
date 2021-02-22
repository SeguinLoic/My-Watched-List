import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { AuthContext } from "../ui/components/Authentication/Auth";

import Home from "../ui/pages/Home/Home"
import Profile from "../ui/pages/Profile/Profile"
import SeriePage from "../ui/components/SeriePage/SeriePage";
import Signin from "../ui/components/Authentication/Signin";
import Login from "../ui/components/Authentication/Login";
import ForgotPassword from "../ui/components/Authentication/ForgotPassword";

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
import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { StoreContext } from "../store/Store";

import ForgotPassword from "../ui/pages/ForgotPassword/ForgotPassword";
import Login from "../ui/pages/Login/Login";
import Signin from "../ui/pages/Signin/Signin";
import Home from "../ui/pages/Home/Home"
import Profile from "../ui/pages/Profile/Profile"
import SeriePage from "../ui/pages/Movie/SeriePage";

import { getSessionUser } from "../domain/User/Session"
import { getUserData } from "../domain/Authentication/Login"

export default function AppRouter() {

  const [currentUser, setCurrentUser] = useState("");
  const { store, dispatch } = useContext(StoreContext);

  useEffect(() => {

    const user = getSessionUser();
    if (!user) return;

    getUserData(user, dispatch);
    setCurrentUser(user);
    
  }, []) 


    return (
      <Router>
        <Switch>
          {
          store.userID ? (
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
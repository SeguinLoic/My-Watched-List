import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StoreContext } from "../store/Store";

import ForgotPassword from "../ui/pages/ForgotPassword/ForgotPassword";
import Login from "../ui/pages/Login/Login";
import Signin from "../ui/pages/Signin/Signin";
import Home from "../ui/pages/Home/Home"
import Profile from "../ui/pages/Profile/Profile"
import SeriePage from "../ui/pages/Movie/SeriePage";

import { getSessionUser } from "../domain/Session/Session"
import { getUserData } from "../domain/Authentication/Login"

export default function AppRouter() {

  const { store, dispatch } = useContext(StoreContext);

  useEffect(() => {

    const user = getSessionUser();

    if (!user && window.location.pathname !== "/Login") return window.location = "/Login"; 
    if (!user) return; 

    getUserData(user, dispatch);
    
  }, []) 


    return (
      <Router>
        <Switch>
          {
          store.user.id ? (
            <>
              <Route exact path="/Home" component={Home} />
              <Route exact path="/Profile" component={Profile} />
              <Route path="/serie/:name" component={SeriePage} />
            </>
          ) : (
            <>
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
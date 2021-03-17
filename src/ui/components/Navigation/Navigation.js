import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Navigation.scss";

export default function AppNavigation() {

    const location = useLocation();
    const [currentLocation, setCurrentLocation] = useState("");

    useEffect(() => {
        setCurrentLocation(location.pathname);
    }, [location.pathname])

    return (
        <div className="navigation">
            <Link to="/Home" className={ currentLocation === "/Home" ? "connected active" : "connected"}>Home</Link>
            <Link to="/Profile" className={ currentLocation === "/Profile" ? "connected active" : "connected"}>Profile</Link>
            <Link to="/Login" className={currentLocation === "/Login" ? "connexion hide" : "connexion"}>Déjà membre ?</Link>
            <Link to="/Signin" className={currentLocation === "/Signin" ? "connexion hide" : "connexion"}>Pas inscrit ?</Link>
            <Link to="/ForgotPassword" className={currentLocation === "/ForgotPassword" ? "connexion hide" : "connexion"}>Mot de passe oublié ?</Link>
        </div>
    )
}
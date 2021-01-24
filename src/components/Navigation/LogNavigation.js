import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./LogNavigation.css";

export default function LogNavigation() {

    const location = useLocation();
    const [currentLocation, setCurrentLocation] = useState("");

    useEffect(() => {
        console.log(location.pathname);
        setCurrentLocation(location.pathname);
    }, [location.pathname])

    return (
        <div className="logNavigation">
                <Link to="/Login" className={currentLocation === "/Login" ? "hide" : ""}>Déjà membre ?</Link>
                <Link to="/Signin" className={currentLocation === "/Signin" ? "hide" : ""}>Pas inscrit ?</Link>
                <Link to="/ForgotPassword" className={currentLocation === "/ForgotPassword" ? "hide" : ""}>Mot de passe oublié ?</Link>
        </div>
    )
}
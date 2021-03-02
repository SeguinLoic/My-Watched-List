import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Logout from "../Logout/Logout"

export default function AppNavigation() {

    const location = useLocation();
    const  [currentLocation, setCurrentLocation] = useState("");

    useEffect(() => {
        setCurrentLocation(location.pathname);
    }, [location.pathname])

    return (
        <div className="appNavigation">
            <Link to="/Home" className={ currentLocation === "/Home" ? "active" : ""}>Home</Link>
            <Link to="/Profile" className={ currentLocation === "/Profile" ? "active" : ""}>Profile</Link>
            <Logout />
        </div>
    )
}

// <Link to="/Account" className={ currentLocation === "/Account" ? "active" : ""}>Account</Link>
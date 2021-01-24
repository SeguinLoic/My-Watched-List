import React from "react";
import { Link } from "react-router-dom";

import Logout from "../Authentication/Logout"

export default function AppNavigation() {

    return (
        <div className="appNavigation">
            <Link to="/Home">Home</Link>
            <Link to="/Profile">Profile</Link>
            <Logout />
        </div>
    )
}
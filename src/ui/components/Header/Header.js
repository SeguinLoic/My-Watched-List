import React, { useContext } from "react";
import AppNavigation from "../Navigation/AppNavigation";

import { AuthContext } from "../Authentication/Auth";

import "./Header.css";

export default function Header() {

    const { userData } = useContext(AuthContext);

    return (
        <header className="header">
            <h1>Hello { userData.firstName }</h1>
            <AppNavigation />
        </header>
    )
}
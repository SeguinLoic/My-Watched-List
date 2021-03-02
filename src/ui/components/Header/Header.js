import React, { useContext } from "react";
import AppNavigation from "../AppNavigation/AppNavigation";

import { StoreContext } from "../../../store/Store";

import "./Header.css";

export default function Header() {

    const { store } = useContext(StoreContext);

    return (
        <header className="header">
            <h1>Hello { store.userID }</h1>
            <AppNavigation />
        </header>
    )
}
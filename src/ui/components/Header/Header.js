import React, { useContext } from "react";
import AppNavigation from "../AppNavigation/AppNavigation";
import SearchBar from "../SearchBar/SearchBar"

import { StoreContext } from "../../../store/Store";

import "./Header.css";

export default function Header() {

    const { store } = useContext(StoreContext);

    return (
        <header className="header">
            <div className="headerNavigation">
                <h1>Hello { store.user.name }</h1>
                <AppNavigation />
            </div>
            <SearchBar />
        </header>
    )
}
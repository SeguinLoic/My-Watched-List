import React, { useContext } from "react";
import AppNavigation from "../AppNavigation/AppNavigation";
import SearchBar from "../SearchBar/SearchBar"
import Logout from "../Logout/Logout"

import { StoreContext } from "../../../store/Store";

import "./Header.css";

export default function Header() {

    const { store } = useContext(StoreContext);

    return (
        <header className="header">
            <div className="introBloc">
                <h1>My Watched List</h1>
                <AppNavigation />
            </div>
            <div className="searchBloc">
                <SearchBar />
            </div>
            <div className="userBloc">
                <span>Hello { store.user.name }</span> 
                <Logout />
            </div>
        </header>
    )
}
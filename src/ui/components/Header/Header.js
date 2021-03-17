import React, { useContext } from "react";
import Navigation from "../Navigation/Navigation";
import SearchBar from "../SearchBar/SearchBar"
import Logout from "../Logout/Logout"

import { StoreContext } from "../../../store/Store";

import "./Header.scss";

export default function Header() {

    const { store } = useContext(StoreContext);

    return (
        <header className="header">
            <div className="col navigation">
                <h1>My Watched List</h1>
                <Navigation />
            </div>
            <div className="col search">
                <SearchBar />
            </div>
            <div className="col user">
                <span>Hello { store.user.name }</span> 
                <Logout />
            </div>
        </header>
    )
}
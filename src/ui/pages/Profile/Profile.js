import React, { useContext } from "react";

import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import List from "../../components/List/List"

import { StoreContext } from "../../../store/Store"

import "./Profile.css";

export default function Profile() {

    const { store } = useContext(StoreContext);

    return (
        <div>

            <Header />
            <SearchBar />

            <h2>Séries en cours</h2>
            <List list={store.currentList} name='currentList' />

            <h2>Séries regardées</h2>
            <List list={store.watchedList} name='watchedList' />

        </div>
    )
}
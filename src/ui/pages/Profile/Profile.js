import React, { useContext } from "react";

import Header from "../../components/Header/Header";
import List from "../../components/List/List"

import { StoreContext } from "../../../store/Store"

import "./Profile.css";

export default function Profile() {

    const { store } = useContext(StoreContext);

    return (
        <div className="page profile">

            <Header />

            <h2>Séries en cours</h2>
            <List list={store.currentList} name='currentList' />

            <h2>Séries regardées</h2>
            <List list={store.watchedList} name='watchedList' />

        </div>
    )
}
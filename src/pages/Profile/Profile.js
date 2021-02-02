import React, { useContext } from "react";
import { AuthContext } from "../../components/Authentication/Auth";

import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import List from "../../components/List/List"

import "./Profile.css";

export default function Profile() {

    const {currentSeries, watchedSeries} = useContext(AuthContext);

    return (
        <div>

            <Header />
            <SearchBar />

            <h2>Séries en cours</h2>
            <List list={currentSeries} />

            <h2>Séries regardées</h2>
            <List list={watchedSeries} />

            <h2>Mes stats</h2>

        </div>
    )
}
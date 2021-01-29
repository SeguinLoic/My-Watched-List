import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../components/Authentication/Auth";

import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Tiles from "../../components/Tiles/Tiles";

import "./Profile.css";

export default function Profile() {

    const { userData } = useContext(AuthContext);
    const [currentSeries, setCurrentSeries] = useState([]);
    const [watchedSeries, setWatchedSeries] = useState([]);

    useEffect(() => {
        setCurrentSeries(userData.lists.currentSeries);
        setWatchedSeries(userData.lists.watchedSeries);
        console.log('coucou');
    }, [userData.lists.currentSeries, userData.lists.watchedSeries])

    return (
        <div>

            <Header />
            <SearchBar />

            <h2>Séries en cours</h2>
            <div className="currentSeries">
                { currentSeries ? (currentSeries.map(serie => <Tiles serie={serie} />)) : "" }
            </div>

            <h2>Séries regardées</h2>
            <div className="watchedSeries">
                { watchedSeries ? (watchedSeries.map(serie => <Tiles serie={serie} />)) : "" }
            </div>

            <h2>Mes stats</h2>

        </div>
    )
}
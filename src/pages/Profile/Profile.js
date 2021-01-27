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
        console.log(currentSeries.length);
    }, [userData.lists])

    return (
        <div>

            <Header />
            <SearchBar />

            <h2>Séries en cours</h2>
            <div className="result">
                { currentSeries ? (currentSeries.map(mediaInfo => <Tiles mediaInfo={mediaInfo} addInWatched />)) : "" }
            </div>

            <h2>Séries regardées</h2>

            <h2>Mes stats</h2>

        </div>
    )
}
import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../components/Authentication/Auth";

import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar"

import "./Profile.css";

export default function Profile() {

    const { userData } = useContext(AuthContext);
    const [currentSeries, setCurrentSeries] = useState([]);
    const [watchedSeries, setWatchedSeries] = useState([]);

    useEffect(() => {
        setCurrentSeries(userData.lists.currentSeries);
    }, [userData.lists])

    return (
        <div>

            <Header />
            <SearchBar />

            <h2>Séries en cours</h2>
            <div className="currentSeries">
                {
                    currentSeries.map(serie => {
                        return (
                            <div className="serie">
                                <img src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} alt="hey"/>
                                <span className="name">{serie.name}</span>
                                <button>Treminée</button>
                            </div>
                        )
                    })
                }
            </div>

            <h2>Séries regardées</h2>

            <h2>Mes stats</h2>

        </div>
    )
}
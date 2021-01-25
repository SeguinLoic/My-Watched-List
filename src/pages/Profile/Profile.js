import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../components/Authentication/Auth";

import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar"

import dame from "../../assets/dame.jpg"
import mandalorian from "../../assets/mandalorian.jpg"
import umbrella from "../../assets/umbrella.jpg"

export default function Profile() {

    const { userData } = useContext(AuthContext);
    const [myList, setMyList] = useState([]);

    useEffect(() => {
        setMyList(userData.lists.watched);
    }, [])

    return (
        <div>

            <Header />
            <SearchBar />

            <h2>Séries en cours</h2>
            <div className="monTop">
                <>
                    <img src={dame} alt="dame"/>
                    <img src={mandalorian} alt="mandalorian"/>
                    <img src={umbrella} alt="umbrella"/>
                </>
            </div>

            <h2>Séries regardées</h2>

            <h2>Mes stats</h2>

        </div>
    )
}
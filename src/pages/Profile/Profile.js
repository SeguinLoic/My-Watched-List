import React, { useState } from "react";

import Header from "../../components/Header/Header";

import dame from "../../assets/dame.jpg"
import mandalorian from "../../assets/mandalorian.jpg"
import umbrella from "../../assets/umbrella.jpg"

export default function Profile() {

    const [myList, setMyList] = useState([]);

    return (
        <div>

            <Header />

            <h2>Mon top</h2>
            <div className="monTop">
                {
                    myList.length 
                    ? myList.map(serie => <div><img src={`https://image.tmdb.org/t/p/w500${serie.res.poster_path}`} alt="hey" /><span>{serie.res.original_name}</span></div>)
                    : (
                    <>
                        <img src={dame} alt="dame"/>
                        <img src={mandalorian} alt="mandalorian"/>
                        <img src={umbrella} alt="umbrella"/>
                    </>
                    )
                }
            </div>
        </div>
    )
}
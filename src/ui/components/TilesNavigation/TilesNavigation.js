import React from "react";

import CurrentBtn from "./Current/CurrentBtn"
import WatchedBtn from "./Watched/WatchedBtn"

import "./TilesNavigation.css";

export default function TilesNavigation({ serie }) {

    return (
        <div className="tilesNavigation">
            <CurrentBtn movie={serie} />
            <WatchedBtn movie={serie} />
        </div>
    )
}

/*
    <div className="tilesNavigation">
        <span className={ idCurrent.length > 0 && location.pathname === "/Home" && idWatched.length === 0 ? "active" : "hide" }>Déjà en train de regarder Mamen !</span>
        <span className={ idWatched.length > 0  && location.pathname === "/Home"  ? "active" : "hide" }>Déjà tout vu BG !</span>
        <button onClick={addToCurrentList} className={ idCurrent.length > 0 ? "hide" : idWatched.length > 0 ? "hide" : "" } >En cours de visionnage</button>
        <button onClick={addToWatchedList} className={ idWatched.length > 0 ? "hide" : "" }>Vu en entier</button>
    </div>
*/
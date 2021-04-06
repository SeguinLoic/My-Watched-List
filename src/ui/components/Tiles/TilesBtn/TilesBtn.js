import React from "react";

import CurrentBtn from "./Current/CurrentBtn"
import WatchedBtn from "./Watched/WatchedBtn"

import "./TilesBtn.scss";

export default function TilesBtn({ movie }) {

    return (
        <div className="tilesBtn">
            <CurrentBtn movie={movie} />
            <WatchedBtn movie={movie} />
        </div>
    )
}
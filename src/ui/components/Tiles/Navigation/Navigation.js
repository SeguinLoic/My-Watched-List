import React from "react";

import CurrentBtn from "./Current/CurrentBtn"
import WatchedBtn from "./Watched/WatchedBtn"

import "./Navigation.css";

export default function Navigation({ movie }) {

    return (
        <div className="navigation">
            <CurrentBtn movie={movie} />
            <WatchedBtn movie={movie} />
        </div>
    )
}
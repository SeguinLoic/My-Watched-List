import React from "react";

import CurrentBtn from "./Current/CurrentBtn"
import WatchedBtn from "./Watched/WatchedBtn"

import "./Navigation.css";

export default function Navigation({ serie }) {

    return (
        <div className="navigation">
            <CurrentBtn movie={serie} />
            <WatchedBtn movie={serie} />
        </div>
    )
}
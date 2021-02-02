import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect, Link, NavLink } from "react-router-dom";

import TilesNavigation from "./TilesNavigation/TilesNavigation";

export default function Tile({ serie }) {

    return (
        <div className="tile">
            <Link to="/SeriePage">
                <img src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} alt="hey"/>
                <span className="name">{serie.original_name}</span>
            </Link>
            <TilesNavigation serie={serie} />
        </div>
    )
}
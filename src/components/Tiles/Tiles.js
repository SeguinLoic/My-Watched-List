import React from "react";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";

import TilesNavigation from "./TilesNavigation/TilesNavigation";

export default function Tile({ serie }) {

    const name = serie.original_name.toLowerCase().split(" ").join("-");
    const location = useLocation();
    const lastLocation = location.pathname;

    return (
        <div className="tile">
            <Link to={{ pathname: `/serie/${name}`, state: { serie: serie, location: lastLocation} }}>
                <img src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} alt="hey"/>
                <span className="name">{serie.original_name}</span>
            </Link>
            <TilesNavigation serie={serie} />
        </div>
    )
}
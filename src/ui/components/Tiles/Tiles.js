import React from "react";
import { Link, useLocation } from "react-router-dom";

import Navigation from "./Navigation/Navigation";

import "./Tiles.scss";

export default function Tile({ serie }) {

    const location = useLocation();
    const lastLocation = location.pathname;

    return (
        <div className="tile">
            <Link to={{ pathname: `/serie/${serie.movieURL}`, state: { serie: serie, location: lastLocation} }}>
                <img src={`https://image.tmdb.org/t/p/w500${serie.presentationImage}`} alt="hey"/>
                <span className="filtre"></span>
                <span className="name">{serie.movieName}</span>
            </Link>
            <Navigation movie={serie} />
        </div>
    )
}
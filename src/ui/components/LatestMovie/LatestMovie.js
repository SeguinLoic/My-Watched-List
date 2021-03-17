import React from "react";
import Navigation from "../Tiles/Navigation/Navigation";
import { Link, useLocation } from "react-router-dom";

import "./LatestMovie.scss";

export default function LatestMovie({ movie }) {

    const location = useLocation();
    const lastLocation = location.pathname;

    return (
        <div className="latestMovie">
            <Link to={{ pathname: `/serie/${movie.movieURL}`, state: { serie: movie, location: lastLocation} }}>
                <span className="filtre"></span>
                <img src={`https://image.tmdb.org/t/p/original${movie.backgroundImage}`} alt={movie.movieName}/>
                <div className="content">
                    <h2>{movie.movieName}</h2>
                    <span className="rate">{movie.movieRate} / 10</span>
                    <Navigation movie={movie}/>
                </div>
            </Link>
        </div>
    )
}
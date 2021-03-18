import React from "react";
import { Link, useLocation } from "react-router-dom";

import arrow from "../../assets/arrow.svg"
import "./Movie.scss"

export default function SeriePage() {

    const location = useLocation();

    return (
        <div className="page">
            <div className="headerSerie">
                <Link className="btnReturn" to={`${location.state.location}`}><img src={arrow} alt="arrow"/></Link>
                <span className="background">
                    <img src={`https://image.tmdb.org/t/p/original${location.state.serie.backgroundImage}`} alt="background-serie"/>
                </span>
                <div className="presentation">
                    <img src={`https://image.tmdb.org/t/p/w500${location.state.serie.presentationImage}`} alt="affiche-serie"/>
                    <div className="nameAndRate">
                        <h1>{location.state.serie.movieName}</h1>
                        <span>{location.state.serie.movieRate} / 10</span>
                    </div>
                </div>
            </div>
            <div className="info">
                <span className="date">{location.state.serie.movieDate}</span>
                <span className="resume">{location.state.serie.movieOverview}</span>
            </div>
        </div>
    )
}
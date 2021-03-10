import React from "react";
import { Link, useLocation } from "react-router-dom";

import arrow from "../../assets/arrow.svg"

import "./SeriePage.css"

export default function SeriePage() {

    const location = useLocation();

    return (
        <div className="page">
            <div className="headerSerie">
                <Link className="btnReturn" to={`${location.state.location}`}><img src={arrow} /></Link>
                <span className="background">
                    <img src={`https://image.tmdb.org/t/p/original${location.state.serie.backgroundImage}`} className="backgroundHeader"  alt="hey"/>
                </span>
                <div className="headerContent">
                    <img src={`https://image.tmdb.org/t/p/w500${location.state.serie.presentationImage}`} alt="hey"/>
                    <div className="infoHeader">
                        <h1>{location.state.serie.movieName}</h1>
                        <span>{location.state.serie.movieRate} / 10</span>
                    </div>
                </div>
            </div>
            <div className="contentSerie">
                <span className="date">{location.state.serie.movieDate}</span>
                <span className="resume">{location.state.serie.movieOverview}</span>
            </div>
        </div>
    )
}
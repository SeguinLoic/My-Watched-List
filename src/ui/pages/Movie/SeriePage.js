import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function SeriePage() {

    const location = useLocation();

    return (
        <div className="seriePage">
            <img src={`https://image.tmdb.org/t/p/w1280${location.state.serie.backgroundImage}`} alt="hey"/>
            <img src={`https://image.tmdb.org/t/p/w500${location.state.serie.presentationImage}`} alt="hey"/>
            <h1>{location.state.serie.movieName}</h1>
            <span>Date : {location.state.serie.movieDate}</span>
            <span>Résumé : {location.state.serie.movieOverview}</span>
            <span>Note : {location.state.serie.movieRate}</span>
            <Link to={`${location.state.location}`}>Retour</Link>
        </div>
    )
}
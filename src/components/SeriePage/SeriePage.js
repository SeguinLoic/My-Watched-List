import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function SeriePage() {

    const location = useLocation();

    return (
        <div className="seriePage">
            <img src={`https://image.tmdb.org/t/p/w1280${location.state.serie.backdrop_path}`} alt="hey"/>
            <img src={`https://image.tmdb.org/t/p/w500${location.state.serie.poster_path}`} alt="hey"/>
            <h1>{location.state.serie.original_name}</h1>
            <span>Date : {location.state.serie.first_air_date}</span>
            <span>Résumé : {location.state.serie.overview}</span>
            <span>Note : {location.state.serie.vote_average}</span>
            <Link to={`${location.state.location}`}>Retour</Link>
        </div>
    )
}
import React from "react";

import TilesNavigation from "./TilesNavigation/TilesNavigation"

export default function Tile({ serie }) {

    return (
        <div className="tile">
            <img src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} alt="hey"/>
            <span className="name">{serie.original_name}</span>
            <TilesNavigation serie={serie} />
        </div>
    )
}
import React from "react";

export default function Tile({ mediaInfo, inLists }) {

    return (
        <div className="tile">
            <img src={`https://image.tmdb.org/t/p/w500${mediaInfo.poster_path}`} alt="hey"/>
            <span className="name">{mediaInfo.original_name}</span>
            {
                !inLists
                ? <button>Ajouter à ma liste</button>
                : ""
            }
        </div>
    )
}
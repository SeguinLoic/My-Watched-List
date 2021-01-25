import React, { useContext } from "react";

import { AuthContext } from "../Authentication/Auth";

export default function Tile({ mediaInfo, addList }) {

    const { userData } = useContext(AuthContext);

    return (
        <div className="tile">
            <img src={`https://image.tmdb.org/t/p/w500${mediaInfo.poster_path}`} alt="hey"/>
            <span className="name">{mediaInfo.original_name}</span>
            {
                addList 
                ? <button>Ajouter à ma liste</button>
                : ""
            }
        </div>
    )
}
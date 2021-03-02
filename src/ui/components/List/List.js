import React from "react";
import Tiles from "../Tiles/Tiles"

import "./List.css";

export default function List({list}) {
    return (
        <div className="list">
            {
                list.map(serie => <Tiles serie={serie} key={serie.movieID} />)
            }
        </div>
    )
}
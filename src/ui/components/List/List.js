import React from "react";
import Tiles from "../Tiles/Tiles"

import "./List.css";

export default function List({list, name}) {
    return (
        <div className={`list ${name ? name : ""}`}>
            {
                list.map(serie => <Tiles serie={serie} key={serie.movieID} />)
            }
        </div>
    )
}
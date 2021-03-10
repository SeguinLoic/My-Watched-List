import React from "react";
import Carousel from 'react-elastic-carousel';

import Tiles from "../Tiles/Tiles"

import "./List.css";

export default function List({list, name}) {
    return (
        <div className={`list ${name ? name : ""}`}>
            <Carousel itemsToShow={9}>
                {list.map(serie => <Tiles serie={serie} key={serie.movieID} />)}
            </Carousel>
        </div>
    )
}
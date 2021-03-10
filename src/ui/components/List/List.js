import React from "react";
import Carousel from 'react-elastic-carousel';

import Tiles from "../Tiles/Tiles"

import "./List.css";

export default function List({list, name}) {
    return (
        <div className={`list ${name ? name : ""}`}>
            {
            (list.length < 8) ? 
            <div className="noCarousel">
                {list.map(serie => <Tiles serie={serie} key={serie.movieID} />)}
            </div>
            :
            <Carousel itemsToShow={7}>
                {list.map(serie => <Tiles serie={serie} key={serie.movieID} />)}
            </Carousel>
            }

        </div>
    )
}
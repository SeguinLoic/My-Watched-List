import React, { useContext } from "react";
import { StoreContext } from "../../../../store/Store"

import { isMovieInCurrentList } from "../../../../domain/Utils/isMovieInLists"
import { isMovieInWatchedList } from "../../../../domain/Utils/isMovieInLists"

import "./Status.css";

export default function Status({ movie }) {

    const { store } = useContext(StoreContext);

    return (
        <div className="status">
            <span className={isMovieInCurrentList(store, movie)}>En cours de visionnage</span>
            <span className={isMovieInWatchedList(store, movie)}>Série terminée</span>
        </div>
    )
}
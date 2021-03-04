import React, { useContext } from "react"
import { StoreContext } from "../../../../../store/Store"

import { updateCurrentList } from "../../../../../domain/Movies/UserLists/CurrentList"
import { isMovieInCurrentAndWatchedList } from "../../../../../domain/Utils/isMovieInLists"

export default function CurrentBtn({ movie }) {

    const { store, dispatch } = useContext(StoreContext);

    const addToCurrentList = async (e) => {
        e.preventDefault();
        updateCurrentList(movie, store, dispatch); 
    } 

    return <button onClick={addToCurrentList} className={ isMovieInCurrentAndWatchedList(store, movie) }>En cours</button>
}
import React, { useContext } from "react"
import { StoreContext } from "../../../../../store/Store"

import { updateWatchedList } from "../../../../../domain/Movies/UserLists/WatchedList"
import { isMovieInWatchedList } from "../../../../../domain/Utils/isMovieInLists"

import checkLogo from "../../../../assets/check.svg"

export default function WatchedBtn({ movie }) {

    const { store, dispatch } = useContext(StoreContext);

    const addToWatchedList = async (e) => {
        e.preventDefault();
        updateWatchedList(movie, store, dispatch); 
    } 

    return (
        <div onClick={addToWatchedList} className={ "button watched " + isMovieInWatchedList(store, movie) }>
            <img src={checkLogo} alt="check" />
            <span>Terminé</span>
        </div>
    )
}

/*
<button onClick={addToWatchedList} className={ isMovieInWatchedList(store, movie) }>Terminé</button>
*/
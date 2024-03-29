import React, { useContext } from "react"
import { StoreContext } from "../../../../../store/Store"

import { updateCurrentList } from "../../../../../domain/Movies/UserLists/CurrentList"
import { isMovieInCurrentList, isMovieInWatchedList } from "../../../../../domain/Utils/isMovieInLists"

import computerLogo from "../../../../assets/computer.svg"

export default function CurrentBtn({ movie }) {

    const { store, dispatch } = useContext(StoreContext);

    const addToCurrentList = async (e) => {
        e.preventDefault();
        updateCurrentList(movie, store, dispatch); 
    } 

    return (
        <div onClick={addToCurrentList} className={ "button current " + isMovieInCurrentList(store, movie) + isMovieInWatchedList(store, movie) }>
            <img src={computerLogo} alt="computeur" />
            <span>En cours</span>
        </div>
    )
}

/*

<button onClick={addToCurrentList} className={ isMovieInCurrentAndWatchedList(store, movie) }>En cours</button>

*/
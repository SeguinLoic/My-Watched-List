import React, { useContext } from "react"
import { StoreContext } from "../../../../store/Store"
import { updateCurrentList } from "../../../../domain/Movies/UserLists/CurrentList"

export default function CurrentBtn({ movie }) {

    const { store, dispatch } = useContext(StoreContext);
    const indexMovieCurrent = store.currentList.indexOf(movie);
    const indexMovieWatched = store.watchedList.indexOf(movie);

    const addToCurrentList = async (e) => {
        e.preventDefault();
        updateCurrentList(movie, store, dispatch); 
    } 

    return <button onClick={addToCurrentList} className={ indexMovieCurrent > -1 ? "hide" : indexMovieWatched > -1 ? "hide" : ""}>En cours</button>
}
import React, { useContext } from "react"
import { StoreContext } from "../../../../store/Store"
import { updateWatchedList } from "../../../../domain/Movies/UserLists/WatchedList"

export default function WatchedBtn({ movie }) {

    const { store, dispatch } = useContext(StoreContext);
    console.log(store);
    console.log(movie);
    const indexMovieWatched = store.watchedList.indexOf(movie);
    console.log(indexMovieWatched);

    const addToWatchedList = async (e) => {
        e.preventDefault();
        updateWatchedList(movie, store, dispatch); 
    } 

    return <button onClick={addToWatchedList} className={ indexMovieWatched > -1 ? "hide" : ""}>Terminé</button>
}
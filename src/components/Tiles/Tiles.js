import React, { useContext } from "react";
import { db } from "../Firebase/firebase";
import { AuthContext } from "../Authentication/Auth";


export default function Tile({ serie, addInCurrent, addInWatched }) {

    const { userData, currentUser, setUserData } = useContext(AuthContext);

    const addToCurrentList = async (e) => {
        e.preventDefault();

        const currentList = userData.lists.currentSeries;
        currentList.push(serie);

        setUserData({...userData, "lists.currentSeries": currentList});
        
        const userLists = await db.collection("users").doc(currentUser.uid);
        return userLists.update({
            "lists.currentSeries": userData.lists.currentSeries
        })
    }

    const addToWatchedList = async (e) => {
        e.preventDefault();

        const currentList = userData.lists.currentSeries;
        const indexCurrentSerie = currentList.indexOf(serie);

        if (indexCurrentSerie !== -1) {
            currentList.splice(indexCurrentSerie, 1);
            setUserData({...userData, "lists.currentSeries": currentList});
        }

        const watchedList = userData.lists.watchedSeries;
        watchedList.push(serie);

        setUserData({...userData, "lists.watchedSeries": watchedList});

        const userLists = await db.collection("users").doc(currentUser.uid);
        return userLists.update({
            "lists.currentSeries": userData.lists.currentSeries,
            "lists.watchedSeries": userData.lists.watchedSeries
        })
    }

    return (
        <div className="tile">
            <img src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`} alt="hey"/>
            <span className="name">{serie.original_name}</span>
            { addInCurrent ? <button onClick={(e) => addToCurrentList(e)}>En cours de visionnage</button> : "" }
            { addInWatched ? <button onClick={(e) => addToWatchedList(e)}>Série vue en entier</button> : "" }
        </div>
    )
}
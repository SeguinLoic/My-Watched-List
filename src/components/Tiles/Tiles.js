import React, { useContext } from "react";
import { db } from "../Firebase/firebase";
import { AuthContext } from "../Authentication/Auth";


export default function Tile({ mediaInfo, addInCurrent, addInWatched }) {

    const { userData, currentUser } = useContext(AuthContext);

    const addToCurrentList = async (e) => {
        e.preventDefault();
        userData.lists.currentSeries.push(mediaInfo);
        const userLists = await db.collection("users").doc(currentUser.uid);
        return userLists.update({
            "lists.currentSeries": userData.lists.currentSeries
        })
    }

    const addToWatchedList = async (e) => {
        e.preventDefault();
        const indexCurrentSerie = userData.lists.currentSeries.indexOf(mediaInfo);
        if (indexCurrentSerie !== -1) {
            userData.lists.currentSeries.splice(indexCurrentSerie, 1);
        }
        userData.lists.watchedSeries.push(mediaInfo);
        const userLists = await db.collection("users").doc(currentUser.uid);
        return userLists.update({
            "lists.currentSeries": userData.lists.currentSeries,
            "lists.watchedSeries": userData.lists.watchedSeries
        })
    }

    return (
        <div className="tile">
            <img src={`https://image.tmdb.org/t/p/w500${mediaInfo.poster_path}`} alt="hey"/>
            <span className="name">{mediaInfo.original_name}</span>
            { addInCurrent ? <button onClick={(e) => addToCurrentList(e)}>En cours de visionnage</button> : "" }
            { addInWatched ? <button onClick={(e) => addToWatchedList(e)}>Série vue en entier</button> : "" }
        </div>
    )
}
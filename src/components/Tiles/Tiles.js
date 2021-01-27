import React, { useContext } from "react";
import { db } from "../Firebase/firebase";
import { AuthContext } from "../Authentication/Auth";


export default function Tile({ mediaInfo, addInCurrent, addInWatched }) {

    const { userData, currentUser } = useContext(AuthContext);

    const addToList = async (e) => {
        e.preventDefault();
        userData.lists.currentSeries.push(mediaInfo);
        const userLists = await db.collection("users").doc(currentUser.uid);
        return userLists.update({
            "lists.currentSeries": userData.lists.currentSeries
        })
    }

    return (
        <div className="tile">
            <img src={`https://image.tmdb.org/t/p/w500${mediaInfo.poster_path}`} alt="hey"/>
            <span className="name">{mediaInfo.original_name}</span>
            {
                !addInCurrent
                ? <button onClick={(e) => addToList(e)}>Ajouter à ma liste</button>
                : ""
            }
        </div>
    )
}
import React, { useContext } from "react";
import firebase from "firebase/app";
import { db } from "../Firebase/firebase";
import { AuthContext } from "../Authentication/Auth";


export default function Tile({ mediaInfo, inLists }) {

    const { userData, currentUser } = useContext(AuthContext);

    const addToList = async (e) => {
        e.preventDefault();
        const userLists = db.collection("users").doc(currentUser.uid);
        return userLists.update({
            "lists.currentSeries": mediaInfo
        })
    }

    return (
        <div className="tile">
            <img src={`https://image.tmdb.org/t/p/w500${mediaInfo.poster_path}`} alt="hey"/>
            <span className="name">{mediaInfo.original_name}</span>
            {
                !inLists
                ? <button onClick={(e) => addToList(e)}>Ajouter à ma liste</button>
                : ""
            }
        </div>
    )
}
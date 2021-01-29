import React, { useContext, useEffect } from "react";
import { db } from "../../Firebase/firebase";
import { AuthContext } from "../../Authentication/Auth";

export default function TilesNavigation({ serie }) {

    const { userData, currentUser, setUserData } = useContext(AuthContext);

    useEffect(() => {
        console.log("change");
    }, [userData.lists])

    const addToCurrentList = async (e) => {
        e.preventDefault();

        const userLists = await db.collection("users").doc(currentUser.uid);
        const userDataLists = userData.lists;
        userDataLists.currentSeries.push(serie);

        setUserData({...userData, lists: userDataLists});

        return userLists.update({
            "lists.currentSeries": userData.lists.currentSeries
        })
    }

    const addToWatchedList = async (e) => {
        e.preventDefault();

        const userLists = await db.collection("users").doc(currentUser.uid);
        const userDataLists = userData.lists;
        const indexCurrentSerie = userDataLists.currentSeries.indexOf(serie);

        if (indexCurrentSerie !== -1) {
            userDataLists.currentSeries.splice(indexCurrentSerie, 1);
        }

        userDataLists.watchedSeries.push(serie);
        setUserData({...userData, lists: userDataLists});

        return userLists.update({
            "lists.currentSeries": userData.lists.currentSeries,
            "lists.watchedSeries": userData.lists.watchedSeries
        })
    }

    return (
        <div className="tilesNavigation">
            <button onClick={(e) => addToCurrentList(e)}>En cours de visionnage</button>
            <button onClick={(e) => addToWatchedList(e)}>Série vue en entier</button>
        </div>
    )
}

/*

{ addInCurrent ? <button onClick={(e) => addToCurrentList(e)}>En cours de visionnage</button> : "" }
{ addInWatched ? <button onClick={(e) => addToWatchedList(e)}>Série vue en entier</button> : "" }

*/
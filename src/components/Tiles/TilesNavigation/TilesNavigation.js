import React, { useContext, useEffect } from "react";
import { db } from "../../Firebase/firebase";
import { AuthContext } from "../../Authentication/Auth";

export default function TilesNavigation({ serie }) {

    const { currentSeries, setCurrentSeries } = useContext(AuthContext);
    const { watchedSeries, setWatchedSeries } = useContext(AuthContext);

    const indexCurrent = currentSeries.indexOf(serie);
    const indexWatched = watchedSeries.indexOf(serie);

    const addToCurrentList = (e) => {
        e.preventDefault();
        setCurrentSeries([...currentSeries, serie]);

        console.log(indexCurrent);

    } 

    const addToWatchedList = (e) => {
        e.preventDefault();
        const current = currentSeries;
        const indexCurrent = current.indexOf(serie);
        if (indexCurrent !== -1) {
            current.splice(indexCurrent, 1);
            setCurrentSeries(current);
        }
        setWatchedSeries([...watchedSeries, serie]);
    } 

    /*const addToCurrentList = async (e) => {
        const dbUserLists = await db.collection("users").doc(currentUser.uid);
        return dbUserLists.update({
            "lists.currentSeries": userLists.currentSeries
        })
    }*/

    /* const addToWatchedList = async (e) => {
        const dbUserLists = await db.collection("users").doc(currentUser.uid);
        const userDataLists = userData.lists;
        const lists = userLists;
        const indexCurrentSerie = userDataLists.currentSeries.indexOf(serie);
        const indexCurrentSerie = lists.currentSeries.indexOf(serie);

        if (indexCurrentSerie !== -1) {
            userDataLists.currentSeries.splice(indexCurrentSerie, 1);
            lists.currentSeries.splice(indexCurrentSerie, 1);
        }

        userDataLists.watchedSeries.push(serie);
        lists.watchedSeries.push(serie);
        setUserData({...userData, lists: userDataLists});
        setUserLists(lists);

        return dbUserLists.update({
            "lists.currentSeries": userLists.currentSeries,
            "lists.watchedSeries": userLists.watchedSeries
        })
    }*/

    return (
        <div className="tilesNavigation">
            <button onClick={addToCurrentList}>En cours de visionnage</button>
            <button onClick={addToWatchedList}>Vu en entier</button>
        </div>
    )
}
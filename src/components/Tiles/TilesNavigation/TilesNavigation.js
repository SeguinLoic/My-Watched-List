import React, { useContext } from "react";
import { db } from "../../Firebase/firebase";
import { AuthContext } from "../../Authentication/Auth";

import "./TilesNavigation.css";

export default function TilesNavigation({ serie }) {

    const { currentSeries, setCurrentSeries } = useContext(AuthContext);
    const { watchedSeries, setWatchedSeries } = useContext(AuthContext);

    const indexCurrent = currentSeries.indexOf(serie);
    const indexWatched = watchedSeries.indexOf(serie);

    const addToCurrentList = (e) => {
        e.preventDefault();
        setCurrentSeries([...currentSeries, serie]);
    } 

    const addToWatchedList = (e) => {
        e.preventDefault();
        const current = currentSeries;
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
            <button onClick={addToCurrentList} className={ indexCurrent !== -1 ? "hide" : "" } >En cours de visionnage</button>
            <button onClick={addToWatchedList} className={ indexWatched !== -1 ? "hide" : "" }>Vu en entier</button>
        </div>
    )
}
import React, { useContext, useEffect } from "react";
import { db } from "../../Firebase/firebase";
import { AuthContext } from "../../Authentication/Auth";

export default function TilesNavigation({ serie }) {

    const { currentSeries, setCurrentSeries } = useContext(AuthContext);
    const { watchedSeries, setWatchedSeries } = useContext(AuthContext);

    const addToCurrentList = (e) => {
        e.preventDefault();
        setCurrentSeries([...currentSeries, serie]);
    } 

    const addToWatchedList = (e) => {
        e.preventDefault();
        setWatchedSeries([...watchedSeries, serie]);
    } 

    /*const addToCurrentList = async (e) => {
        e.preventDefault();

        const dbUserLists = await db.collection("users").doc(currentUser.uid);

        const newUserLists = userLists;
        newUserLists.currentSeries.push(serie);

        setUserLists(newUserLists);

        return dbUserLists.update({
            "lists.currentSeries": userLists.currentSeries
        })
    }*/

    /* const addToWatchedList = async (e) => {
        e.preventDefault();

        const dbUserLists = await db.collection("users").doc(currentUser.uid);
        const userDataLists = userData.lists;
        const lists = userLists;
        console.log(lists);
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

        return userLists.update({
            "lists.currentSeries": userData.lists.currentSeries,
            "lists.watchedSeries": userData.lists.watchedSeries
        })

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
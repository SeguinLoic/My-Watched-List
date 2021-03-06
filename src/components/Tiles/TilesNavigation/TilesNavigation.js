import React, { useContext } from "react";
import { db } from "../../Firebase/firebase";
import { AuthContext } from "../../Authentication/Auth";
import { useLocation } from "react-router-dom";

import "./TilesNavigation.css";

export default function TilesNavigation({ serie }) {

    const { currentSeries, setCurrentSeries, watchedSeries, setWatchedSeries, currentUser } = useContext(AuthContext);

    const indexCurrent = currentSeries.indexOf(serie);
    //const indexWatched = watchedSeries.indexOf(serie);
    const idCurrent = currentSeries.filter(elem => elem.id === serie.id);
    const idWatched = watchedSeries.filter(elem => elem.id === serie.id);

    const location = useLocation();
    const id = currentUser.uid;

    const addToCurrentList = async (e) => {
        e.preventDefault();
        const current = currentSeries;
        current.push(serie);
        setCurrentSeries([...current]);
        addToDB(current);
    } 

    const addToWatchedList = (e) => {
        e.preventDefault();
        const current = currentSeries;
        const watched = watchedSeries;
        watched.push(serie);
        if (idCurrent.length > 0) {
            current.splice(indexCurrent, 1);
            setCurrentSeries(current);
        }
        setWatchedSeries([...watched]);
        addToDB(current, watched)
    } 

    const addToDB = async (...lists) => {
        const current = lists[0];
        const watched = lists[1];
        const userLists = await db.collection("users").doc(id);
        
        if (current && watched) {
            return userLists.update({
                "lists.currentSeries": current,
                "lists.watchedSeries": watched
            })
        } else if (current) {      
            return userLists.update({
                "lists.currentSeries": current
            })
        } else if (watched) {
            return userLists.update({
                "lists.watchedSeries": watched
            })
        }
    }

    return (
        <div className="tilesNavigation">
            <span className={ idCurrent.length > 0 && location.pathname === "/Home" && idWatched.length === 0 ? "active" : "hide"}>Déjà en train de regarder Mamen !</span>
            <span className={ idWatched.length > 0  && location.pathname === "/Home"  ? "active" : "hide"}>Déjà tout vu BG !</span>
            <button onClick={addToCurrentList} className={ idCurrent.length > 0 ? "hide" : idWatched.length > 0 ? "hide" : "" } >En cours de visionnage</button>
            <button onClick={addToWatchedList} className={ idWatched.length > 0 ? "hide" : "" }>Vu en entier</button>
        </div>
    )
}
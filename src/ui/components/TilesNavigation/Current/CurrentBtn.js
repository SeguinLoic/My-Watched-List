import React, { useContext } from "react"
import { StoreContext } from "../../../../store/Store"

import { updateCurrentList } from "../../../../domain/Movies/UserLists/CurrentList"

export default function CurrentBtn({ movie }) {

    const { store, dispatch } = useContext(StoreContext);

    const addToCurrentList = async (e) => {
        e.preventDefault();
        updateCurrentList(movie, store, dispatch); 
        /*const current = currentSeries;
        current.push(serie);
        setCurrentSeries([...current]);
        addToDB(current);*/
    } 

    return <button onClick={addToCurrentList}>En cours</button>
}
import React, { useReducer, useEffect, useState } from "react";
import { auth } from "../infra/Firebase/firebase"
import { displayTrends, fetchInitial } from "../domain/Trends";
import { displayCurrentList, getCurrentList } from "../domain/CurrentMovies";

export const StoreContext = React.createContext();

const initialState = {
    trends: [],
    currentList: [],
    watchedList: []
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'initialTrends':
            return {...state, trends: action.data}
        case 'getCurrentList':
            return {...state, currentList: action.data}
        default: 
            return state
    }
}

export const StoreProvider = ({children}) => {

    const [userID, setUserID] = useState("");
    const [store, dispatch] = useReducer(reducer, initialState)

    
    const initialiseStore = async (id) => {
        const trends = await displayTrends();
        const currentList = await displayCurrentList(id);
        dispatch(fetchInitial(trends));
        dispatch(getCurrentList(currentList));
    }

    useEffect(() => {
        auth.onAuthStateChanged(user => {

            setUserID(user.uid)
            initialiseStore(user.uid);

            /*displayCurrentList(user.uid)
            .then(data => {
                dispatch(getCurrentList(data))
            })

            displayTrends()
            .then(data => {
                dispatch(fetchInitial(data))
            })*/

        })
    }, [])

    return (
        <StoreContext.Provider value={{store, dispatch, userID}}>
            {children}
        </StoreContext.Provider>
    )
};

/*
    <StoreContext.Provider value={{countState: count, countDispatch: dispatch}}>
        {children}
    </StoreContext.Provider>
*/

/*export const Store = {
    trends: [],
    watchedList: [],
    currentList: []
}

export const sendTrendsToStore = (data) => {
    data.map(movie => {
        Store.trends.push(movie);
    })
}*/

/*const [trends, setTrends] = useState([]);
const [watchedList, setWatchedList] = useState([]);
const [currentList, setCurrentList] = useState([]);*/
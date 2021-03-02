import React, { useReducer } from "react";

const initialState = {
    userID: "",
    trends: [],
    currentList: [],
    watchedList: []
}

export const StoreContext = React.createContext(initialState);

export const reducer = (state, action) => {
    switch(action.type) {
        case 'INITIALISE_STORE': 
            return action.data
        case 'CLEAR_STORE' : 
            return initialState
        case 'UPDATE_CURRENT_LIST_STORE' :
            return action.data
        default: 
            return state
    }
}

export const StoreProvider = ({children}) => {

    const [store, dispatch] = useReducer(reducer, initialState)

    return (
        <StoreContext.Provider value={{store, dispatch}}>
            {children}
        </StoreContext.Provider>
    )
};
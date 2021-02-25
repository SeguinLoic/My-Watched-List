import React, { useState, useEffect } from "react";
import { db } from "../../../infra/Firebase/firebase";
import { auth } from "../../../infra/Firebase/firebase";
import { getUserWatchedList } from "../../../infra/Movies/WatchedMovies"

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [userData, setUserData] = useState({});
    const [currentSeries, setCurrentSeries] = useState([]);
    const [watchedSeries, setWatchedSeries] = useState([]);
 
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user) {
                getUserData(user.uid);
                getUserWatchedList();
            }
            setCurrentUser(user);
        })
    }, [])

    const getUserData = async (id) => {
        await db.collection("users").doc(id).get()
        .then(function(doc) {
            if (doc.exists) {
                const data = doc.data();
                setUserData({ 
                    firstName: data.firstName, 
                    lastName: data.lastName, 
                    email: data.email
                })
                setCurrentSeries(data.lists.currentSeries);
                setWatchedSeries(data.lists.watchedSeries);
            } else {
                console.log("No such document!");
            }
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
    }

    return (
        <AuthContext.Provider 
            value={{ 
            currentUser, 
            userData, 
            currentSeries, 
            setCurrentSeries, 
            watchedSeries, 
            setWatchedSeries
        }}>
            {children}
        </AuthContext.Provider>
    )

};


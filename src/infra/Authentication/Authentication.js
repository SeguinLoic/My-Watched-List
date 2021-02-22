import { auth } from "../Firebase/firebase";
import { db } from "../Firebase/firebase";

export const userLogout = () => auth.signOut()

export const userLogin = async (email, password) => {
    try {
        await auth.signInWithEmailAndPassword(email, password); 
    } catch(error) {
        throw error;
    }
}

export const createUserAcount = async (user) => {
    try {
        const newUser = await auth.createUserWithEmailAndPassword(user.email, user.password);
        db.collection("users").doc(newUser.user.uid).set({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            lists: {currentSeries: [], watchedSeries: []}
        })
    } catch(error) {
        throw error;
    }
}

export const sendResetPassword = async (email) => {
    try {
        await auth.sendPasswordResetEmail(email);
    } catch(error) {
        throw error;
    }
}














/*

import React, { useState, useEffect } from "react";
import { db } from "../../../infra/Firebase/firebase";
import { auth } from "../../../infra/Firebase/firebase";
//import { getTrends } from "../../infra/Movies/Trends"
import { getUserWatchedList } from "../../../infra/Movies/WatchedMovies"
//import { dispatchTrends, trends } from "../../store/Movies"
//import { mapTrends } from "../../domain/Movies/Trends";
//import { trends } from "../../store/Store";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [userData, setUserData] = useState({});
    const [currentSeries, setCurrentSeries] = useState([]);
    const [watchedSeries, setWatchedSeries] = useState([]);
    const [topTrends, setTopTrends] = useState([]);
 
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user) {
                getUserData(user.uid);
                getUserWatchedList();
                //mapTrends();
                //console.log(trends)
                //dispatchTrends();
                //const data = getTrends();
                //console.log(data.results);
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
            setWatchedSeries, 
            topTrends
        }}>
            {children}
        </AuthContext.Provider>
    )

};

*/
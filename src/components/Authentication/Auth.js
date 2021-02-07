import React, { useState, useEffect } from "react";
import { db } from "../../infra/Firebase/firebase";
import { auth } from "../../infra/Firebase/firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [userData, setUserData] = useState({});
    const [currentSeries, setCurrentSeries] = useState([]);
    const [watchedSeries, setWatchedSeries] = useState([]);
    const [topTrends, setTopTrends] = useState([]);

    const API_KEY = process.env.REACT_APP_API_KEY;
 
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user) {
                getUserData(user.uid);
                getTrends();
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
                    email: data.email, 
                    stats: data.stats
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

    const getTrends = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`);
            const myJSON = await response.json();
            setTopTrends(myJSON.results);
        } catch(error) {
            console.log(error);
        }
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


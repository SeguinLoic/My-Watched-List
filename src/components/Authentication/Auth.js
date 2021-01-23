import React, { useState, useEffect } from "react";
import { db } from "../Firebase/firebase";
import { auth } from "../Firebase/firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (!!user) {
                const id = user.uid;
                getUserData(id);
            }
            setCurrentUser(user);
        })
    }, [])

    const getUserData = async (id) => {
        await db.collection("users").doc(id)
        .get()
        .then(function(doc) {
            if (doc.exists) {
                console.log(doc.data());
                const data = doc.data();
                setUserData({ 
                    firstName: data.firstName, 
                    lastName: data.lastName, 
                    email: data.email, 
                    lists: data.lists, 
                    stats: data.stats 
                });
            } else {
                console.log("No such document!");
            }
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
    }

    return (
        <AuthContext.Provider value={{ currentUser, userData }}>
            {children}
        </AuthContext.Provider>
    )

};


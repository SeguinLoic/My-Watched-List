import React, { useState, useEffect } from "react";
import { db } from "../Firebase/firebase";
import { auth } from "../Firebase/firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user != null) {
                const id = user.uid;
                getUserData(id);
            }
            setCurrentUser(user);
            console.log(userData);
        })
    }, [])



    const getUserData = async (id) => {
        await db.collection("users").where("id", "==", id)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                console.log(doc.data());
                setUserData({ firstName: doc.data().firstName, lastName: doc.data().lastName });
            });
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


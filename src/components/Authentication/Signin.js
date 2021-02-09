import React, { useState } from "react";
import firebase from "firebase/app";
import { db } from "../../infra/Firebase/firebase";
import { useHistory } from "react-router-dom";
import "./Signin.css"

import LogNavigation from "../Navigation/LogNavigation"

export default function Signin() {

    const history = useHistory();
    const [errorMessage, setErrorMessage] = useState('');
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        lists: {
            currentSeries: [],
            watchedSeries: []
        },
        stats: []
    })

    const handleChange = (e) => {
        const value = e.target.value;
        setUserInfo({...userInfo, [e.target.id]: value});
    }

    const createAccount = (e) => {
        e.preventDefault();
        
        for(let value in userInfo) {
            if (userInfo[value] === "") {
                return setErrorMessage("Veuillez remplir tous les champs");
            }
        }

        if(userInfo.password === userInfo.checkPassword) {

            firebase.auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password)
            .then((user) => {
                db.collection("users").doc(user.user.uid).set({
                    firstName: userInfo.firstName,
                    lastName: userInfo.lastName,
                    email: userInfo.email,
                    lists: userInfo.lists,
                    stats: userInfo.stats
                })
                setUserInfo({
                    firstName: "", 
                    lastName: "", 
                    email: "", 
                    password: "", 
                    lists: {currentSeries: [], watchedSeries: []}, 
                    stats: []
                });
                history.push("/Home");
            })
            .catch((error) => {
                console.log(error);
            })

        } else {
            setErrorMessage("Les mots de passes ne sont pas identiques");
        }
    }

    return (
        <div className="signin">
            
            <h2>Pas de compte ? Super simple !</h2>

            <form onSubmit={(e) => createAccount(e)}>
                <input type="text" placeholder="Nom" id="lastName" value={userInfo.lastName} onChange={handleChange} />
                <input type="text" placeholder="Prénom" id="firstName" value={userInfo.firstName} onChange={handleChange} />
                <input type="text" placeholder="E-mail" id="email" value={userInfo.email} onChange={handleChange} />
                <input type="password" placeholder="Mot de passe" id="password" value={userInfo.password} onChange={handleChange} />
                <input type="password" placeholder="Confirmer mot de passe" id="checkPassword" onChange={handleChange} />
                <button type="submit">Envoyer</button>
            </form>

            <div>{ errorMessage }</div>

            <LogNavigation />
        </div>
    )
}
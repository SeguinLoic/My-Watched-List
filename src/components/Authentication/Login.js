import React, { useState } from "react";
import firebase from "firebase/app";
import { Redirect } from "react-router-dom";

import "./Login.css";

export default function Login() {

    const [userInfo, setUserInfo] = useState({userID: "", userPassword: ""});
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setUserInfo({...userInfo, [e.target.id]: value});
    }

    const userConnexion = (userID, userPassword, e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(userID, userPassword)
        .then((user) => {
            <Redirect to="/Home" />
        })
        .catch((error) => {
          setError(error.message);
        });
    }

    return (
        <div className="Login">

            <h1>Connectez-vous !</h1>

            <form onSubmit={(e) => userConnexion(userInfo.userID, userInfo.userPassword, e)}>
                <input id="userID"  type="text" placeholder="E-mail" value={userInfo.userID} onChange={handleChange} />
                <input id="userPassword"  type="password" placeholder="Password" value={userInfo.userPassword} onChange={handleChange} />
                <button>Connexion</button>
            </form>

            <div className="message">{error}</div>

        </div>
    )
}
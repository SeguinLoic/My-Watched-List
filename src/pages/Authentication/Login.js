import React, { useState } from "react";
import firebase from "firebase/app";

export default function Connexion() {

    const [userInfo, setUserInfo] = useState({userID: "", userPassword: ""});

    const handleChange = (e) => {
        const value = e.target.value;
        setUserInfo({...userInfo, [e.target.id]: value});
    }

    const userConnexion = (userID, userPassword, e) => {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(userID, userPassword)
        .then((user) => {
          console.log(user)
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return (
        <div>
            <h1>Connexion</h1>
            <form onSubmit={(e) => userConnexion(userInfo.userID, userInfo.userPassword, e)}>
                <input id="userID"  type="text" placeholder="E-mail" value={userInfo.userID} onChange={handleChange} />
                <input id="userPassword"  type="password" placeholder="Password" value={userInfo.userPassword} onChange={handleChange} />
                <button>Connexion</button>
            </form>
            <button>Pas inscrit ?</button>
        </div>
    )
}
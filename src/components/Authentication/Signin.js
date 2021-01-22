import React, { useState } from "react";
import firebase from "firebase/app";
import { firestore } from "../Firebase/firebase";
import "./Signin.css"

export default function Signin() {

    const [errorMessage, setErrorMessage] = useState('');
    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
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

                const ref = firestore.collection("lists").doc();
                const id = ref.id;

                firestore.collection("users").add({
                    firstName: userInfo.firstName,
                    lastName: userInfo.lastName,
                    email: userInfo.email,
                    password: userInfo.password,
                    idLists: id,
                    id: user.user.uid
                })

                firestore.collection("lists").doc(id).set({
                    watchedList: [],
                    topTen: [],
                    stats: []
                })

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
        </div>
    )
}
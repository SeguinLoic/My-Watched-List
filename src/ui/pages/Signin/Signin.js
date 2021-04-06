import React, { useState } from "react";
import Navigation from "../../components/Navigation/Navigation"
import { createUserAcount } from "../../../infra/Authentication/Authentication";

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
            createUserAcount(userInfo);
            setUserInfo({ firstName: "", lastName: "", email: "", password: "" });
        } else {
            setErrorMessage("Les mots de passes ne sont pas identiques");
        }
    }

    return (
        <div className="page connexion signin">
            <div className="formContainer">
                <div className="formContent">
                    <h2>Pas de compte ? Super simple !</h2>

                    <form onSubmit={(e) => createAccount(e)}>
                        <input type="text" placeholder="Nom" id="lastName" value={userInfo.lastName} onChange={handleChange} />
                        <input type="text" placeholder="Prénom" id="firstName" value={userInfo.firstName} onChange={handleChange} />
                        <input type="text" placeholder="E-mail" id="email" value={userInfo.email} onChange={handleChange} />
                        <input type="password" placeholder="Mot de passe" id="password" value={userInfo.password} onChange={handleChange} />
                        <input type="password" placeholder="Confirmer mot de passe" id="checkPassword" onChange={handleChange} />
                        <button type="submit" className="btn primary">Créer un compte</button>
                    </form>

                    <div>{ errorMessage }</div>
                </div>
                <Navigation />
            </div>
        </div>
    )
}
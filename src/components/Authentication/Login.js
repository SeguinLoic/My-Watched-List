import React, { useState } from "react";
import LogNavigation from "../Navigation/LogNavigation"
import { userLogin } from "../../infra/Authentication/Authentication";
import "./Login.css";

export default function Login() {

    const [userInfo, setUserInfo] = useState({userID: "", userPassword: ""});
    //const [error, setError] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setUserInfo({...userInfo, [e.target.id]: value});
    }

    const handleConnexion = (userID, userPassword, e) => {
        e.preventDefault();
        userLogin(userID, userPassword);
        setUserInfo({userID: "", userPassword: ""});
    }

    return (
        <div className="Login">

            <h1>Connectez-vous !</h1>

            <form onSubmit={(e) => handleConnexion(userInfo.userID, userInfo.userPassword, e)}>
                <input id="userID"  type="text" placeholder="E-mail" value={userInfo.userID} onChange={handleChange} />
                <input id="userPassword"  type="password" placeholder="Password" value={userInfo.userPassword} onChange={handleChange} />
                <button>Connexion</button>
            </form>

            <LogNavigation />

        </div>
    )
}

// <div className="message">{error}</div>
import React, { useState } from "react";
import * as firebase from "../../components/Firebase/Base";

export default function Connexion() {

    const [userInfo, setUserInfo] = useState({userID: "", userPassword: ""});

    const handleChange = (e) => {
        const value = e.target.value;
        setUserInfo({...userInfo, [e.target.id]: value});
    }

    return (
        <div>
            <h1>Connexion</h1>
            <form onSubmit={(e) => firebase.userConnexion(userInfo.userID, userInfo.userPassword, e)}>
                <input id="userID"  type="text" placeholder="ID" value={userInfo.userID} onChange={handleChange} />
                <input id="userPassword"  type="password" placeholder="ID" value={userInfo.userPassword} onChange={handleChange} />
                <button>Connexion</button>
            </form>
            <button>Pas inscrit ?</button>
        </div>
    )
}
import React, { useState, useContext } from "react";
import LogNavigation from "../../components/AppNavigation/LogNavigation"
import { loginUser }  from "../../../domain/Authentication/Login";
import { StoreContext } from "../../../store/Store"
import "./Login.css";

export default function Login() {

    const [userInfo, setUserInfo] = useState({userID: "", userPassword: ""});
    const { dispatch } = useContext(StoreContext)

    const handleChange = (e) => {
        const value = e.target.value;
        setUserInfo({...userInfo, [e.target.id]: value});
    }

    const handleLogin = (userID, userPassword, e) => {
        e.preventDefault();
        loginUser(userID, userPassword, dispatch);
        setUserInfo({userID: "", userPassword: ""});
    }

    return (
        <div className="Login">
            <div className="formLogin">
                <h1>Connectez-vous !</h1>

                <form onSubmit={(e) => handleLogin(userInfo.userID, userInfo.userPassword, e)}>
                    <input id="userID"  type="text" placeholder="E-mail" value={userInfo.userID} onChange={handleChange} />
                    <input id="userPassword"  type="password" placeholder="Password" value={userInfo.userPassword} onChange={handleChange} />
                    <button>Connexion</button>
                </form>

                <LogNavigation />
            </div>
        </div>
    )
}
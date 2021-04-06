import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation"
import { loginUser }  from "../../../domain/Authentication/Login";
import { StoreContext } from "../../../store/Store"

export default function Login() {

    const [userInfo, setUserInfo] = useState({userID: "", userPassword: ""});
    const { dispatch } = useContext(StoreContext);
    const history = useHistory();

    const handleChange = (e) => {
        const value = e.target.value;
        setUserInfo({...userInfo, [e.target.id]: value});
    }

    const handleLogin = (userID, userPassword, e) => {
        e.preventDefault();
        loginUser(userID, userPassword, dispatch, history);
        setUserInfo({userID: "", userPassword: ""});
    }

    return (
        <div className="page connexion login">
            <div className="formContainer">
                <div className="formContent">
                    <h2>Connectez-vous !</h2>

                    <form onSubmit={(e) => handleLogin(userInfo.userID, userInfo.userPassword, e)}>
                        <input id="userID"  type="text" placeholder="E-mail" value={userInfo.userID} onChange={handleChange} />
                        <input id="userPassword"  type="password" placeholder="Password" value={userInfo.userPassword} onChange={handleChange} />
                        <button className="btn primary">Connexion</button>
                    </form>
                </div>
                <Navigation />
            </div>
        </div>
    )
}
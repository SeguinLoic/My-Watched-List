import React from "react";
import { Link } from "react-router-dom";

export default function LogNavigation() {
    return (
        <div className="logNavigation">
                <Link to="/Login">Déjà membre ?</Link>
                <Link to="/Signin" >Pas inscrit ?</Link>
                <Link to="/ForgotPassword">Mot de passe oublié ?</Link>
        </div>
    )
}
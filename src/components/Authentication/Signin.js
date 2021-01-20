import React from "react";
import "./Signin.css"

export default function Signin() {
    return (
        <div className="signin">
            <h2>Pas de compte ? Super simple !</h2>
            <form>
                <input type="text" placeholder="Nom" />
                <input type="text" placeholder="Prénom" />
                <input type="text" placeholder="E-mail" />
                <input type="password" placeholder="Mot de passe" />
                <input type="password" placeholder="Confirmer mot de passe" />
                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
}
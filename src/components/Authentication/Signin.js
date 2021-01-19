import React from "react";
import firebase from "firebase/app";

export default function Signin() {
    return (
        <div>
            <h2>Pas de compte ? Super simple !</h2>
            <form>
                <input type="text" placeholder="Nom" />
                <input type="text" placeholder="Prénom" />
                <input type="text" placeholer="E-mail" />
                <input type="password" placeholder="Mot de passe" />
                <input type="password" placeholder="Confirmer mot de passe" />
                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
}
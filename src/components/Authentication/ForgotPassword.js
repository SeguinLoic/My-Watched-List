import React from "react";

export default function ForgotPassword() {
    return (
        <div>
            <h2>Mot de passe oublié ? Pas de soucis !</h2>
            <form>
                <input type="text" placeholder="E-mail" />
                <button>Demande de mot de passe</button>
            </form>
        </div>
    )
}
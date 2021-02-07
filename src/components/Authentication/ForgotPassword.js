import React, { useState } from "react";
import { auth } from "../Firebase/firebase";
import { useHistory } from "react-router-dom";

export default function ForgotPassword() {

    const history = useHistory();
    const [email, setEmail] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        if (!email) {
            console.log("Veuillez renseigner un email valide");
        } else {
            auth.sendPasswordResetEmail(email)
            .then(() => {
                console.log("Email envoyé");
                history.push("/Login");
            }, error => {
                console.log(error);
            })
        }
    }

    return (
        <div>
            <h2>Mot de passe oublié ? Pas de soucis !</h2>
            <form onSubmit={sendEmail} >
                <input type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button>Demande de mot de passe</button>
            </form>
        </div>
    )
}
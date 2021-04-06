import React, { useState } from "react";
import { sendResetPassword } from "../../../infra/Authentication/Authentication";
import Navigation from "../../components/Navigation/Navigation"

export default function ForgotPassword() {

    const [errorMessage, setErrorMessage] = useState('');
    const [email, setEmail] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        if (!email) {
            setErrorMessage("Veuillez renseigner un email valide");
        } else {
            sendResetPassword(email);
            setErrorMessage("Email envoyé");
        }
    }

    return (
        <div className="page connexion forgotPassword">
            <div className="formContainer">
                <div className="formContent">
                    <h2>Mot de passe oublié ? Pas de soucis !</h2>

                    <form onSubmit={sendEmail} >
                        <input type="text" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <button className="btn primary">Demande de mot de passe</button>
                    </form>

                    <div>{ errorMessage }</div>
                    </div>
                <Navigation />
            </div>
        </div>
    )
}
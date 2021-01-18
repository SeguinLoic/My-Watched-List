import React from "react";
import { auth } from "../Firebase/firebase";

export default function Logout() {
    return <button onClick={() => auth.signOut()}>Déconnexion</button>
}
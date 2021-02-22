import React from "react";
import { userLogout } from "../../../infra/Authentication/Authentication";

export default function Logout() {
    return <button onClick={userLogout}>Déconnexion</button>
}
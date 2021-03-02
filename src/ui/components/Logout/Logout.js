import React, { useContext } from "react";
import { logoutUser } from "../../../domain/Authentication/Logout";
import { StoreContext } from "../../../store/Store"

export default function Logout() {

    const { dispatch } = useContext(StoreContext);

    const handleLogout = () => {
        logoutUser(dispatch);
    }

    return <button onClick={handleLogout}>Déconnexion</button>

}
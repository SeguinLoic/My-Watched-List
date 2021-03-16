import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { logoutUser } from "../../../domain/Authentication/Logout";
import { StoreContext } from "../../../store/Store"

export default function Logout() {

    const history = useHistory();

    const { dispatch } = useContext(StoreContext);

    const handleLogout = () => {
        logoutUser(dispatch, history);
    }

    return <button onClick={handleLogout}>Déconnexion</button>

}
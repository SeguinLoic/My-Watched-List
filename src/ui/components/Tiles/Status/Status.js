import React, { useContext } from "react";
import { StoreContext } from "../../../../store/Store"

export default function Status() {

    const { store, dispatch } = useContext(StoreContext);

    return (
        <div className="status">
        </div>
    )
}

/*

<span className={ idCurrent.length > 0 && location.pathname === "/Home" && idWatched.length === 0 ? "active" : "hide" }>Déjà en train de regarder Mamen !</span>
<span className={ idWatched.length > 0  && location.pathname === "/Home"  ? "active" : "hide" }>Déjà tout vu BG !</span>

*/
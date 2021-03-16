import React from "react";

import "./Attribution.scss";
import logoTMDB from "../../assets/logo-tmdb.svg";

export default function Attribution() {
    return (
        <div className="attribution">
            <img src={logoTMDB} alt="Logo TMDB" />
            <span>This product uses the TMDb API but is not endorsed or certified by TMDb.</span>
        </div>
    )
}
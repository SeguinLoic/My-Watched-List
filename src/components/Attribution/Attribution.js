import React from "react";

import logoTMDB from "../../assets/logo-tmdb.svg";

export default function Attribution() {
    return (
        <div className="attribution">
            <span>This product uses the TMDb API but is not endorsed or certified by TMDb.</span>
            <img src={logoTMDB} alt="Logo TMDB" />
        </div>
    )
}
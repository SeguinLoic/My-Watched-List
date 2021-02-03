import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function SeriePage(props) {

    const [data, setData] = useState({});

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const state = await props.location.state;
        setData(state);
    }

    return (
        <div className="seriePage">
            <h1>Je suis la page de la série {data.serie.original_name}</h1>
            <Link to={`${data.location}`}>Retour</Link>
        </div>
    )
}
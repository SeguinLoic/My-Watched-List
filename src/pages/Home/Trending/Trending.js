import React, { useEffect, useState } from "react";

import Tiles from "../../../components/Tiles/Tiles"

export default function Trending() {

    const API_KEY = process.env.REACT_APP_API_KEY;
    const [topTrends, setTopTrends] = useState([]);

    const checkTrends = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`);
        const myJSON = await response.json();
        setTopTrends(myJSON.results);
    }

    useEffect(() => {
        checkTrends();
    }, [])

    return (
        <div>
            <h2>Les dernières sorties</h2>
            <div className="sorties">
                {
                    topTrends.map(mediaInfo => <Tiles mediaInfo={mediaInfo} addList /> )
                }
            </div>
        </div>
    )
}
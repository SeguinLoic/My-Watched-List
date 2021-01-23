import React, { useState, useContext } from "react"; 

import Header from "../../components/Header/Header";
import Trending from "./Trending/Trending"
import Tile from "../../components/Tile/Tile"
import { AuthContext } from "../../components/Authentication/Auth";

export default function Home() {

    const { userData } = useContext(AuthContext);
    const [result, setResult] = useState([]);

    return (
        <div className="home">

            <Header setResult={setResult} />

            <div className="search">
                {
                    result.length 
                    ? 
                    <div className="blocSearch">
                    <h2>Ma recherche</h2>
                    <div className="result">
                        {
                        result.map( mediaInfo => <Tile mediaInfo={mediaInfo} addList /> )
                        } 
                    </div>
                    </div>
                    : 
                    <Trending />
                }
            </div>

        </div>
    )
}
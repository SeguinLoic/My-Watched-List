import React, { useState } from "react";
import Tile from "../Tile/Tile"

export default function SearchBar() {
    
    const API_KEY = process.env.REACT_APP_API_KEY;

    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${search}`);
        const myJSON = await response.json();
        setResult(myJSON.results);
        setSearch("");
    }

    return (

        <div className="search">

            <form onSubmit={handleSearch}>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button>Search</button>
            </form>

            {
                result.length 
                ? 
                    <div className="blocSearch">
                        <h2>Ma recherche</h2>
                        <div className="result">
                            {
                            result.map( mediaInfo => <Tile mediaInfo={mediaInfo} /> )
                            } 
                        </div>
                    </div>
                : 
                    ""
                }

        </div>
        
    )
}
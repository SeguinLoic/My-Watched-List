import React, { useState } from "react";
import Tiles from "../Tiles/Tiles"

import { searchMovies } from "../../../domain/Movies/Catalog/Search"

export default function SearchBar() {

    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        const movies = await searchMovies(search);
        setResult(movies);
        setSearch("");
    }

    return (

        <div className="search">

            <form onSubmit={handleSearch}>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button>Search</button>
            </form>

            <div className="searchResult">
                {
                    result.length 
                    ? 
                        <div className="blocSearch">
                            <h2>Ma recherche</h2>
                            <div className="result">
                                { result.map( serie => <Tiles serie={serie} /> ) } 
                            </div>
                        </div>
                    : 
                        ""
                }
            </div>

        </div>
        
    )
}
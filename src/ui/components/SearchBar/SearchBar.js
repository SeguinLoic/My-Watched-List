import React, { useState } from "react";
import List from "../List/List"

import { searchMovies } from "../../../domain/Movies/Catalog/Search"

import searchLogo from "../../assets/search.svg"
import cross from "../../assets/cross.svg"
import "./SearchBar.scss"

export default function SearchBar() {

    const [search, setSearch] = useState("");
    const [result, setResult] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        const movies = await searchMovies(search);
        setResult(movies);
        setSearch("");
    }

    const closeSearch = () => {
        setResult([]);
    }

    return (

        <div className="search">

            <form onSubmit={handleSearch}>
                <img src={searchLogo} alt="glass" />
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Rechercher une série" />
            </form>

            <div className="searchResult">
                {
                    !!result && result.length 
                    ? 
                        <div className="blocSearch">
                            <div className="contentSearch">
                                <div className="closeBTN" onClick={closeSearch}><img src={cross} alt="cross"/></div>
                                <h2>Résultats de la recherche</h2>
                                <div className="result">
                                    <List list={result} />
                                </div>
                            </div>
                        </div>
                    : 
                        ""
                }
            </div>

        </div>
        
    )
}
import React, { useState } from "react";
import "./Header.css";

export default function Header({ setResult }) {

    const API_KEY = process.env.REACT_APP_API_KEY;
    const [search, setSearch] = useState("");

    const handleSearch = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${search}`);
        const myJSON = await response.json();
        setResult(myJSON.results);
        setSearch("");
    }

    return (
        <header className="header">
            <h1>My Watched List</h1>
            <form onSubmit={handleSearch}>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button>Search</button>
            </form>
        </header>
    )
}
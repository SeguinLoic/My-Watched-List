import React from "react"; 
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar"
import Trending from "./Trending/Trending"

export default function Home() {

    return (
        <div className="home">
            <Header />
            <SearchBar />
            <Trending />
        </div>
    )
}
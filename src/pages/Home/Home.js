import React, { useContext } from "react"; 

import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar"
import Trending from "./Trending/Trending"

import { AuthContext } from "../../components/Authentication/Auth";

export default function Home() {

    const { currentSeries } = useContext(AuthContext);
    const { watchedSeries } = useContext(AuthContext);

    return (
        <div className="home">
            <Header />
            <SearchBar />
            <Trending />
        </div>
    )
}
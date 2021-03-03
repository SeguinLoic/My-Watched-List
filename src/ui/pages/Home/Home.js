import React, { useContext } from "react"; 
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar"
import List from "../../components/List/List"

import { StoreContext } from "../../../store/Store"

export default function Home() {

    const { store } = useContext(StoreContext);

    return (
        <div className="home">

            <Header />
            <SearchBar />

            <h2>Les dernières sorties</h2>
            <List list={store.trends} />
            
        </div>
    )
}
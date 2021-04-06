import React, { useContext } from "react"; 
import Header from "../../components/Header/Header";
import List from "../../components/List/List"
import LatestMovie from "../../components/LatestMovie/LatestMovie"

import { StoreContext } from "../../../store/Store"

export default function Home() {

    const { store } = useContext(StoreContext);

    return (
        <div className="page home">

            <Header />

            <div className="bloc">
                <h2>À la une</h2>
                <LatestMovie movie={store.trends.latestMovie}/>
            </div>

            <div className="bloc">
                <h2>Les dernières sorties</h2>
                <List list={store.trends.trendsList} />
            </div>
        </div>
    )
}
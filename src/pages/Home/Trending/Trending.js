import React, { useContext } from "react";
import List from "../../../components/List/List"

import { AuthContext } from "../../../components/Authentication/Auth"

export default function Trending() {

    const { topTrends } = useContext(AuthContext);

    return (
        <div>
            <h2>Les dernières sorties</h2>
            <List list={topTrends} />
        </div>
    )
}
import React, { useContext } from "react";
import List from "../../../components/List/List"

import { AuthContext } from "../../../components/Authentication/Auth"

export default function Trending() {

    const { topTrends } = useContext(AuthContext);

    /*const API_KEY = process.env.REACT_APP_API_KEY;
    const [topTrends, setTopTrends] = useState([]);
    let lastTrends = "";*/

    /*const checkTrends = async () => {
        const response = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`);
        const myJSON = await response.json();
        setTopTrends(myJSON.results);
        lastTrends = myJSON.results;
    }

    useEffect(() => {
        console.log(lastTrends);
        checkTrends();
    }, [])*/

    return (
        <div>
            <h2>Les dernières sorties</h2>
            <List list={topTrends} />
        </div>
    )
}
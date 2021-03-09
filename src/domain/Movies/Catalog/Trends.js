import { getTrendsFromAPI } from "../../../infra/Movies/Catalog/Trends"
import { formatedMoviesFromAPI } from "../../Utils/formatedMovies"

export const getTrends = async () => {
    const movies = await getTrendsFromAPI();
    const formatedListMovies = await formatedMoviesFromAPI(movies);
    const latestMovie = formatedListMovies.shift();
    const trends = {
        trendsList: formatedListMovies,
        latestMovie: latestMovie
    }
    return trends;
}
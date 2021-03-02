import { getTrendsFromAPI } from "../../../infra/Movies/Catalog/Trends"
import { formatedMoviesFromAPI } from "../../Utils/formatedMovies"

export const getTrends = async () => {
    const movies = await getTrendsFromAPI();
    const formatedMovies = await formatedMoviesFromAPI(movies);
    return formatedMovies;
}
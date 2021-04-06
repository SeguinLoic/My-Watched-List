import { searchMoviesInAPI } from "../../../infra/Movies/Catalog/Search"
import { formatedMoviesFromAPI } from "../../Utils/formatedMovies"

export const searchMovies = async (search) => {
    const movies = await searchMoviesInAPI(search);
    const formatedMovies = await formatedMoviesFromAPI(movies);
    return formatedMovies;
} 
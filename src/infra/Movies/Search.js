const API_KEY = process.env.REACT_APP_API_KEY;

const SearchMovies = async (search) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${search}`);
        const myJSON = await response.json();
        return myJSON.results;
    } catch(error) {
        console.log(error);
    }
}
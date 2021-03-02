const API_KEY = process.env.REACT_APP_API_KEY;

export const getTrendsFromAPI = async () => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}`);
        const myJSON = await response.json();
        return myJSON.results
    } catch(error) {
        throw new Error(error);
    }
}
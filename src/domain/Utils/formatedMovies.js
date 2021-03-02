export const formatedMoviesFromAPI = async (movies) => {
    const formatedData = movies.map(movie => {
        return ({
            backgroundImage: movie.backdrop_path,
            presentationImage: movie.poster_path,
            movieURL: movie.original_name.toLowerCase().split(" ").join("-"),
            movieID: movie.id,
            movieName: movie.original_name,
            movieDate: movie.first_air_date,
            movieOverview: movie.overview,
            movieRate: movie.vote_average
        })
    })
    return formatedData;
}
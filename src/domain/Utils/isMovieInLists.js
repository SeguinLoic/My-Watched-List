export const isMovieInWatchedList = (store, movie) => {
    const movieIsWatched = store.watchedList.filter(moviefiltered => moviefiltered.movieID === movie.movieID);
    return movieIsWatched.length > 0 ? "inList" : "";
}

export const isMovieInCurrentList = (store, movie) => {
    const movieIsCurrent = store.currentList.filter(moviefiltered => moviefiltered.movieID === movie.movieID);
    return movieIsCurrent.length > 0 ? "inList" : "";
}

export const isMovieInCurrentAndWatchedList = (store, movie) => {
    const movieIsWatched = store.watchedList.filter(moviefiltered => moviefiltered.movieID === movie.movieID)
    const movieIsCurrent = store.currentList.filter(moviefiltered => moviefiltered.movieID === movie.movieID)
    return movieIsWatched.length > 0 || movieIsCurrent.length > 0 ? "inList" : "";
}
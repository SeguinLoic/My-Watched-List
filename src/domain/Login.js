import { userLogin } from "../infra/Authentication/Authentication"
import { getUserCurrentListDB } from "../infra/Movies/CurrentMovies"
import { getUserWatchedList } from "../infra/Movies/WatchedMovies"
import { getTrendsFromAPI } from "../infra/Movies/Trends"

export const fetchInitialStore = data => {
    return { type: 'INITIALISE_STORE', data };
}

export const loginUser = async (email, password, dispatch) => {

    const response = await userLogin(email, password);

    const userID = response.user.uid;
    const trends = await getTrendsFromAPI();
    const currentList = await getUserCurrentListDB(userID);
    const watchedList = await getUserWatchedList(userID);

    const store = {
        userID: userID,
        trends: trends,
        currentList: currentList,
        watchedList: watchedList
    }

    dispatch(fetchInitialStore(store));
}
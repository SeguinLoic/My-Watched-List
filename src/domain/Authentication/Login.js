import { userLogin } from "../../infra/Authentication/Authentication"
import { setSessionUser } from "../User/Session"
import { getUserCurrentList } from "../../infra/Movies/UserLists/CurrentList"
import { getUserWatchedList } from "../../infra/Movies/UserLists/WatchedList"
import { getTrends } from "../Movies/Catalog/Trends"

export const fetchInitialStore = data => {
    return { type: 'INITIALISE_STORE', data };
}

export const loginUser = async (email, password, dispatch) => {

    const response = await userLogin(email, password);
    const userID = response.user.uid;

    setSessionUser(userID);
    getUserData(userID, dispatch);

}

export const getUserData = async (userID, dispatch) => {

    const trends = await getTrends();
    const currentList = await getUserCurrentList(userID);
    const watchedList = await getUserWatchedList(userID);

    const store = {
        userID: userID,
        trends: trends,
        currentList: currentList,
        watchedList: watchedList
    }

    dispatch(fetchInitialStore(store));

}
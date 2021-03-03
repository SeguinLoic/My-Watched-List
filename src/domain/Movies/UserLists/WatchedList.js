import { updateWatchedListDB } from "../../../infra/Movies/UserLists/WatchedList"
import { updateCurrentListDB } from "../../../infra/Movies/UserLists/CurrentList"

export const updateWatchedListStore = data => {
    return { type: 'UPDATE_WATCHED_LIST_STORE', data };
}

export const updateWatchedList = (movie, store, dispatch) => {

    const updatedStore = {...store}

    updatedStore.watchedList.push(movie);
    updatedStore.currentList.splice(updatedStore.currentList.indexOf(movie), 1);

    updateWatchedListDB(store.userID, updatedStore.watchedList);
    updateCurrentListDB(store.userID, updatedStore.currentList);

    dispatch(updateWatchedListStore(updatedStore));
    
}
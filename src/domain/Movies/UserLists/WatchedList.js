import { updateWatchedListDB } from "../../../infra/Movies/UserLists/WatchedList"
import { updateCurrentListDB } from "../../../infra/Movies/UserLists/CurrentList"

export const updateWatchedListStore = data => {
    return { type: 'UPDATE_WATCHED_LIST_STORE', data };
}

export const updateWatchedList = (movie, store, dispatch) => {

    const updatedStore = {...store}

    updatedStore.watchedList.push(movie);
    updatedStore.currentList.splice(updatedStore.currentList.indexOf(movie), 1);

    updateWatchedListDB(store.user.id, updatedStore.watchedList);
    updateCurrentListDB(store.user.id, updatedStore.currentList);

    dispatch(updateWatchedListStore(updatedStore));
    
}
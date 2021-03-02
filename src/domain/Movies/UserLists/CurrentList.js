//import { updateCurrentListDB } from "../../../infra/Movies/UserLists/CurrentList"

export const updateCurrentListStore = data => {
    return { type: 'UPDATE_CURRENT_LIST_STORE', data };
}

export const updateCurrentList = (movie, store, dispatch) => {
    const updatedStore = store
    updatedStore.currentList.push(movie);
    dispatch(updateCurrentListStore(updatedStore));
}
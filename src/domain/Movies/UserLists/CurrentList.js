import { updateCurrentListDB } from "../../../infra/Movies/UserLists/CurrentList"

export const updateCurrentListStore = data => {
    return { type: 'UPDATE_CURRENT_LIST_STORE', data };
}

export const updateCurrentList = (movie, store, dispatch) => {

    const updatedStore = {...store}
    updatedStore.currentList.push(movie);

    updateCurrentListDB(store.user.id, updatedStore.currentList);
    dispatch(updateCurrentListStore(updatedStore));

}
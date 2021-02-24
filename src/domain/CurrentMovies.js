import { getUserCurrentListDB } from "../infra/Movies/CurrentMovies"

export const getCurrentList = data => {
    return { type: 'getCurrentList', data };
}

export const displayCurrentList = async (id) => {
    const myData = await getUserCurrentListDB(id);
    return myData;
}
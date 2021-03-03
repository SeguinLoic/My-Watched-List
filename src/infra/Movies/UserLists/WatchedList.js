import { db } from "../../Firebase/firebase";

export const getUserWatchedList = async (id) => {
    try {
        const doc = await db.collection("users").doc(id).get()
        const data = doc.data();
        const list = data.lists.watchedSeries;
        return list;
    } catch (error) {
        console.log(error);
    }
}

export const updateWatchedListDB = async (id, list) => {
    const currentList = await db.collection("users").doc(id);
    return currentList.update({
        "lists.watchedSeries": list
    })
}
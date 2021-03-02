import { db } from "../../Firebase/firebase";

// GET DATA
export const getUserCurrentList = async (id) => {
    try {
        const doc = await db.collection("users").doc(id).get()
        const data = doc.data();
        const list = data.lists.currentSeries;
        return list;
    } catch (error) {
        console.log(error);
    }
}

// SET DATA
export const updateCurrentListDB = async (id, list) => {
    const currentList = await db.collection("users").doc(id);
    return currentList.update({
        "lists.currentSeries": list
    })
}
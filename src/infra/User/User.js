import { db } from "../Firebase/firebase";

export const getUserName = async (id) => {
    try {
        const doc = await db.collection("users").doc(id).get()
        const data = doc.data();
        const userName = data.firstName;
        return userName;
    } catch (error) {
        console.log(error);
    }
}
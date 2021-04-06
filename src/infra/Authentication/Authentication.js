import { auth } from "../Firebase/firebase";
import { db } from "../Firebase/firebase";

export const userLogout = () => auth.signOut()

export const userLogin = async (email, password) => {
    try {
        return await auth.signInWithEmailAndPassword(email, password); 
    } catch(error) {
        throw new Error(error);
    }
}

export const createUserAcount = async (user) => {
    try {
        const newUser = await auth.createUserWithEmailAndPassword(user.email, user.password);
        return db.collection("users").doc(newUser.user.uid).set({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            lists: {currentSeries: [], watchedSeries: []}
        })
    } catch(error) {
        throw new Error(error);
    }
}

export const sendResetPassword = async (email) => {
    try {
        return await auth.sendPasswordResetEmail(email);
    } catch(error) {
        throw new Error(error);
    }
}
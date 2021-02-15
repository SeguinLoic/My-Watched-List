import { auth } from "../Firebase/firebase";
import { db } from "../Firebase/firebase";

export const userLogout = () => auth.signOut()

export const userLogin = async (email, password) => {
    try {
        await auth.signInWithEmailAndPassword(email, password); 
    } catch(error) {
        throw error;
    }
}

export const createUserAcount = async (user) => {
    try {
        const newUser = await auth.createUserWithEmailAndPassword(user.email, user.password);
        db.collection("users").doc(newUser.user.uid).set({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            lists: {currentSeries: [], watchedSeries: []},
            stats: []
        })
    } catch(error) {
        throw error;
    }
}

export const sendResetPassword = async (email) => {
    try {
        await auth.sendPasswordResetEmail(email);
    } catch(error) {
        throw error;
    }
}
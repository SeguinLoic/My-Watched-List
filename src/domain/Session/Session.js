export const setSessionUser = (id) => {
    return sessionStorage.setItem("user", id);
}

export const getSessionUser = () => {
    const user = sessionStorage.getItem("user");
    return user;
}

export const clearSessionsUser = () => {
    return sessionStorage.clear();
}
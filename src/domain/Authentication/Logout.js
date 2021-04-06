import { userLogout } from "../../infra/Authentication/Authentication"
import { clearSessionsUser } from "../Session/Session"

export const clearStore = () => {
    return { type: 'CLEAR_STORE' };
}

export const logoutUser = (dispatch, history) => {
    clearSessionsUser();
    userLogout();
    dispatch(clearStore());
    history.push("/Login");
}

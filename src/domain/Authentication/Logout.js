import { userLogout } from "../../infra/Authentication/Authentication"
import { clearSessionsUser } from "../Session/Session"

export const clearStore = () => {
    return { type: 'CLEAR_STORE' };
}

export const logoutUser = (dispatch) => {
    clearSessionsUser();
    userLogout();
    dispatch(clearStore());
    window.location = "/Login";
}

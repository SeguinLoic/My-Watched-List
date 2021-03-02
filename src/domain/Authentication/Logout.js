import { userLogout } from "../../infra/Authentication/Authentication"
import { clearSessionsUser } from "../User/Session"

export const clearStore = () => {
    return { type: 'CLEAR_STORE' };
}

export const logoutUser = (dispatch) => {
    clearSessionsUser();
    userLogout();
    dispatch(clearStore());
}

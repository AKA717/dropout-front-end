import actions from "./action-constants"

export const adminLoginAction = (payload) => {
    return(
        {
            type: actions.ADMIN_LOGIN_START,
            payload : payload
    });
}

export const adminLogoutAction = () => {
    return(
        {
            type: actions.ADMIN_LOGOUT_START
        }
    );
}
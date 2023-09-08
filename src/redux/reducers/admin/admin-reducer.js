import actions from "../../actions/action-constants"

let initState = {
    login : false,
    user : 'admin'
}

const adminReducer = (state=initState,action) => {

    console.log("admin reducer : ",action.payload);

    switch(action.type)
    {
        case actions.ADMIN_LOGIN_SUCCESS:
            return{
                ...state,   
                admin : action.payload.admin,
                login : true,
                message : action.payload.message
            };
        case actions.ADMIN_LOGIN_FAILED:
            return{
                ...state,
                message : action.payload.message,
                login : false,
                admin : null
            }
        case actions.ADMIN_LOGOUT_SUCCESS:
            return{
                login : false
            }
        default:
            return state;
    }
}

export default adminReducer;
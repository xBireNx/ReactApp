import {LoginConst} from '../Action/ActionConst';

const initState = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    authenticated: false,
    authentication: '',
    message: ''
}

const LoginReducers = (state=initState,action) => {
    console.log(action);
    switch(action.type){
        case `${LoginConst.USER_REGISTER}_REQUEST`:
            return {
                ...state
            };
        case `${LoginConst.USER_REGISTER}_SUCCESS`:
            return state = {
                ...state,

                message: action.payload.message
            }
        case `${LoginConst.USER_REGISTER}_FAILURE`:
            return state = {
                ...state,

                error: action.payload.error
            }
        case `${LoginConst.USER_LOGIN}_REQUEST`:
            return {
                ...state
            }
        case `${LoginConst.USER_LOGIN}_SUCCESS`:
            return state = {
                ...state,

                message: action.payload.message
            }
        case `${LoginConst.USER_LOGIN}_FAILURE`:
            return state = {
                ...state,

                error: action.payload.error
            }
        case `${LoginConst.USER_LOGOUT}_REQUEST`:
            return {
                ...state
            }
        case `${LoginConst.USER_LOGOUT}_SUCCESS`:
            return state = {
                ...state,

                message: action.payload.message
            }
        case `${LoginConst.USER_LOGOUT}_FAILURE`:
            return state = {
                ...state,

                error: action.payload.error
            }
        default:
            return state;
    }
}

export default LoginReducers;
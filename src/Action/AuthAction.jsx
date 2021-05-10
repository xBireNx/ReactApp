import axios from 'axios';
import {LoginConst} from './ActionConst'

export const signup = (user) => {
    return async (dispatch) => {
        dispatch({type: `${LoginConst.USER_REGISTER}_REQUEST`});
        axios.post('https://api09.herokuapp.com/register', user).then((res) => {
            const msg = res.data.message 
            console.log(res.data);

            dispatch({type: `${LoginConst.USER_REGISTER}_SUCCESS`, payload:{message:msg}})
        }).catch((err) => {
            dispatch({type: `${LoginConst.USER_REGISTER}_FAILUER`, payload:{error: 'Data not registered'}})
        })
    }
}

export const signin = (user) => {
    return async (dispatch) => {
        dispatch({type: `${LoginConst.USER_LOGIN}_REQUEST`});
        axios.post('https://api09.herokuapp.com/login', user).then((res) => {
            const msg = res.data.message 
            console.log(res.data);

            dispatch({type: `${LoginConst.USER_LOGIN}_SUCCESS`, payload:{message:msg}})
        }).catch((err) => {
            dispatch({type: `${LoginConst.USER_LOGIN}_FAILURE`, payload:{error: 'Login Failed'}})
        })
    }
}

export const signout = () => {
    return async (dispatch) => {
        dispatch({type: `${LoginConst.USER_LOGOUT}_REQUEST`});
        if(localStorage.getItem('token') !== ""){
            localStorage.clear();
            dispatch({type:`${LoginConst.USER_LOGOUT}_SUCCESS`,payload:{message:"Logout Successfully"}})
       } else {
        dispatch({type:`${LoginConst.USER_LOGOUT}_SUCCESS`,payload:{message:"Logout Failed"}})
        }
    }
}
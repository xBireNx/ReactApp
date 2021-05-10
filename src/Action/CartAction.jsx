import {CartConst} from './ActionConst'
import axios from 'axios';

export const CartDet = (ProductDet) => {
    return async (dispatch) => {
        dispatch({type: `${CartConst.CART_POST}_REQUEST`})
        axios.post('https://fakestoreapi.com/carts').then(res => {console.log(res.data)
            dispatch({type: `${CartConst.CART_POST}_SUCCESS`, payload: {message: "Cart Loaded", cartdata: ProductDet}})
        }).catch(err => {
            dispatch({type: `${CartConst.CART_POST}_FAIL`, payload: {message: 'Fail To Get Cart'}})
        })
    }
}

export const CartUpdate = (pid, id) => {
    return async (dispatch) => {
        dispatch({type: `${CartConst.CART_UPDATE}_REQUEST`})
        axios.post(`https://fakestoreapi.com/carts`).then(res => {console.log(res.data) 
        dispatch({type: `${CartConst.CART_UPDATE}_SUCCESS`, payload: {message: 'Cart Value Updated', cartupdate: pid}})}).catch(err => { console.log(err)
            dispatch({type: `${CartConst.CART_UPDATE}_FAIL`, payload: {message: 'Failed to update cart'}})
        })
    }
}

export const CartDelete = (pid) => {
    return async (dispatch) => {
        dispatch({type: `${CartConst.CART_DELETE}_REQUEST`})
        axios.post(`https://fakestoreapi.com/carts/${pid}`).then(res => {console.log(res.data) 
        dispatch({type: `${CartConst.CART_DELETE}_SUCCESS`, payload: {message: 'Cart Value Updated', cartdelete: res.data}})}).catch(err => {
            dispatch({type: `${CartConst.CART_DELETE}_FAIL`, payload: {message: 'Failed to update cart'}})
        })
    }
}

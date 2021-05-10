import {CartConst} from '../Action/ActionConst'

const initial = {
    CartDetails: [],
    Error: null,
    Message: "",
    Quantity: []
}

const CartReducers = (state=initial, action) => {
    console.log(action);
    switch(action.type){
        case `${CartConst.CART_POST}_REQUEST` :
            return state = {
                ...state
            }

        case `${CartConst.CART_POST}_SUCCESS` :
            var CartMer = {...action.payload.cartdata, Quantity: 1}
            var Cartt = []
            Cartt.push(CartMer)
            return state = {
                ...state,
                CartDetails: [...Cartt],
                Message: action.payload.message
            }

        case `${CartConst.CART_POST}_FAIL` :
            return state = {
                ...state,
                Error: action.payload.message
            }

        case `${CartConst.CART_UPDATE}_REQUEST` :
            return state = {
                ...state
            }

        case `${CartConst.CART_UPDATE}_SUCCESS` :
            var qnt = action.payload.pid.Quantity + 1
            // console.log(qnt);
            // var CartUpMer = 
            // var CartUp = []
            // CartUp
            
            return state = {
                ...state,
                qnt: qnt + 1,
                Quantity: qnt
            }

        case `${CartConst.CART_UPDATE}_FAIL` :
            return state = {
                ...state,
                                    Error: action.payload.message
                    }
            
        default: return state
    }
}
export default CartReducers
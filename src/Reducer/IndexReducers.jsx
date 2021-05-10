import {combineReducers} from 'redux';
import LoginReducers from './LoginReducers';
import ProductReducers from './ProductReducers';
import CartReducers from './CartReducers'

const rootReducer = combineReducers({
    loginData: LoginReducers,
    productData: ProductReducers,
    cartData: CartReducers
})

export default rootReducer;
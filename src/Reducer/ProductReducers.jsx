import {ProductConst} from '../Action/ActionConst';

const initial = {
    AllCate: [],
    Specific_CategoryData: [],
    ProductDetails: {},
    Error: null,
    Message: ""
}

const ProductReducers = (state=initial, action) => {
    console.log(state);
    switch(action.type){
        case `${ProductConst.PRODUCT_CATEGORY_GET}_REQUEST` :
            return state = {
                ...state
            }

        case `${ProductConst.PRODUCT_CATEGORY_GET}_SUCCESS` :
            return state = {
                ...state,
                AllCate: action.payload.categorydata,
                Message: action.payload.message
            }

        case `${ProductConst.PRODUCT_CATEGORY_GET}_FAIL` :
            return state = {
                ...state,
                Error: action.payload.message
            }

        case `${ProductConst.PRODUCT_SUBCATAGORY}_REQUEST` :
            return state = {
                ...state
            }

        case `${ProductConst.PRODUCT_SUBCATAGORY}_SUCCESS` :
            return state = {
                ...state,
                Specific_CategoryData: action.payload.subcategorydata,
                Message: action.payload.message
            }

        case `${ProductConst.PRODUCT_SUBCATAGORY}_FAIL` :
            return state = {
                ...state,
                Error: action.payload.message
            }

        case `${ProductConst.PRODUCT_DETAILS}_REQUEST` :
            return state = {
                ...state
            }

        case `${ProductConst.PRODUCT_DETAILS}_SUCCESS` :
            return state = {
                ...state,
                ProductDetails: action.payload.productdata,
                Message: action.payload.message
            }

        case `${ProductConst.PRODUCT_DETAILS}_FAIL` :
            return state = {
                ...state,
                Error: action.payload.message
            }

        default: return state
    }
}

export default ProductReducers
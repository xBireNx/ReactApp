import {ProductConst} from './ActionConst';
import axios from 'axios';

export const ProductCategories = () => {
    return async (dispatch) => {
        dispatch({type: `${ProductConst.PRODUCT_CATEGORY_GET}_REQUEST`})
        axios.get('https://fakestoreapi.com/products/categories').then(res => {console.log(res.data)
            dispatch({type: `${ProductConst.PRODUCT_CATEGORY_GET}_SUCCESS`, payload: {message: "Category Loaded", categorydata: res.data}})
        }).catch(err => {
            dispatch({type: `${ProductConst.PRODUCT_CATEGORY_GET}_FAIL`, payload: {message: 'Fail To Get Category'}})
        })
    }
}

export const subcatagory = (sub) => {
    return async (dispatch) => {
        dispatch({type:`${ProductConst.PRODUCT_SUBCATAGORY}_REQUEST`});
        axios.get(`https://fakestoreapi.com/products/category/${sub}`).then((res)=>{
            dispatch({type: `${ProductConst.PRODUCT_SUBCATAGORY}_SUCCESS`, payload:{message: "Product Loaded", subcategorydata: res.data}});
        }).catch((err) => {
            dispatch({type:`${ProductConst.PRODUCT_SUBCATAGORY}_FAIL`, payload: {message: 'Fail To Get Product List'}});
        })
    }
}


export const productdetails = (pid) => {
    return async (dispatch) =>{
        dispatch({type:`${ProductConst.PRODUCT_DETAILS}_REQUEST`});
        axios.get(`https://fakestoreapi.com/products/${pid}`).then((res)=>{
            dispatch({type:`${ProductConst.PRODUCT_DETAILS}_SUCCESS`, payload:{message: "Product Details Loaded", productdata: res.data}});
        }).catch((err)=>{
            dispatch({type:`${ProductConst.PRODUCT_DETAILS}_FAIL`, payload: {message: 'Fail To Get Product Details'}});
        })
    }
}
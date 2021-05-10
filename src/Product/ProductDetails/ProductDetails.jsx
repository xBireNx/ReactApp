import React, { useEffect } from "react";
import {Link, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { productdetails } from "../../Action/ProductAction";
import './ProductDetails.css';
import {CartDet, CartUpdate} from '../../Action/CartAction'


export default function ProductDetails({ match }) {
    const history = useHistory()
    const pdetails = match.params.pidd;
    // console.log(pdetails);
    const DispatchMethod = useDispatch();
    const ProductCategoryww = useSelector((state) => state.productData);
    console.log(ProductCategoryww);
    const ProductDet = ProductCategoryww.ProductDetails;
    const CartDetailsss = useSelector((state) => state.cartData)
    console.log(CartDetailsss.CartDetails);
    useEffect(() => {
      DispatchMethod(productdetails(pdetails));
    }, [DispatchMethod]);

    function AddToCart(ProductDet){
        let id = ProductDet.id;
        let DataExist = CartDetailsss.CartDetails.find((e)=>(
          e.id===id
        ))
        console.log(DataExist);
        if(DataExist){
          DispatchMethod(CartUpdate(DataExist, id))
        }
        console.log(id);
        DispatchMethod(CartDet(ProductDet));
        history.push('/Cart')
    }

    return (
        <div>
			<div className="wrapper">
				<div className="product-img">
					<img src={ProductDet.image} height="420" width="327" />
				</div>
				<div className="product-info">
					<div className="product-text">
						<h1>{ProductDet.title}</h1>
						<h2>{ProductDet.category}</h2>
						<p>{ProductDet.description}</p>
					</div>
				<div className="product-price-btn">
					<p><span>{ProductDet.price}</span>$</p>
					<button type="button" onClick={()=>AddToCart(ProductDet)} >Add to cart</button>
				</div>
			</div>
		</div>

        </div>
      );
    }
import React from 'react'
import {useSelector} from 'react-redux';

export default function Order() {
  const CartProduct = useSelector((state) => state.cartData)
    return (
        <div>
             {
                CartProduct.CartDetails.map((e) => (
                    <div>Thanks for order {e.title}. You will get your order soon.</div>
                ))
             }
        </div>
    )
}

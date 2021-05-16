import React from 'react'
import {useSelector} from 'react-redux';
import './Order.css'

export default function Order() {
  const CartProduct = useSelector((state) => state.cartData)
    return (
        <div>
            
        
        <div className="card">
          <h1>Order Successfull.</h1>
          <center><img className='order-img' src='https://i.ibb.co/SvQPwmn/kisspng-milkshake-handshake-clip-art-shake-hands-5ac07f0c0de175-7577401415225648760569.png'/></center>
          {
                CartProduct.CartDetails.map((e) => (
                    <div>Thanks for order {e.title}. You will get your order soon.</div>
                ))
             }
        </div>
        </div>
    )
}

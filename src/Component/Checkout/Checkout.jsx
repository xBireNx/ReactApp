import React from 'react'
import './Checkout.css'
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom'


export default function Checkout() {
  const history = useHistory()

  const CartProduct = useSelector((state) => state.cartData)
    console.log(CartProduct.CartDetails);

    function orderpage(){
      history.push('/Order')
  }
    return (
        <div>
          {
                CartProduct.CartDetails.map((e) => (
            <div className='container'>
  <div className='window'>
    <div className='order-info'>
      <div className='order-info-content'>
        <h2>Order Summary</h2>
                <div className='line'></div>
        <table className='order-table'>
          <tbody>
            <tr>
              <td><img src={e.image} className='full-width'></img>
              </td>
              <td>
                <br/> {e.title}<br/>
              </td>

            </tr>
            <tr>
              <td>
                <div className='price'>${e.price}</div>
              </td>
            </tr>
          </tbody>

        </table>
        <div className='line'></div>
        <div className='total'>
          <span style={{float:'left'}}>
            TOTAL
          </span>
          <span style={{float:'right', textAlign:'right'}}>
            ${e.price}
          </span>
        </div>
</div>
</div>
      
        <div className='credit-info'>
          <div className='credit-info-content'>
            <table className='half-input-table'>
              <tr><td>Please select your card: </td><td><div className='dropdown' id='card-dropdown'><div className='dropdown-btn' id='current-card'>Visa</div>
                <div className='dropdown-select'>
                <ul>
                  <li>Master Card</li>
                  <li>American Express</li>
                  </ul></div>
                </div>
               </td></tr>
            </table>
            <img src='https://dl.dropboxusercontent.com/s/ubamyu6mzov5c80/visa_logo%20%281%29.png' height='80' className='credit-card-image' id='credit-card-image'></img>
            Card Number
            <input className='input-field' type='text' required></input>
            Card Holder
            <input className='input-field'  type='text' required></input>
            <table className='half-input-table'>
              <tr>
                <td> Expires
                  <input className='input-field' type='text' required></input>
                </td>
                <td>CVC
                  <input className='input-field' type='text' required></input>
                </td>
              </tr>
            </table>
            <button className='pay-btn' type='submit'  onClick={()=>orderpage()} >Checkout</button>

          </div>

        </div>
      </div>
</div>
 ))}
        </div>
    )
}

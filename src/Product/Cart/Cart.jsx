import React, {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {Link, useHistory} from 'react-router-dom'
import './Cart.css'

export default function Cart() {
    const history = useHistory()
    const [value, setValue] = React.useState('');
    var totalval = 0;
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const CartDetailss = useSelector((state) => state.cartData)
    console.log(CartDetailss.CartDetails);
    
    CartDetailss.CartDetails.map((add)=>{
        console.log(add.price);
         totalval = (value*add.price) 
    })

    function CartShop(){
        history.push('/Order')
    }

    return (
        <div>
            {
                CartDetailss.CartDetails.map((e) => (
                    <div className="col-lg-8 mx-auto">
                        <ul className="list-group shadow">
                            <li className="list-group-item">
                            <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                                <div className="media-body order-2 order-lg-1">
                                <h5 className="mt-0 font-weight-bold mb-2">
                                    <Link to={`/ProductDetails/${e.id}`}>{e.title}</Link>
                                </h5>
                                <div className="d-flex align-items-center justify-content-between mt-1">
                                    <h6 className="font-weight-bold my-2">$: {totalval}</h6>
                                </div>
                                <div>
                                    <label for="quantity">Quantity:</label>
                                    <input type="number" name="quantity" value={value} onChange={handleChange}/>
                                </div>
                                <div>
                                    {/* <button className='cart-button' type='submit' disabled={!value} onClick={()=>CartShop()} >Order</button> */}
                                </div>
                                </div><img src={e.image} alt="Generic placeholder image" width="200" className="ml-lg-5 order-1 order-lg-2"/>
                            </div>
                            </li>
                        </ul>
                    </div>
                ))
            }
            <div className="row">
  <div className="col-75">
    <div className="container">
      <form>
                    <div className="row">
          <div className="col-50">
            <h3>Billing Address</h3>
            <label for="fname"><i className="fa fa-user"></i> Full Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Shashwat Biren" required/>
            <label for="email"><i className="fa fa-envelope"></i> Email</label>
            <input type="text" id="email" name="email" placeholder="name@example.com" required/>
            <label for="adr"><i className="fa fa-address-card-o"></i> Address</label>
            <input type="text" id="adr" name="address" placeholder="15th Street" required/>
            <label for="city"><i className="fa fa-institution"></i> City</label>
            <input type="text" id="city" name="city" placeholder="New Delhi" required/>

            <div className="row">
              <div className="col-50">
                <label for="state">State</label>
                <input type="text" id="state" name="state" placeholder="Delhi" required/>
              </div>
              <div className="col-50">
                <label for="zip">Zip</label>
                <input type="text" id="zip" name="zip" placeholder="100001" required/>
              </div>
            </div>
          </div>

          <div className="col-50">
            <h3>Payment</h3>
            <label for="fname">Accepted Cards</label>
            <div className="icon-container">
              <i className="fa fa-cc-visa" style={{color:'navy'}}></i>
              <i className="fa fa-cc-amex" style={{color:'blue'}}></i>
              <i className="fa fa-cc-mastercard" style={{color:'red'}}></i>
              <i className="fa fa-cc-discover" style={{color:'orange'}}></i>
            </div>
            <label for="cname">Name on Card</label>
            <input type="text" id="cname" name="cardname" placeholder="John More Doe" required/>
            <label for="ccnum">Credit card number</label>
            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" required/>
            <label for="expmonth">Exp Month</label>
            <input type="text" id="expmonth" name="expmonth" placeholder="September" required/>
            <div className="row">
              <div className="col-50">
                <label for="expyear">Exp Year</label>
                <input type="text" id="expyear" name="expyear" placeholder="2018" required/>
              </div>
              <div className="col-50">
                <label for="cvv">CVV</label>
                <input type="text" id="cvv" name="cvv" placeholder="352" required/>
              </div>
            </div>
          </div>
          
        <input className='cart-button' type='submit' disabled={!value} onClick={()=>CartShop()}  value="Continue to checkout" className="btn"/>
            </div>
      </form>
  </div>
        </div>
        </div>

        </div>
    )
}

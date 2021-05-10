import React, {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import {Link, useHistory} from 'react-router-dom'


export default function Cart() {
    const history = useHistory()
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const CartDetailss = useSelector((state) => state.cartData)
    console.log(CartDetailss.CartDetails);

    function CartShop(){
        history.push('/Checkout')
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
                                    <h6 className="font-weight-bold my-2">Rs: {e.price}*{value}</h6>
                                </div>
                                <div>
                                    <label for="quantity">Quantity:</label>
                                    <input type="number" name="quantity" defaultValue={e.Quantity} value={value} onChange={handleChange}/>
                                </div>
                                <div>
                                    <button type='submit' disabled={!value} onClick={()=>CartShop()} >click</button>
                                </div>
                                </div><img src={e.image} alt="Generic placeholder image" width="200" className="ml-lg-5 order-1 order-lg-2"/>
                            </div>
                            </li>
                        </ul>
                    </div>
                ))
            }
        </div>
    )
}

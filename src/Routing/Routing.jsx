import React from 'react'
import Navii from '../Layout/Navbar/Navii'
import { Switch , BrowserRouter , Route , Redirect } from 'react-router-dom'
import Registration from '../Auth/Registration/Registration'
import ProductCategory from '../Product/ProductCategory/ProductCategory'
import ProductList from '../Product/ProductList/ProductList'
import ProductDetails from '../Product/ProductDetails/ProductDetails'
import Cart from '../Product/Cart/Cart'
import Home from '../Component/Home'
import Checkout from '../Component/Checkout/Checkout'
import Order from '../Component/Order/Order'
import Footer from '../Layout/Footer/Footer'
import Login from '../Auth/Login/Login'
export default function Routing() {
    return (
        <div>
            <BrowserRouter>
                <Navii></Navii>
                <Switch>
                    <Route exact path="/">
                    <Redirect to ="/Home"/>
                    </Route>
                    <Route exact path='/Home' component={Home}/>
                    <Route exact path='/Registration' component={Registration}/>
                    <Route exact path='/Category' component={ProductCategory}/>
                    <Route exact path='/ProductList/:cname' component={ProductList}/>
                    <Route exact path='/ProductDetails/:pidd' component={ProductDetails}/>
                    <Route exact path='/Cart' component={Cart}/>
                    <Route exact path='/Checkout' component={Checkout}/>
                    <Route exact path='/Order' component={Order}/>
                    <Route exact path='/Login' component={Login}/>
                </Switch>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

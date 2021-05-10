import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux';
import {ProductCategories} from '../Action/ProductAction'
import {Card,CardGroup} from 'react-bootstrap'

export default function Home() {
    const DispatchMethod = useDispatch()
    const HomeProductCategorys = useSelector((state) => state.productData)
    console.log(HomeProductCategorys);
    
    useEffect(() =>{
        DispatchMethod( ProductCategories() );
    }, [DispatchMethod])

    return (
        <div>
            <h1>Category</h1>
           <CardGroup>
            {
             HomeProductCategorys.AllCate.map((e)=>(
         <Card style={{ width: '18rem' }}>
            <Card.Body key={e}>
                <Card.Title>{e}</Card.Title>
                <Link to={`/ProductList/${e}`}>Product List</Link>
            </Card.Body>
        </Card>
            ))
            }
    </CardGroup>
        </div>
    )
}

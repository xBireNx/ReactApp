import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux';
import {ProductCategories} from '../../Action/ProductAction'
import {Card,CardGroup} from 'react-bootstrap'

export default function ProductCategory() {
    const DispatchMethod = useDispatch()
    const ProductCategoryss = useSelector((state) => state.productData)
    console.log(ProductCategoryss);
    
    useEffect(() =>{
        DispatchMethod( ProductCategories() );
    }, [DispatchMethod])

    return (
         <div>
            <CardGroup>
            {
             ProductCategoryss.AllCate.map((e)=>(
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

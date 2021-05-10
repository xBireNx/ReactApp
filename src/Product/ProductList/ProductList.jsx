import React, { useEffect } from "react";
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { subcatagory } from "../../Action/ProductAction";
import { Card,Container,Row } from 'react-bootstrap';

export default function ProductList({ match }) {
  const cdetails = match.params.cname;
  console.log(cdetails);
  const DispatchMethod = useDispatch();
  const ProductCategoryw = useSelector((state) => state.productData);
  console.log(ProductCategoryw);
  
  useEffect(() => {
    DispatchMethod(subcatagory(cdetails));
  }, [DispatchMethod]);
  return (
    <div>
      <div className="container py-5">

      <div className="row">
        {ProductCategoryw.Specific_CategoryData.map((e) => (
          
        <div className="col-lg-8 mx-auto">
          <ul className="list-group shadow">
            <li className="list-group-item">
              <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                <div className="media-body order-2 order-lg-1">
                  <h5 className="mt-0 font-weight-bold mb-2">
                    <Link to={`/ProductDetails/${e.id}`}>{e.title}</Link>
                  </h5>
                  <div className="d-flex align-items-center justify-content-between mt-1">
                    <h6 className="font-weight-bold my-2">{e.price}</h6>
                  </div>
                </div><img src={e.image} alt="Generic placeholder image" width="200" className="ml-lg-5 order-1 order-lg-2"/>
              </div>
            </li>
          </ul>
        </div>
        ))}
      </div>
    </div>

    </div>
  );
}
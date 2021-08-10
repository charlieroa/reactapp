import React from 'react'
import ItemCount from './ItemCount'

const Item = ({producto}) => {
    return ( 

        <div className="container pt-md-3 pb-5 mb-md-3">         
          <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
          <div className="card product-card">
            <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html">
            <img src={producto.image} alt="Product"></img>
            </a>
            <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">{producto.category}</a>
              <h3 className="product-title fs-sm"><a href="shop-single-v1.html">{producto.title}</a></h3>
              <div className="d-flex justify-content-between">
                <div className="product-price"><span className="text-accent">{producto.price}</span></div>
                <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i><i className="star-rating-icon ci-star"></i>
                </div>
              </div>
             
            </div>  
            <ItemCount />
          </div>
       
         </div>
         </div>
        </div>

 
     );
}
 
export default Item;

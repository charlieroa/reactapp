import React from 'react'
import ItemCount from './ItemCount';

const ItemList = ({producto}) => {
    return (
        <div>
            <div className="container pt-md-3 pb-5 mb-md-3">         
          <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
          <div className="card product-card">
            <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"></a>
            <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Categoría</a>
              <h3 className="product-title fs-sm"><a href="shop-single-v1.html">{producto.nombre}</a></h3>
              <div className="d-flex justify-content-between">
                <div className="product-price"><span className="text-accent">{producto.precio}</span></div>
                <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i><i className="star-rating-icon ci-star"></i>
                </div>
              </div>
            </div>  
            <ItemCount />        
          </div>
       
         </div>
         </div>
        </div>

         </div>
      
    )
}

export default ItemList

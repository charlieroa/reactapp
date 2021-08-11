import React from 'react'
import {Link,} from "react-router-dom";
import ItemCount from "./ItemCount";



const ItemDetail = ({datos}) => {
    return (
        <div>
          <div className="page-title-overlap bg-dark pt-4">
      <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
        <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start">             
              <Link to="/" className="breadcrumb-item"><i className="ci-home"></i>  Home </Link>           
            </ol>
          </nav>
        </div>
        <div className="order-lg-1 pe-lg-4 text-center text-lg-start">
          <h1 className="h3 text-light mb-0">{datos.title}</h1>
        </div>
      </div>
    </div>
    <div className="container">    
      <div className="bg-light shadow-lg rounded-3 px-4 py-3 mb-5">
        <div className="px-lg-3">
          <div className="row">
          
          <div className="col-lg-7 pe-lg-0 pt-lg-4">
              <div className="product-gallery">
                <div className="product-gallery-preview order-sm-2">
                  <div className="product-gallery-preview-item active" id="first"><img className="image-zoom" src={datos.image} data-zoom={datos.image}  alt="Product image"></img>
                    <div className="image-zoom-pane"></div>
                  </div>             
                 </div>                
              </div>
            </div>
            <div className="col-lg-5 pt-4 pt-lg-0">
              <div className="product-details ms-auto pb-3">
                <div className="d-flex justify-content-between align-items-center mb-2"><a href="#reviews" data-scroll>
                    <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
                    </div><span className="d-inline-block fs-sm text-body align-middle mt-1 ms-1">74 Reviews</span></a>
                  <button className="btn-wishlist me-0 me-lg-n3" type="button" data-bs-toggle="tooltip" title="Add to wishlist"><i className="ci-heart"></i></button>
                </div>
                <div className="fs-sm mb-4"><span className="text-heading fw-medium me-1">Categoria:</span><span className="text-muted" id="colorOption">{datos.category}</span></div>
             
                <div className="mb-3"><span className="h3 fw-normal text-accent me-1">{datos.price}</span>
                  <del className="text-muted fs-lg me-3">$25.<small>00</small></del><span className="badge bg-danger badge-shadow align-middle mt-n2">Sale</span>
                </div>
                
                <div className="accordion mb-4" id="productPanels">
                  <div className="accordion-item">
                    <h3 className="accordion-header"><a className="accordion-button" href="#productInfo" role="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="productInfo"><i className="ci-announcement text-muted fs-lg align-middle mt-n1 me-2"></i>Información del producto</a></h3>
                    <div className="accordion-collapse collapse show" id="productInfo" data-bs-parent="#productPanels">
                      <div className="accordion-body">
                        <h6 className="fs-sm mb-2">Descripción</h6>
                     <p>{datos.description}</p>
                      </div>
                    </div>
                  </div>                             
                </div>
             
                <ItemCount />
               
                </div>
            </div>
            
          </div>
        </div>
      </div>
   </div>


        </div>
    )
}

export default ItemDetail

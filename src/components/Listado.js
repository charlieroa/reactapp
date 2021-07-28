import React, {useState} from 'react'


        const Listado = () => {

        const [contador, setcontador] = useState(0);

        const aumentar = () => {
          setcontador(contador + 1)
        };

        const disminuir = () => {
          setcontador(contador - 1)
        };


    return (
        <div>
          <div className="row pt-4 mx-n2">
          <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
          <div className="card product-card">
            <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"></a>
            <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Categoría</a>
              <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Producto 1</a></h3>
              <div className="d-flex justify-content-between">
                <div className="product-price"><span className="text-accent">$10.000</span></div>
                <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i><i className="star-rating-icon ci-star"></i>
                </div>
              </div>
            </div>
            <div className="card-body card-body-hidden">
              <div className="text-center pb-2">               
                <div className="form-check form-option form-check-inline mb-2">
                  <input className="form-check-input" type="radio" name="size1" id="s-80" checked></input>
                  <label className="form-option-label" for="s-80" onClick={disminuir}>-</label>
                </div>
                <div className="form-check form-option form-check-inline mb-2">
                  <input className="form-check-input" type="radio" name="size1" id="s-85"></input>
                  <label className="form-option-label" for="s-85">{contador}</label>
                </div> 
                <div className="form-check form-option form-check-inline mb-2">
                  <input className="form-check-input" type="radio" name="size1" id="s-85"></input>
                  <label className="form-option-label" for="s-85" onClick={aumentar}>+</label>
                </div>               
              </div>
              <button className="btn btn-primary btn-sm d-block w-100 mb-2" type="button"><i className="ci-cart fs-sm me-1"></i>Agregar al carrito</button>
              </div>
          </div>
         </div>
         <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
          <div className="card product-card">
            <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"></a>
            <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Categoría</a>
              <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Producto 2</a></h3>
              <div className="d-flex justify-content-between">
                <div className="product-price"><span className="text-accent">$10.000</span></div>
                <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i><i className="star-rating-icon ci-star"></i>
                </div>
              </div>
            </div>
            <div className="card-body card-body-hidden">
              <div className="text-center pb-2">               
                <div className="form-check form-option form-check-inline mb-2">
                  <input className="form-check-input" type="radio" name="size1" id="s-80" checked></input>
                  <label className="form-option-label" for="s-80" onClick={disminuir}>-</label>
                </div>
                <div className="form-check form-option form-check-inline mb-2">
                  <input className="form-check-input" type="radio" name="size1" id="s-85"></input>
                  <label className="form-option-label" for="s-85">{contador}</label>
                </div> 
                <div className="form-check form-option form-check-inline mb-2">
                  <input className="form-check-input" type="radio" name="size1" id="s-85"></input>
                  <label className="form-option-label" for="s-85" onClick={aumentar}>+</label>
                </div>               
              </div>
              <button className="btn btn-primary btn-sm d-block w-100 mb-2" type="button"><i className="ci-cart fs-sm me-1"></i>Agregar al carrito</button>
              </div>
          </div>
         </div>
         <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
          <div className="card product-card">
            <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"></a>
            <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Categoría</a>
              <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Producto 3</a></h3>
              <div className="d-flex justify-content-between">
                <div className="product-price"><span className="text-accent">$10.000</span></div>
                <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i><i className="star-rating-icon ci-star"></i>
                </div>
              </div>
            </div>
            <div className="card-body card-body-hidden">
              <div className="text-center pb-2">               
                <div className="form-check form-option form-check-inline mb-2">
                  <input className="form-check-input" type="radio" name="size1" id="s-80" checked></input>
                  <label className="form-option-label" for="s-80" onClick={disminuir}>-</label>
                </div>
                <div className="form-check form-option form-check-inline mb-2">
                  <input className="form-check-input" type="radio" name="size1" id="s-85"></input>
                  <label className="form-option-label" for="s-85">{contador}</label>
                </div> 
                <div className="form-check form-option form-check-inline mb-2">
                  <input className="form-check-input" type="radio" name="size1" id="s-85"></input>
                  <label className="form-option-label" for="s-85" onClick={aumentar}>+</label>
                </div>               
              </div>
              <button className="btn btn-primary btn-sm d-block w-100 mb-2" type="button"><i className="ci-cart fs-sm me-1"></i>Agregar al carrito</button>
              </div>
          </div>
         </div>
         <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
          <div className="card product-card">
            <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"></a>
            <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Categoría</a>
              <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Producto 4</a></h3>
              <div className="d-flex justify-content-between">
                <div className="product-price"><span className="text-accent">$10.000</span></div>
                <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i><i className="star-rating-icon ci-star"></i>
                </div>
              </div>
            </div>
            <div className="card-body card-body-hidden">
              <div className="text-center pb-2">               
                <div className="form-check form-option form-check-inline mb-2">
                  <input className="form-check-input" type="radio" name="size1" id="s-80" checked></input>
                  <label className="form-option-label" for="s-80" onClick={disminuir}>-</label>
                </div>
                <div className="form-check form-option form-check-inline mb-2">
                  <input className="form-check-input" type="radio" name="size1" id="s-85"></input>
                  <label className="form-option-label" for="s-85">{contador}</label>
                </div> 
                <div className="form-check form-option form-check-inline mb-2">
                  <input className="form-check-input" type="radio" name="size1" id="s-85"></input>
                  <label className="form-option-label" for="s-85" onClick={aumentar}>+</label>
                </div>               
              </div>
              <button className="btn btn-primary btn-sm d-block w-100 mb-2" type="button"><i className="ci-cart fs-sm me-1"></i>Agregar al carrito</button>
              </div>
          </div>
         </div>
       
         </div>
        </div>
    )
}

export default Listado

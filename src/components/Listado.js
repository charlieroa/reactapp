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
          <div class="row pt-4 mx-n2">
          <div class="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
          <div class="card product-card">
            <button class="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i class="ci-heart"></i></button><a class="card-img-top d-block overflow-hidden" href="shop-single-v1.html"></a>
            <div class="card-body py-2"><a class="product-meta d-block fs-xs pb-1" href="#">Categoría</a>
              <h3 class="product-title fs-sm"><a href="shop-single-v1.html">Producto 1</a></h3>
              <div class="d-flex justify-content-between">
                <div class="product-price"><span class="text-accent">$10.000</span></div>
                <div class="star-rating"><i class="star-rating-icon ci-star-filled active"></i><i class="star-rating-icon ci-star-filled active"></i><i class="star-rating-icon ci-star-filled active"></i><i class="star-rating-icon ci-star-half active"></i><i class="star-rating-icon ci-star"></i>
                </div>
              </div>
            </div>
            <div class="card-body card-body-hidden">
              <div class="text-center pb-2">               
                <div class="form-check form-option form-check-inline mb-2">
                  <input class="form-check-input" type="radio" name="size1" id="s-80" checked></input>
                  <label class="form-option-label" for="s-80" onClick={disminuir}>-</label>
                </div>
                <div class="form-check form-option form-check-inline mb-2">
                  <input class="form-check-input" type="radio" name="size1" id="s-85"></input>
                  <label class="form-option-label" for="s-85">{contador}</label>
                </div> 
                <div class="form-check form-option form-check-inline mb-2">
                  <input class="form-check-input" type="radio" name="size1" id="s-85"></input>
                  <label class="form-option-label" for="s-85" onClick={aumentar}>+</label>
                </div>               
              </div>
              <button class="btn btn-primary btn-sm d-block w-100 mb-2" type="button"><i class="ci-cart fs-sm me-1"></i>Agregar al carrito</button>
              </div>
          </div>
         </div>
         <div class="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
          <div class="card product-card">
            <button class="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i class="ci-heart"></i></button><a class="card-img-top d-block overflow-hidden" href="shop-single-v1.html"></a>
            <div class="card-body py-2"><a class="product-meta d-block fs-xs pb-1" href="#">Categoría</a>
              <h3 class="product-title fs-sm"><a href="shop-single-v1.html">Producto 2</a></h3>
              <div class="d-flex justify-content-between">
                <div class="product-price"><span class="text-accent">$10.000</span></div>
                <div class="star-rating"><i class="star-rating-icon ci-star-filled active"></i><i class="star-rating-icon ci-star-filled active"></i><i class="star-rating-icon ci-star-filled active"></i><i class="star-rating-icon ci-star-half active"></i><i class="star-rating-icon ci-star"></i>
                </div>
              </div>
            </div>
            <div class="card-body card-body-hidden">
              <div class="text-center pb-2">               
                <div class="form-check form-option form-check-inline mb-2">
                  <input class="form-check-input" type="radio" name="size1" id="s-80" checked></input>
                  <label class="form-option-label" for="s-80" onClick={disminuir}>-</label>
                </div>
                <div class="form-check form-option form-check-inline mb-2">
                  <input class="form-check-input" type="radio" name="size1" id="s-85"></input>
                  <label class="form-option-label" for="s-85">{contador}</label>
                </div> 
                <div class="form-check form-option form-check-inline mb-2">
                  <input class="form-check-input" type="radio" name="size1" id="s-85"></input>
                  <label class="form-option-label" for="s-85" onClick={aumentar}>+</label>
                </div>               
              </div>
              <button class="btn btn-primary btn-sm d-block w-100 mb-2" type="button"><i class="ci-cart fs-sm me-1"></i>Agregar al carrito</button>
              </div>
          </div>
         </div>
         <div class="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
          <div class="card product-card">
            <button class="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i class="ci-heart"></i></button><a class="card-img-top d-block overflow-hidden" href="shop-single-v1.html"></a>
            <div class="card-body py-2"><a class="product-meta d-block fs-xs pb-1" href="#">Categoría</a>
              <h3 class="product-title fs-sm"><a href="shop-single-v1.html">Producto 3</a></h3>
              <div class="d-flex justify-content-between">
                <div class="product-price"><span class="text-accent">$10.000</span></div>
                <div class="star-rating"><i class="star-rating-icon ci-star-filled active"></i><i class="star-rating-icon ci-star-filled active"></i><i class="star-rating-icon ci-star-filled active"></i><i class="star-rating-icon ci-star-half active"></i><i class="star-rating-icon ci-star"></i>
                </div>
              </div>
            </div>
            <div class="card-body card-body-hidden">
              <div class="text-center pb-2">               
                <div class="form-check form-option form-check-inline mb-2">
                  <input class="form-check-input" type="radio" name="size1" id="s-80" checked></input>
                  <label class="form-option-label" for="s-80" onClick={disminuir}>-</label>
                </div>
                <div class="form-check form-option form-check-inline mb-2">
                  <input class="form-check-input" type="radio" name="size1" id="s-85"></input>
                  <label class="form-option-label" for="s-85">{contador}</label>
                </div> 
                <div class="form-check form-option form-check-inline mb-2">
                  <input class="form-check-input" type="radio" name="size1" id="s-85"></input>
                  <label class="form-option-label" for="s-85" onClick={aumentar}>+</label>
                </div>               
              </div>
              <button class="btn btn-primary btn-sm d-block w-100 mb-2" type="button"><i class="ci-cart fs-sm me-1"></i>Agregar al carrito</button>
              </div>
          </div>
         </div>
         <div class="col-lg-3 col-md-4 col-sm-6 px-2 mb-4">
          <div class="card product-card">
            <button class="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i class="ci-heart"></i></button><a class="card-img-top d-block overflow-hidden" href="shop-single-v1.html"></a>
            <div class="card-body py-2"><a class="product-meta d-block fs-xs pb-1" href="#">Categoría</a>
              <h3 class="product-title fs-sm"><a href="shop-single-v1.html">Producto 4</a></h3>
              <div class="d-flex justify-content-between">
                <div class="product-price"><span class="text-accent">$10.000</span></div>
                <div class="star-rating"><i class="star-rating-icon ci-star-filled active"></i><i class="star-rating-icon ci-star-filled active"></i><i class="star-rating-icon ci-star-filled active"></i><i class="star-rating-icon ci-star-half active"></i><i class="star-rating-icon ci-star"></i>
                </div>
              </div>
            </div>
            <div class="card-body card-body-hidden">
              <div class="text-center pb-2">               
                <div class="form-check form-option form-check-inline mb-2">
                  <input class="form-check-input" type="radio" name="size1" id="s-80" checked></input>
                  <label class="form-option-label" for="s-80" onClick={disminuir}>-</label>
                </div>
                <div class="form-check form-option form-check-inline mb-2">
                  <input class="form-check-input" type="radio" name="size1" id="s-85"></input>
                  <label class="form-option-label" for="s-85">{contador}</label>
                </div> 
                <div class="form-check form-option form-check-inline mb-2">
                  <input class="form-check-input" type="radio" name="size1" id="s-85"></input>
                  <label class="form-option-label" for="s-85" onClick={aumentar}>+</label>
                </div>               
              </div>
              <button class="btn btn-primary btn-sm d-block w-100 mb-2" type="button"><i class="ci-cart fs-sm me-1"></i>Agregar al carrito</button>
              </div>
          </div>
         </div>
       
         </div>
        </div>
    )
}

export default Listado

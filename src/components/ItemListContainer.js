import React from 'react'
import Datos from './Datos';


const ItemListContainer = ({titulo}) => {
      
      

    return (
        <>
  
  <section className="bg-darker py-5 background-ecommerce">
      <div className="container pb-5">
        <div className="row justify-content-center pb-5">
          <div className="col-xl-6 col-lg-7 col-md-8 col-sm-10 text-center">
            <h5 className="text-light fw-light">Comida saludable</h5>
            <div className="h1 text-light mb-3 pb-4">{titulo}             
            </div><a className="btn btn-primary" href="#cuisine" data-scroll>Ver productos</a>
          </div>
        </div>
      </div>
    </section>
    <section class="container pt-md-3 pb-5 mb-md-3">
      <h2 class="h3 text-center">Trending products</h2>
      <div class="row pt-4 mx-n2">
    <Datos />  
    </div>
      
      </section>
  
        </>
    )
}

export default ItemListContainer

import React, {useState, useEffect} from 'react'
import ItemList from "./ItemList";

const ItemListContainer = ({greeting}) => {
      
      
  const [productos, setproductos] = useState([])

  useEffect(() => {
      fetchData()
  }, [])

  const fetchData = async () => {
      const data = await fetch('https://fakestoreapi.com/products')
      const products = await data.json()
       console.log(products)
      setproductos(products)
  }


    return (
        <>
        
  <section className="bg-darker py-5 background-ecommerce">
      <div className="container pb-5">
        <div className="row justify-content-center pb-5">
          <div className="col-xl-6 col-lg-7 col-md-8 col-sm-10 text-center">
            <h5 className="text-light fw-light">Comida saludable</h5>
            <div className="h1 text-light mb-3 pb-4">hola tienda           
            </div><a className="btn btn-primary" href="#cuisine" data-scroll>Ver productos</a>
          </div>
        </div>
      </div>
    </section>
    <section class="container pt-md-3 pb-5 mb-md-3">
    <ItemList productos ={productos} />
    </section>
   
   
        </>
    )
}

export default ItemListContainer

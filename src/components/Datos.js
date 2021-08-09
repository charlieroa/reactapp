import React, {useState, useEffect} from 'react'
import ItemList from './ItemList';

const Datos = () => {
  

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
        <div>
          {productos.map(producto => (
            <ItemList 
                producto ={producto}
            />
          ))}
        </div>
    )
}

export default Datos


import React from 'react'
import { useParams } from 'react-router'
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

   
    // console.log(useParams());
    const {id} = useParams()
    console.log(id)

    const [datos, setdatos] = React.useState([])

    React.useEffect(() => {
        const obtenerDatos = async () => {
            const data = await fetch(`https://fakestoreapi.com/products/${id}`)
            const users = await data.json()
            setdatos(users)
        }
        obtenerDatos()
    }, [id])

    

    return (
        <div>

        <ItemDetail datos ={datos} />
           
        </div>
    )
}

export default ItemDetailContainer

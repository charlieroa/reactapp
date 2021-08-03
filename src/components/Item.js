import React, {useState} from 'react'
import ItemList from './ItemList';


const Item = () => {

    const mostrarRestultado = new Promise((resolve, reject) => {

        setTimeout(() => {
            let aceptado = true;

            if(aceptado){
                resolve('mostrar data');
            } else {
                reject('No se puede conectar a la base de datos')
            }

        }, 2000);
    });
  
    mostrarRestultado.then(productos =>{
        console.log(productos);
    })
 


    const [productos, setProductos] = useState([
    
        {id:1, nombre: 'plato1', precio: 25000},
        {id:2, nombre: 'plato2', precio: 35000},
        {id:3, nombre: 'plato3', precio: 28000},
        {id:4, nombre: 'plato4', precio: 45000}      
    ]);
    
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

export default Item

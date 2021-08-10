import Item from "./Item";
import {Link,} from "react-router-dom";

const productoList = ({productos}) => {
    return ( 
        <div>
          {productos.map(producto => (  
           <Link to={`/categoria/${producto.id}`}>
           <Item key={producto.id} producto ={producto}/>  
           </Link>      
          ))}
        </div>
     );
}
 
export default productoList;
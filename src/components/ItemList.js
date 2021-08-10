import Item from "./Item";

const productoList = ({productos}) => {
    return ( 
        <div>
          {productos.map(producto => (
            <Item producto ={producto}
            />
          ))}
        </div>
     );
}
 
export default productoList;
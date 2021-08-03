import React, {useState} from 'react'


        const ItemCount = () => {

        const [contador, setcontador] = useState(0);

        const aumentar = () => {
          setcontador(contador + 1)
        };

        const disminuir = () => {
         contador > 0 ? setcontador(contador - 1) : setcontador(0);         
        };


    return (
        <div>
          
         
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
       
          
    
        
    )
}

export default ItemCount

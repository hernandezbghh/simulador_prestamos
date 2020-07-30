import React, {useState, Fragment} from 'react';
import {calcularTotal} from "../helpers";

const  Formulario= ({cantidad, guardarCantidad, plazo, guardarPlazo, guardarTotal, guardarCargando}) => {
    //Definir state para mensajes
    const[error, guardarError]=useState(false);
    const calcularPrestamo=(e)=>{
    e.preventDefault();
    //Validar datos no vacíos
    if(cantidad===0 || isNaN(cantidad) || plazo===""){
        guardarError(true);
        guardarCargando(false);
        return;
    }else{
        guardarError(false);
        //Habilitar el spinner
        guardarCargando(true);
        //Pasar el spinner
        setTimeout(
            function(){
                //Calcular préstamo después de 3 segundos
                const total=calcularTotal(cantidad, plazo);
                //Una vez calculado guardar el total
                guardarTotal(total);
                guardarCargando(false);
            }, 3000
        );
  
    }
}  
 
    return (  
     <Fragment>
     <form  onSubmit={calcularPrestamo}>
          <div className="row">
              <div>
                  <label>Cantidad Préstamo</label>
                  <input 
                      className="u-full-width" type="number" placeholder="Ejemplo: 3000" 
                      onChange={e=>guardarCantidad(parseInt(e.target.value))}
                  />
              </div>
              <div>
                  <label>Plazo para Pagar</label>
                  <select
                      defaultValue="Seleccionar"
                      className="u-full-width"
                      onChange={e=>guardarPlazo(parseInt(e.target.value))}
                  >
                      <option disabled="disabled">Seleccionar</option>
                      <option value="3">3 meses</option>
                      <option value="6">6 meses</option>
                      <option value="12">12 meses</option>
                      <option value="24">24 meses</option>
                  </select>
              </div>
              <div>
                  <input 
                      type="submit" 
                      value="Calcular" 
                      className="button-primary u-full-width" 
                  />
              </div>
          </div>
  </form>
     {(error)? <p className="error">Todos los campos son obligatorios</p> : null }
     </Fragment>
    );
}
 
export default Formulario;
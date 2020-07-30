//Para no tener que colocar código extra o elementos para retornar los componentes se usa Fragment
//Un fragment es como crear un div pero que no se va a mostrar
import React, { Fragment, useState } from 'react';
import Header from "./componentes/Header";
import Formulario from './componentes/Formulario';
import Mensaje from './componentes/Mensaje';
import Resultado from './componentes/Resultado';
import Spinner from './componentes/Spinner';


function App(){
    const [cantidad, guardarCantidad]=useState(0);
    const [plazo, guardarPlazo]=useState("");
    const [total, guardarTotal]=useState(0);
    const [cargando, guardarCargando]=useState(false);   
    
    let componente;
    if(cargando){
      componente=<Spinner />
    }else if(total===0 || isNaN(total) || cantidad===0 || isNaN(cantidad) || cargando===true){
      componente= <Mensaje /> 
    }else{
        componente= <Resultado 
        total={total}
        plazo={plazo}
        cantidad={cantidad}
      />
    }
    return (
      <Fragment>
        {/* Llamamos al componente Header */}
        <Header 
          // Puede ser cualquier tipo de dato, función, etc.
          titulo="Cotizador de préstamos"
        />
        {/* No puedes usar la palabra class ya que es reservada para JS, debes usar className */}
        <div className="container">
          <Formulario 
            cantidad={cantidad}
            guardarCantidad={guardarCantidad}
            plazo={plazo}
            guardarPlazo={guardarPlazo}
            guardarTotal={guardarTotal}
            guardarCargando={guardarCargando}
          />
          <div className="mensajes">
             {componente}
          </div>
        </div>
      </Fragment>
    );
}

export default App;

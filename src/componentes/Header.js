//Primer paso es importar react
import React from 'react'; 

//Inicio de primer componente
//Un componente siempre es una función, siempre retornara un elemento (un div por ejemplo) que contenga otros elementos, de lo contrario marcara error y ese algo es lo que se mostrara en pantalla 
const Header = ({titulo}) => (
            <h1>{titulo}</h1>
);
 
export default Header;
//Ahora el siguiente paso es llamarlo para que se ejecute y esto se hace en App.js
//Fin de primer componente
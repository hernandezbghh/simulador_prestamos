import React from 'react'

const Resultado = ({total, plazo, cantidad}) => {
    const pagoMensual=total/plazo;
    return ( 
        <div className="u-full-width resultado">
            <h2>Resumen</h2>
            <p>La cantidad solicitada es: {cantidad}</p>
            <p>A pagar en: {plazo} meses</p>
            <p>Su pago mensual es de : {pagoMensual.toFixed(2)}</p>
            <p>Total a pagar: {total.toFixed(2)}</p>
        </div>
    )
}
 
export default Resultado;


import React from 'react'

// El componente Estatus no tiene componentes hijos.
// ESTADO: Estatus no tiene estado.
// MÉTODOS: Estatus no tiene métodos.
// PROPS: Estatus recibe de su padre la cantidad que va a mostrar dentro del span correpondiente.
// Maqueta de Estatus:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

const Estatus = ({clicksTotales}) => {
  
  return (
    <header>
      <h1> Status Posteos </h1>
      <p>Likes Totales: <span> {clicksTotales} </span></p>
    </header>
  )
}

export default Estatus
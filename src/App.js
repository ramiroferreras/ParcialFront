
// El componente App es el padre de:
// - Estatus
// - Posteos
// ESTADO: App debe manejar en su estado un número para contabilizar el total de likes.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Post.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado.

import React from 'react'
import { useState } from 'react'
import Estatus from './components/Estatus'
import Posteos from './components/Posteos'
import './index.css'

function App() {
  const [clicksTotales, setClicksTotales]= useState(0)


  const totalLikes =()=>{
    setClicksTotales(clicksTotales+1)
  }

  return (
    <div>
      <Estatus
      clicksTotales={clicksTotales} />
      <Posteos
      totalLikes={totalLikes} />
    </div>
  );
}

export default App;

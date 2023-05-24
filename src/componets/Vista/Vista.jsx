import './Vista.css'
import { useState } from 'react'

const Vista = () => {
    const [modoOscuro, setModoOscuro] = useState(false);
    const cambiarModo = () => {
        setModoOscuro(!modoOscuro);
    }  

    const estilo= modoOscuro ? "oscuro" : "claro";

  return (
    <div className={estilo}>
        <button onClick={ cambiarModo }> {modoOscuro ? "claro" : "oscuro"} </button>
        <h2>Componente Vista</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus esse accusantium cumque minus veniam vel amet praesentium dolores molestias quod, consequuntur nisi, accusamus velit, totam assumenda debitis? Debitis, voluptas commodi.</p>
    </div>
  )
}

export default Vista

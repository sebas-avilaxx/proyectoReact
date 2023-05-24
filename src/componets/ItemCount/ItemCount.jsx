import { useState, } from 'react'
const ItemCount = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if(contador<stock){
        setContador (contador + 1);
        }
    }

    const decrementar = () => {
        if(contador>inicial){
        setContador ( contador - 1);
        }
    }

  return (
    <>
    <div>
        <button onClick={decrementar}> - </button>
        <strong> {contador} </strong>
        <button onClick={incrementar}> + </button>
        <br /><br />
        </div>
        <button onClick={()=> funcionAgregar(contador)} > Agregar al carrito </button>
    </>
  )
}

export default ItemCount
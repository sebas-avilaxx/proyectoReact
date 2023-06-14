import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import "./CartWidget.css"

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  const imgCarrito = "https://img.icons8.com/material/512/shopping-cart--v1.png"
  return (
    <div>
      <Link style={{textDecoration:"none"}} to='/cart'>
        <img className='imgCarrito' src={imgCarrito} alt="Carrito de Compras" />
        {
          cantidadTotal > 0 && <strong className='itemsIndicador'> {cantidadTotal} </strong>
        }
      </Link>
    </div>
  )
} 

export default CartWidget
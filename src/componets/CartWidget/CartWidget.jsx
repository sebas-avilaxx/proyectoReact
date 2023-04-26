import "./CartWidget.css"

const CartWidget = () => {
  const imgCarrito = "https://img.icons8.com/material/512/shopping-cart--v1.png"
  return (
    <div>
      <img className='imgCarrito' src={imgCarrito} alt="Carrito de Compras" />
      <strong> 3 </strong>
    </div>
  )
}

export default CartWidget
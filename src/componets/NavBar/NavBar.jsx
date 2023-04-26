import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
const NavBar = () => {
  return (
    <header>
        <h1>Beer Yes</h1>
        <nav>
            <ul>
                <li>Accesorios</li>
                <li>Insumos</li>
                <li>Kits</li>
            </ul>
        </nav>
        <CartWidget />
    </header>
  )
}

export default NavBar
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { NavLink, Link } from "react-router-dom"


const NavBar = () => {
  return (
    <header>
        <Link to={"/"}>
            <img className="logo" src="./img/logo_cerveza.jpeg" alt="logo cerveza" />
        </Link>
        <nav>
            <ul>
                <li>
                  <NavLink activeClassName="active" className="miBtn"  to={`/categoria/2`}> Kits Clasicos </NavLink>
                </li>

                <li>
                  <NavLink activeClassName="active" className="miBtn"  to={`/categoria/3`}> Kits Premium </NavLink>
                </li>

            </ul>
        </nav>
        <CartWidget />
    </header>
  )
}

export default NavBar
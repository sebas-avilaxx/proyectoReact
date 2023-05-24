import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import { NavLink, Link } from "react-router-dom"


const NavBar = () => {
  return (
    <header>
        <Link to={"/"}>
            <h1>Beer Yes</h1>
        </Link>
        <nav>
            <ul>
                <li>
                  <NavLink to={`/categoria/2`}> Kits Clasicos </NavLink>
                </li>

                <li>
                  <NavLink to={`/categoria/3`}> Kits Premium </NavLink>
                </li>

            </ul>
        </nav>
        <CartWidget />
    </header>
  )
}

export default NavBar
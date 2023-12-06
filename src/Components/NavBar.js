import { NavLink } from "react-router-dom"
import "./NavBar.css"


function NavBar() {
    return (
        <nav>
            <NavLink
                to="/"
                className="nav-link"
            >
                Home
            </NavLink>
            <NavLink
                to="./products"
                end
                className="nav-link"
            >
                My products
            </NavLink>
            <NavLink
                to="./products/new"
                className="nav-link"
            >
                Add A Product
            </NavLink>
        </nav>
    )
}

export default NavBar
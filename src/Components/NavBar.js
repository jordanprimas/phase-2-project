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
                to="./store"
                end
                className="nav-link"
            >
                My Store
            </NavLink>
            <NavLink
                to="./product/form"
                className="nav-link"
            >
                Manage My Store
            </NavLink>
        </nav>
    )
}

export default NavBar
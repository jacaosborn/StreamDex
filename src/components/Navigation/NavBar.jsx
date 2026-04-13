import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <NavLink className="navbar__link" to="/">
        Home
      </NavLink>
      <NavLink className="navbar__link" to="/about">
        About
      </NavLink>
    </nav>
  );
}

export default NavBar;

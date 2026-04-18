import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav className="navbar">
      <button
        className={`navbar__hamburger${isOpen ? " navbar__hamburger_open" : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
      >
        <span className="navbar__hamburger-bar" />
        <span className="navbar__hamburger-bar" />
        <span className="navbar__hamburger-bar" />
      </button>

      <div className={`navbar__links${isOpen ? " navbar__links_open" : ""}`}>
        <NavLink className="navbar__link" to="/" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink className="navbar__link" to="/about" onClick={closeMenu}>
          About
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;

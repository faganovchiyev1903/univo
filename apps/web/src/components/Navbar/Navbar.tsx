import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.scss";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `navbar__link ${isActive ? "navbar__link--active" : ""}`;

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__logo-mark">U</span>

          <span className="navbar__logo-text">UNIVO</span>
        </Link>

        <nav
          id="main-navigation"
          className={`navbar__nav ${isMenuOpen ? "navbar__nav--open" : ""}`}
          aria-label="Main navigation"
        >
          <NavLink to="/" end className={navLinkClass} onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/explore" className={navLinkClass} onClick={closeMenu}>
            Explore
          </NavLink>

          <NavLink to="/community" className={navLinkClass} onClick={closeMenu}>
            Community
          </NavLink>
        </nav>

        <div className="navbar__actions">
          <Link to="/login" className="navbar__login">
            Login
          </Link>

          <Link to="/register" className="navbar__cta">
            <span>Get started</span>

            <span className="navbar__cta-arrow">↗</span>
          </Link>
        </div>

        <button
          type="button"
          className={`navbar__menu-button ${
            isMenuOpen ? "navbar__menu-button--open" : ""
          }`}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;

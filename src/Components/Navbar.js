import React, { useState } from "react";

import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <header>
      <nav className="navbar">
        <div>
          <Link className="logo" to="/">
            TheMovieJUNKIE
          </Link>
        </div>
        <GiHamburgerMenu
          className="hamburger"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        />

        <ul className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
          <li className="nav-list">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-list">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-list">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

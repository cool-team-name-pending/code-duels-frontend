import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Code Duels</a>
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contest">Contest</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

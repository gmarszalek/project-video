import React from "react";

import { Link } from "react-router-dom";

import "./Nav.css";

function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul className="nav-links">
        <Link className="link-style" to="/">
          <li>Home Page</li>
        </Link>
        <Link className="link-style" to="/about">
          <li>About</li>
        </Link>
        <Link className="link-style" to="/video">
          <li>Video</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;

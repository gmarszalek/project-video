import React from "react";

import { Link } from "react-router-dom";

import "./Nav.scss";

function Nav() {
  return (
    <nav>
      <h3>Logo</h3>
      <ul>
        <Link to="/">
          <li>Home Page</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/video">
          <li>Video</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;

import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h2>
        <Link to={`/`}>SocialBlog</Link>
      </h2>
      <ul className="nav">
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/users`}>Users</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

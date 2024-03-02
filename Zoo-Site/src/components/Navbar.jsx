import React from "react";

import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="title">
      Zoological Center
      </Link>
      <ul>    
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/animals">Animals</NavLink>
        </li>     
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>          
      </ul>
    </nav>
  );
};
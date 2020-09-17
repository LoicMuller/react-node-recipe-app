import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/Logo/logo.png";

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        <a href="/" className="logo">
          <img src={Logo} alt="logo" />
        </a>
        <nav className="main-nav">
          <ul className="main-nav-list">
            <li>
              <NavLink to="/entrees">Entrees</NavLink>
            </li>
            <li>
              <NavLink to="/plats">Plats</NavLink>
            </li>
            <li>
              <NavLink to="/desserts">Desserts</NavLink>
            </li>
            <li>
              <NavLink to="/boissons">Boissons</NavLink>
            </li>
            <li>
              <NavLink to="/vos-recettes">Vos Recettes</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

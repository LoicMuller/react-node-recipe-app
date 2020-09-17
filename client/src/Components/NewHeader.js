import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/Logo/logo2.png";

import "./main.css";

const NewHeader = () => {
  return (
    <header className="new-header">
      <div className="new-header-container">
        <a href="/" className="new-logo">
          <img src={Logo} alt="logo" />
        </a>
        <nav className="new-main-nav">
          <ul className="new-main-nav-list">
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

export default NewHeader;

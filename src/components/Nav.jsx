import React from "react";
import logo from "../assets/Aba-Logo.png";

const Nav = () => {
  return (
    <div className="nav-container">
      <img src={logo} alt="aba-logo.png" width={112} />
      <nav>
        <a href="">Reserve</a>
        <a href="">Menu</a>
        <a href="">Group Dining</a>
        <a href="">Events</a>
        <a href="">Team</a>
      </nav>
    </div>
  );
};

export default Nav;

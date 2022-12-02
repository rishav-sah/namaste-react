import React from "react";
import logo from "../../assets/logo-web-pirates.png";

const Header = () => {
  return (
    <header tabIndex={1} className="header">
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="navbar-searchbar">
          <input type="text" name="searchInput" placeholder="What are you searching for?"/>
          <button>Search</button>
        </div>

        <div className="navbar-user">
          <img src="https://img.icons8.com/cotton/512/gender-neutral-user.png" alt="user icon" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
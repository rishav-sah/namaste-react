import React from "react";

const Header = () => {
  return (
    <header tabIndex={1} className="header">
      <div className="header-logo">
        <img src="https://namastedev.com/namaste-react-bootcamp/assets/img/small-logo.png" alt="logo" />
      </div>

      <div className="header-searchbar">
        <input type="text" name="searchInput" placeholder="What are you searching for?"/>
        <button>Search</button>
      </div>

      <div className="header-user">
        <img src="https://img.icons8.com/cotton/512/gender-neutral-user.png" alt="user icon" />
      </div>
    </header>
  );
};

export default Header;
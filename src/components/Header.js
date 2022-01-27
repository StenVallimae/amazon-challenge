import React from "react";
import "../styles/header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        src="https://www.bizmonthly.com/wp-content/uploads/2020/04/amazon-logo-black.png"
        alt=""
        className="header__logo"
      />
      <div className="header__search">
        <input type="text" className="header__searchInput" />

        {/* logo */}
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello User</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your </span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div className="header__optionBasket header__optionLineTwo">
          <ShoppingBasketIcon></ShoppingBasketIcon> 0
        </div>
      </div>
    </div>
  );
}

export default Header;

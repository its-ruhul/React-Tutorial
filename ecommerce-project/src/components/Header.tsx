import { NavLink } from 'react-router';
import mobileLogoWhite from '../assets/images/mobile-logo-white.png';
import logoWhite from '../assets/images/logo-white.png';
import cartIcon from '../assets/images/icons/cart-icon.png';
import searchIcon from '../assets/images/icons/search-icon.png';
import { useState, type ChangeEvent } from 'react';
import './Header.css';

type HeaderProps = {
  cart: {
    productId: string;
    quantity: number;
    deliveryOptionId: string;
  }[];
}

export function Header({cart}: HeaderProps) {

  const [searchText, setSearchText] = useState('');

  let totalQuantity = 0;

  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });

  function searchInput(event: ChangeEvent<HTMLInputElement>) {
    setSearchText(event.target.value);
  }

  function searchProduct() {
    console.log(searchText);
  }

  function keyboardFunctions(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      searchProduct();
    }
    else if (event.key === 'Escape') {
      setSearchText('');
    }
  }

  return (
    <div className="header">
      <div className="left-section">
        <NavLink to="/" className="header-link">
          <img className="logo"
            src={logoWhite} />
          <img className="mobile-logo"
            src={mobileLogoWhite} />
        </NavLink>
      </div>

      <div className="middle-section">
        <input 
          className="search-bar" 
          type="text" 
          placeholder="Search"
          onChange={searchInput}
          onKeyDown={keyboardFunctions}
          value={searchText}
        />

        <button className="search-button" onClick={searchProduct}>
          <img className="search-icon" src={searchIcon} />
        </button>
      </div>

      <div className="right-section">
        <NavLink className="orders-link header-link" to="/orders">

          <span className="orders-text">Orders</span>
        </NavLink>

        <NavLink className="cart-link header-link" to="/checkout">
          <img className="cart-icon" src={cartIcon} />
          <div className="cart-quantity">{totalQuantity}</div>
          <div className="cart-text">Cart</div>
        </NavLink>
      </div>
    </div>
  );
}
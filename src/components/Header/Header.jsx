import React from 'react'
import './Header.css'
import { HiOutlineShoppingBag } from "react-icons/hi";
import Cart from '../../pages/Cart/Cart';


function Header() {
  return (
    <div className="header-container">
        <a className="logo"href="/">Fake Store</a>
        <a className='cart-icon' href="/cart"><HiOutlineShoppingBag /> </a>
        <p className='itemQuantity'>1</p>

    </div>
  )
}

export default Header
import React from 'react'
import './Header.css'
import { HiOutlineShoppingBag } from "react-icons/hi";


function Header() {
  return (
    <div className="header-container">
        <h1>Fake Store</h1>
        <h1><HiOutlineShoppingBag /> </h1>
        <p className='itemQuantity'>1</p>

    </div>
  )
}

export default Header
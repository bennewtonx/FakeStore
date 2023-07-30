import React, {useContext} from 'react'
import './Header.css'
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CartContext } from '../../contexts/CartContext';


function Header() {

  const {cart} = useContext(CartContext)


  return (
    <div className="header-container">
        <a className="logo"href="/">Fake Store</a>
        <a className='cart-icon' href="/cart"><HiOutlineShoppingBag /> </a>
        <p className='itemQuantity'>{cart.length}</p>

    </div>
  )
}

export default Header
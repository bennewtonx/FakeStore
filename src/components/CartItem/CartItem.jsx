import React, {useContext} from 'react'
import { CartContext } from '../../contexts/CartContext'
import './CartItem.css'


function CartItem({ product }) {

const {cart, addCart, removeCart} = useContext(CartContext)

  return (
    <div className='cart-items'>
    <img src={product.image} />
    <h3 style={{width: 200}}>{product.title}</h3>
    <h3>£{product.price}</h3>
    <h3>1</h3>
    <h3>1</h3>

    </div>
  )
}

export default CartItem
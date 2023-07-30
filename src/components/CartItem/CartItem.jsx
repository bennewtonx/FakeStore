import React, {useContext} from 'react'
import { CartContext } from '../../contexts/CartContext'
import './CartItem.css'
import { MdDelete } from "react-icons/Md"


function CartItem({ product }) {

const {removeCart} = useContext(CartContext)

  return (
    <div className='cart-items'>
    <img src={product.image} />
    <h3 style={{width: 200}}>{product.title}</h3>
    <h3>£{product.price}</h3>
    <h3>1</h3>
    <h3 onClick={() => removeCart(product)}><MdDelete /></h3>

    </div>
  )
}

export default CartItem
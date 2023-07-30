import React, {useContext} from 'react';
import { CartContext } from '../../contexts/CartContext';
import './CartItem.css';
import { MdDelete } from "react-icons/md";


function CartItem({ product }) {

const {removeCart} = useContext(CartContext)

  return (
    <div className='cart-items'>
    <img src={product.image} />
    <h3 style={{width:100}}>{product.title}</h3>
    <h3>£{product.price}</h3>
    <h3 style={{marginLeft: 60}}>1</h3>
    <h3 style={{marginLeft: 40}} onClick={() => removeCart(product)}><MdDelete /></h3>

    </div>
  )
}

export default CartItem
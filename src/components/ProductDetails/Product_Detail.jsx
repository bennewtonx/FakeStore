import React, { useContext, useEffect, useState } from 'react';
import './Product_Details.css';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { CartContext } from '../../contexts/CartContext';

function Product_Detail({ product }) {
  const { cart, addCart, removeCart } = useContext(CartContext);

  const [isCart, setIsCart] = useState(false);

  useEffect(() => {
    setIsCart(cart?.find(item => item.id === product.id));
  }, [cart, product]);

  // This useEffect will only run when isCart changes
  useEffect(() => {
    console.log(isCart);
  }, [isCart]);

  return (
    <div className='product-card'>
      {
        isCart ?
          <AiFillHeart onClick={() => removeCart(product)} className='heart-icon' />
          :
          <AiOutlineHeart onClick={() => addCart(product)} className='heart-icon' />
      }
      <img src={product.image} alt="" />
      <a href={`/details/${product.id}`}>{product.title}</a>
      <p>{product.category}</p>
      <h4>£{product.price}</h4>
    </div>
  );
}

export default Product_Detail;

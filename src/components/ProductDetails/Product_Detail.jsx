import React from 'react'
import './Product_Details.css'
import { HiOutlineHeart } from "react-icons/hi";

function Product_Detail({product}) {
  return (
    <div className='product-card'>
      <HiOutlineHeart />
      <img src={product.image} />
      <h3>{product.title}</h3>
      <p>{product.category}</p>
       <h4>£{product.price}</h4>

    </div>
  )
}

export default Product_Detail
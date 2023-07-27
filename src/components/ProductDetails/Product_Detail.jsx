import React from 'react'
import './Product_Details.css'
import { HiOutlineHeart } from "react-icons/hi";

function Product_Detail({product}) {
  return (
    <div className='product-card'>
      <HiOutlineHeart className='product-card-icon'/>
      <img src={product.image} />
      <a href={`/details/${product.id}`}>{product.title}</a>
      <p>{product.category}</p>
       <h4>£{product.price}</h4>
       

    </div>
  )
}

export default Product_Detail
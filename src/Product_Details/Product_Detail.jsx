import React from 'react'
import './Product_Details.css'

function Product_Detail({product}) {
  return (
    <div className='product-card'>
      <img src={product.image} />
      <h3>{product.title}</h3>
      <p>{product.category}</p>
      <h4>£{product.price}</h4>

    </div>
  )
}

export default Product_Detail
import React from 'react'

function Product_Detail({username, color}) {
  return (
    <div>
        <h2>Product for {username}</h2>
        <p>Favpurite color {color}</p>
    </div>
  )
}

export default Product_Detail
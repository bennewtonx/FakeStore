import React, { useEffect, useState } from 'react'
import Product_Detail from '../../components/ProductDetails/Product_Detail';
import './Homepage.css'
import axios from 'axios';
import CategoryFilters from './../../components/CategoryFilters/CategoryFilters';


function Homepage(setCategory) {
//Creating a State for products
const [products, setProducts] = useState([])

useEffect(
  ()=>{
  //API call for product data
  axios.get(`https://fakestoreapi.com/products/`)
  .then(res => {
    console.log(res.data)
  //Storing data in State
  setProducts(res.data)
  })
  .catch(err => console.log(err))
}, []
)

  return (
    <div className='homepage-container'>

<CategoryFilters setCategory={setCategory}/>
   
    <div className='product-container'>
      {
        products.map(item => <Product_Detail
        key={item.id} product={item} />)
      }

    </div>
    </div>
  )
}

export default Homepage
import React, { useEffect, useState } from 'react'
import Product_Detail from '../../components/ProductDetails/Product_Detail';
import './Homepage.css'
import axios from 'axios';

function Homepage() {
  //Creating a State for products
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState([])
  const [filterCategory, setFilterCategory] = useState(``)
  
  useEffect(
    ()=>{
      //API call for categories
  axios.get(`https://fakestoreapi.com/products/categories`)
  .then(res => {
    setCategory(res.data)
  })
  .catch(err => console.log(err))

    //API call for app products - when page loads
    axios.get(`https://fakestoreapi.com/products/`)
    .then(res => {
    //Storing data in State
    setProducts(res.data)
    console.log(res.data)
    })
    .catch(err => console.log(err))

}, []
)

  //onClick formula to grab filter name
  const filterSelectChange = (value) => {
  
  console.log(value.target.id)
  setFilterCategory(value.target.id)
}

  useEffect(
    ()=>{
      //API call to fetch filtered products
    const url = filterCategory===""?
    "https://fakestoreapi.com/products"
    :
    `https://fakestoreapi.com/products/category/${filterCategory}`

    axios.get(url)
    .then(res =>{
    console.log(res.data)
    setProducts(res.data)
})
    .catch(err => console.log(err))

    }, [filterCategory]
)

  return (
    <div className='homepage-container'>

<div className='category-container'>

<button id=''onClick={filterSelectChange}>All</button>
<button id={"electronics"}onClick={filterSelectChange}>{category[0]}</button>
<button id={"jewelery"}onClick={filterSelectChange}>{category[1]}</button>
<button id={"men's clothing"}onClick={filterSelectChange}>{category[2]}</button>
<button id={"women's clothing"} onClick={filterSelectChange}>{category[3]}</button>


</div>

    <div className='product-container'>
      {
        products && products.map(item => <Product_Detail
        key={item.id} product={item} />)
      }

    </div>
    </div>
  )
}

export default Homepage
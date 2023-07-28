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
    //API call for product data
    axios.get(`https://fakestoreapi.com/products/${filterCategory}`)
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
    console.log(setFilterCategory)
    }

    //API call for Category names
    useEffect(
        ()=>{
          axios.get(`https://fakestoreapi.com/products/categories/`)
          .then(res => {
            setCategory(res.data)
          })
          .catch(err => console.log(err))
          
        }, []
      )

    useEffect(
      ()=>{


        fetchFilters()
      }, [filterCategory]
    )

    //API call for specific Category products

    const fetchFilters = async (onClick) => {
      try{

      setFilterCategory()
      console.log(`hey`,filterCategory)
      }
      catch (err){
        console.log(err)
      }
}




  return (
    <div className='homepage-container'>

<div className='category-container'>

<button id=''onClick={filterSelectChange}>All</button>
<button id={"category/electronics"}onClick={filterSelectChange}>{category[0]}</button>
<button id={"category/jewelery"}onClick={filterSelectChange}>{category[1]}</button>
<button id={"category/men'sclothing"}onClick={filterSelectChange}>{category[2]}</button>
<button id={"category/womens'sclothing"} onClick={filterSelectChange}>{category[3]}</button>


</div>

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
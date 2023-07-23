import React, {useEffect, useState} from 'react'
import './ProductPage.css'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function ProductPage() {

    const {productId} = useParams()
    //this will use API to show a page for one
    //specific product

    const [product, setProduct] = useState('[]')

    useEffect(
        ()=>{
            //call API to get data
            axios.get(`https://fakestoreapi.com/products/${productId}`)
            
            .then(res => {
                setProduct(res.data)
                console.log(res.data)
            })
            //have Data, need to store in state to display

            .catch((err => console.log(err)))
        }, [] //runs once when page loads
        
    )

  return (
    <div className='product-page-container'>
    <div className='specific-product-container'>
    <img src={product.image}/>
    <div className='product-text-container'>
        <h2 style={{marginBottom:"31px"}}>{product.title}</h2>
        <h2 style={{marginBottom:"24px"}}>£{product.price}</h2>
        <h3 style={{marginBottom:"9px"}}>Description</h3>
        <p style={{marginBottom:"24px"}}>{product.description}</p>
        <button>Add to Cart</button>
    </div>
    </div>
    </div>
  )
}

export default ProductPage
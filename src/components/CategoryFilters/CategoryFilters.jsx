import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './CategoryFilters.css'

function CategoryFilters() {

    const [category, setCategory] = useState([])

const categorySearch = (e) => {
    console.log(setValue)
}


    useEffect(
        ()=>{
          axios.get(`https://fakestoreapi.com/products/categories`)
          .then(res => {
            console.log(res)
            setCategory(res.data)
            console.log(res.data)
          })
          .catch(err => console.log(err))
        }, []
      )

  return (
    <div className='category-container'>

      <button>All</button>
      <button value={category[0]} onClick={(e)=>setValue(value)}>{category[0]}</button>
      <button>{category[1]}</button>
      <button>{category[2]}</button>
      <button>{category[3]}</button>
    

    </div>
  )
}

export default CategoryFilters
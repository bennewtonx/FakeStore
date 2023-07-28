import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './CategoryFilters.css'

function CategoryFilters() {

    const [category, setCategory] = useState([])
    const [filterCategory, setFilterCategory] = useState()

    //onClick formula to grab filter name
    const filterSelectChange = (value) => {
  
    console.log(value.target.id)
    setFilterCategory(value.target.id)
    }

    //API call for Category names
    useEffect(
        ()=>{
          axios.get(`https://fakestoreapi.com/products/categories`)
          .then(res => {
            setCategory(res.data)
            console.log(`this one`, res.data)
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

    const fetchFilters = async () => {
      try{
      setFilterCategory(res.data)
      console.log(res.data)

      }
      catch (err){
        console.log(err)
      }
}

  return (
    <div className='category-container'>

      <button id=' '>All</button>
      <button id={category[0]}onClick={filterSelectChange}>{category[0]}</button>
      <button id={category[1]}onClick={filterSelectChange}>{category[1]}</button>
      <button id={category[2]}onClick={filterSelectChange}>{category[2]}</button>
      <button id={category[3]} onClick={filterSelectChange}>{category[3]}</button>
    

    </div>
  )
}

export default CategoryFilters
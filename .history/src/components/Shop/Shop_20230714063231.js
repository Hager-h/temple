import React from 'react'
import { useState,useEffect } from 'react'
export default function Shop() {

const [products,setproducts]=useState([])

  const getProducts = () => {
    axios.get(`https://fakestoreapi.com/products`)
      .then(res).then(dat 
    }
  }
  useEffect(() => {
    getProducts()

},[])


  return (
<h1>Our Products</h1>
    <div className="cards row">
      <div className="card">
      
      
      </div>
    </div>
  )
}

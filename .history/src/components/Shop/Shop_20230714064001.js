import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
export default function Shop() {

const [products,setproducts]=useState([])

  const getProducts = () => {
    axios.get(`https://fakestoreapi.com/products`)
      .then((res)=>setproducts(res.data))
  }
  useEffect(() => {
    getProducts()

},[])

  const dataListProd = products.map((pro) => {
  
})
  return (
    <div className="cards container ">
    <div className="row ">
    <h1>Our Products</h1>
      <div className="card">
      <h2></h2>
      
      </div>
    </div>
    </div>
  )
}

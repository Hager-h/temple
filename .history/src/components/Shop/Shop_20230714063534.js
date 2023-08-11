import React from 'react'
import axio
import { useState,useEffect } from 'react'
export default function Shop() {

const [products,setproducts]=useState([])

  const getProducts = () => {
    axios.get(`https://fakestoreapi.com/products`)
      .then((res)=>console.log(res.data))
  }
  useEffect(() => {
    getProducts()

},[])


  return (
    <div className="cards container ">
    <div className="row ">
    <h1>Our Products</h1>
      <div className="card">
      
      
      </div>
    </div>
    </div>
  )
}

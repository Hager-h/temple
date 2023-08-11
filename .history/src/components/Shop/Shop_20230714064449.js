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
    return (
      <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
})
  return (
    <div className="cards container ">
    <div className="row ">
    <h1>Our Products</h1>
    {dataListProd}
    </div>
    </div>
  )
}

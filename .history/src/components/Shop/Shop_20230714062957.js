import React from 'react'
import { useState,useEffect } from 'react'
export default function Shop() {

const [products,setproducts]=useState([])

  const getProducts = () => {
    axios.get(`https://fakestoreapi.com/products`)
      .then(res)=> {console.log(res)
    }
  }
  useEffect(() => {
    getProducts()

},[])


  return (

    <div className="cards row">
      <div className="card">
      
      
      </div>
    </div>
  )
}

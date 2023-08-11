import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import "./shop.css"

import{ Link} from "react-router-dom"
export default function Shop() {

const [products,setproducts]=useState([])
const [err,seterr]=useState(null)
const [loading,setloading]=useState(null)


  const getProducts = () => {
    axios.get(`https://fakestoreapi.com/products`)
      .then((res) => {
        setloading(false)
        setproducts(res.data)
        seterr(false)
      })
      .catch(err => {
        setloading(false)
        seterr("something went wrong")
      
      }
        
      )
  }
    useEffect(() => {
      getProducts()

    }, [])

    const dataListProd = products.map((pro) => {
      return (
        <div className="card col-4" key={pro.id}>
          <img src={pro.image} className="card-img-top" alt={pro.title} />
          <div className="card-body">
            <h5 className="card-title">{pro.title}</h5>
            <p className="card-text">{pro.description}</p>
            <Link to="#" className="btn btn-primary">Details</Link>
          </div>
        </div>)
    }
    )
    return (
      <div className="cards container ">
        <div className="row ">
          <h1>Our Products</h1>
          
        {loading&&<p className="spinner"></p>}
        
        {err&&<p className="Err">{err}</p>}
          {dataListProd}
        </div>
      </div>
    )

  }
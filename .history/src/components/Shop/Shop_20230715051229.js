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
    setloading(true)

    axios.get(`https://fakestoreapi.com/prducts`)
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
        <div className="card col-md-4 " key={pro.id}>
          <img src={pro.image} className="card-img-top" alt={pro.title} />
          <div className="card-body">
            <h5 className="card-title">{pro.title}</h5>
            <Link to="#" className="btn btn-primary">Details</Link>
          </div>
        </div>)
    }
    )
    return (
      <div className="cards container ">
        <div className="row ">
          <h1 className="mt-2 mb-4">Our Products</h1>
          
        {loading&&<p className="spinner"></p>}
        
        {dataListProd}
        {err&&<p className="Err">{err}</p>}
        </div>
      </div>
    )

  }
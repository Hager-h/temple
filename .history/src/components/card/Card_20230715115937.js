import React,{useEffect,useState} from 'react'
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';

import axios from "axios"
export default function Card() {
  const params = useParams()
  console.log(params)
  const [product,setproduct]=useState([])
  const [err,seterr]=useState(null)
  const [loading,setloading]=useState(null)
  
const apiUrl=`https://fakestoreapi.com/products`
    const getProducts = () => {
      setloading(true)
  
      axios.get(`${apiUrl}/${params.productId}`)
        .then((res) => {
          console.log(res.data)
          setloading(false)
          setproduct(res.data)
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

  
  return (
    <div className=" cards container">
      <div className="row">
        
      {loading&&<p className="spinner"></p>}
        
      



        



        
      {err&&<p className="Err">{err}</p>}
  </div>
  </div>
  
  
  )
}

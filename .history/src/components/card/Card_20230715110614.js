import React,{useEffect,useState,useParams} from 'react'
import { Link } from "react-router-dom"
import axios from "axios"
export default function Card() {
const params=useParams()
  const [products,setproducts]=useState([])
  const [err,seterr]=useState(null)
  const [loading,setloading]=useState(null)
  
  
    const getProducts = () => {
      setloading(true)
  
      axios.get(`${https://fakestoreapi.com/products}/`)
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

      const prod = products.map((pro) => {


  
    return (
      <div className="card col-md-4 " key={pro.id}>
      <img src={pro.image} className="card-img-top" alt={pro.title} />
      <div className="card-body">
        <h5 className="card-title">{pro.title}</h5>
        <Link to="#" className="btn btn-primary">Add To Cart</Link>
      </div>
      </div>
)
  })
  return (
    <div className=" cards container">
      <div className="row">
        
      {loading&&<p className="spinner"></p>}
        
      {prod}
      {err&&<p className="Err">{err}</p>}
  </div>
  </div>
  
  
  )
}

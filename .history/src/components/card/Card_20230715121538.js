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
  
      axios.get(`${apiUrl}/${params.cardId}`)
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
        
      
  {product&&

  

  <div className="card w-100 text-center col-md-4 " key={product.id}>
  <img src={product.image} className="card-img-top" alt={product.title} />
  <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="des">{ product.description}</p>
              <p className="des">{ product.price}</p>
              <div className="d-flex justify-content-center">
              <Link to="#" className="btn btn-primary">Add To Cart</Link>
              <Link to="/shop" className="btn btn-primary">return to shop</Link>
            </div>    
  </div>
  </div>

        
}


        
      {err&&<p className="Err">{err}</p>}
  </div>
  </div>
  
  
  )
}

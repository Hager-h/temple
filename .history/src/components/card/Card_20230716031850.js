import React,{useEffect,useState} from 'react'
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';
import "./card.css"
import axios from "axios"
export default function Card() {
  const params = useParams()
  console.log(params)
  const [product,setproduct]=useState([])
  const [err,seterr]=useState(null)
  const [show,setshow]=useState(false)
  const [loading,setloading]=useState(null)
  const showBtn = () => {
    setshow(true)
  }
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
    <div className="  container">
      <div className="row">
        
      {loading&&<p className="spinner"></p>}
        
      
  {product.title&&

  
(
  <div className="card w-100 cent col-md-4 " key={product.id}>
  <img src={product.image} className="card-img-top" alt={product.title} />
  <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="des">{product.description}</p>
                           <p className="price"><h6>Price:</h6>{ product.price} $</p>
            
              <div className="btns d-flex justify-content-between">
                <Link onClick={ showBtn} to="#" className="btn btn-primary">Add To Cart</Link>
            <Link to="/shop" className="btn btn-primary">Return To Shop</Link>
              </div>          
            {show&&   <div className="d-flex justify-content-center show={false}">
                <div className="all-c">
                <p>+</p>
                <p>4 in cart</p>
                  <p>-</p>
                </div>
            <div>
            <button>Rmove</button>

                </div>
            </div>}
  </div>
  </div>

)    
}


        
      {err&&<p className="Err">{err}</p>}
  </div>
  </div>
  
  
  )
}

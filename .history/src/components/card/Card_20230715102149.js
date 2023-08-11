import React from 'react'
import { Link } from "react-router-dom"

export default function Card() {

  const [products,setproducts]=useState([])
  const [err,seterr]=useState(null)
  const [loading,setloading]=useState(null)
  
  
    const getProducts = () => {
      setloading(true)
  
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

      const prod = products.map((pro) => {


  
    return (
      <div className="card col-md-4 " key={pro.id}>
      <img src={pro.image} className="card-img-top" alt={pro.title} />
      <div className="card-body">
        <h5 className="card-title">{pro.title}</h5>
        <Link to="#" className="btn btn-primary">Details</Link>
      </div>
      </div>
)
  })
  return (
    <div className="addCart">
  {prod}
  </div>
  
  )
}

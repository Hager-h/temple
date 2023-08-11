import React from 'react'

export default function Card(dataListProd) {
  console.log(dataListProd)
  let prod = products.map(pro =>{
    return (
      <div className="card col-md-4 " key={pro.id}>
      <img src={pro.image} className="card-img-top" alt={pro.title} />
      <div className="card-body">
        <h5 className="card-title">{pro.title}</h5>
        <Link to="#" className="btn btn-primary">Details</Link>
      </div>
)
  })
  return (
    <div className="addCart">
  
  </div>
  
  )
}

import React from 'react'

export default function Card(dataListProd) {
  console.log(dataListProd)
  return (
    <div className="addCart">
    <div className="card col-md-4 " key={pro.id}>
    <img src={pro.image} className="card-img-top" alt={pro.title} />
    <div className="card-body">
      <h5 className="card-title">{pro.title}</h5>
      <Link to="#" className="btn btn-primary">Details</Link>
    </div>
  </div>)
    </div>
  )
}

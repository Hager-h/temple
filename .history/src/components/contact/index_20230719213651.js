import React from 'react'
import "./contact.css"
export default function Contact() {
  const messages=[" welocm to our webpage"]
  return (
    <div className="con container">
      <div className="contact mt-5">
      <div className="btn-cont mt-3 mb-3">
      <button className=" circle active">1</button>
      <button className="circle">2</button>
      <button className="circle">3</button>
          
        </div>
        <p> this step no 1</p>
        <div className="bt-con d-flex justify-content-center">
          <button className="cir">Previous</button>
          <button className="cir">Next</button>
        </div>
      </div>

      
    </div>
  )
}

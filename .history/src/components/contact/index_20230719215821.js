import React, { useState } from 'react'
import "./contact.css"
export default function Contact() {
  const [step, setstep] = useState(1)
  const steps=[1,2,3,4,5]
  const prev = () => {
    if (step > 1) {
      setstep(step - 1)
    }
    else {
      return null
    }
}

const next = () => {
  if (step <3 ) {
    setstep(step + 1)
  }
  else {
    return null
  }
}

  
  const messages=[" welocm to our webpage","Apply for jop","Invest your new income"]
  return (
    <div className="con container">
      <div className="contact mt-5">
      <div className="btn-cont mt-3 mb-3">
          {steps.map(st => {
            return (
            
              <button className={`circle ${step >= {st} ?"active":""}` }>3</button>
          )
        })}
          
        </div>
        <p> Step no{step}:{messages[step-1]}</p>
        <div className="bt-con d-flex justify-content-center">
          <button onClick={prev} className="cir">Previous</button>
          <button onClick={ next} className="cir">Next</button>
        </div>
      </div>

      
    </div>
  )
}

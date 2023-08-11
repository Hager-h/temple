import React, { useState } from 'react'
import "./contact.css"
export default function Contact() {
  const [step, setstep] = useState(1)
  const steps=[1,2,3,4]
  const prev = () => {
    if (step > 1) {
      setstep(step - 1)
    }
    else {
      return null
    }
}

const next = () => {
  if (step <steps.length ) {
    setstep(step + 1)
  }
  else {
    return null
  }
}

  
  const messages=[" welocm to our webpage","Apply for jop","Invest your new income","Congratulations, You send application"]
  return (
    <div className="con container">
      <div className="contact mt-5">
      <div className="btn-cont mt-3 mb-3">
          {steps.map(st => {
            console.log(step)
            return (
            
              <button key={st} className={` circle ${step>=st?"active":"" }`}>{ st}</button>
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

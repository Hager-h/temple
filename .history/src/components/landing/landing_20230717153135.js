import React,{Fragment, useState,useEffect} from 'react'
import "./landing.css"
export default function Landing() {
  const [time, settime] = useState(new Date().toLocaleTimeString())
  useEffect(() => {
    setInterval(() => {
      settime(new Date().toLocaleTimeString())
    },1000)
  },[])
  return (
    <>
    <div className='landing'>
    <div className='containerr'>
    <div className='text-landing'>
    
    <h1>hello there
    </h1>
              <p className="text-danger"> its {time}</p>
<h3>work hard </h3>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, velit excepturi qui architecto nam aperiam esse rem aliquid maxime autem beatae libero, expedita nobis laborum min</p>

</div>
      </div>
    </div>
    </>
  )
}

import React from 'react'
import {useState,useEffect}from "react"
export default function Advice() {
  const [advice, setadvice] = useState("")

  const getAdvice = () => {
    axios.get(`https://api`)
    .then(res)=>setadvice(res.data)
}
  useEffect(() => {
    getAdvice()
  },[])
  return (
    <div>
      <p>{advice}</p>
      <button conClick={()=>{getAdvice}}>new advice</button>
      
    </div>
  )
}


import React from 'react'
import {useState,useEffect}from "react"
export default function Advice() {
  const [advice, setadvice] = useState("")
  useEffect(() => {
    axios.get()
  },[])
  return (
    <div>
      <p>{advice}</p>
      <button conClick={()=>{}}>new advice</button>
      
    </div>
  )
}


import React from 'react'
import "./advics.css"
import {useState,useEffect}from "react"
import axios from "axios"
export default function Advice() {
  const [advice, setadvice] = useState("")
  const [count, setcount] = useState(0)

  const getAdvice = () => {
    axios.get(`https://api.adviceslip.com/advice`)
      .then((res) => setadvice(res.data.slip.advice)
      )
      setcount(prev=>prev+1)
  }
  
  useEffect(() => {
    getAdvice()
  },[])

  return (
    <div className="advice mt-5">
      <h2 className="mt-4 mb-4">Advice Part</h2>
      <p className="ad-col fs-5 ">{advice}</p>
      <button className="mt-2 mb-3" onClick={ getAdvice }>new advice</button>
      <p>This Advice NO { count}</p> 
      
    </div>
  )
}


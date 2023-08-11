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
      <p className="ad-col fs-5  bg-black pt-4 pb-4">"{advice}"</p>
      <button className="  ad-bt bg-black text-white p-2 mt-2 mb-3" onClick={ getAdvice }> Take New Advice</button>
      <p>This Advice NO <span>{ count}</span></p> 
      
    </div>
  )
}


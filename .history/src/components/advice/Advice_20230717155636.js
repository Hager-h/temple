import React from 'react'
import {useState,useEffect}from "react"
import axios from "axios"
export default function Advice() {
  const [advice, setadvice] = useState("")
  const [count, setcount] = useState()

  const getAdvice = () => {
    axios.get(`https://api.adviceslip.com/advice`)
      .then((res) => setadvice(res.data.advice)
      )
  }
  
  useEffect(() => {
    getAdvice()
  },[])
  return (
    <div>
      <p>{advice}</p>
      <button conClick={{ getAdvice }}>new advice</button>
      <p>this advice No { count}</p> 
      
    </div>
  )
}


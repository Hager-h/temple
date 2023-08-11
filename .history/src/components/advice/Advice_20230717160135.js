import React from 'react'
import {useState,useEffect}from "react"
import axios from "axios"
export default function Advice() {
  const [advice, setadvice] = useState("")
  const [count, setcount] = useState()

  const getAdvice = () => {
    axios.get(`https://api.adviceslip.com/advice`)
      .then((res) => setadvice(res.data.slip.advice)
      )
  }
  
  useEffect(() => {
    getAdvice()
  },[])
  return (
    <div className="advice">
      <h1>Advice Part</h1>
      <p>{advice}</p>
      <button onClick={ getAdvice }>new advice</button>
      <p>this advice No { count}</p> 
      
    </div>
  )
}


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
    <div className="advice mt-4">
      <h2 className="mt-2 mb-2">Advice Part</h2>
      <p>{advice}</p>
      <button onClick={ getAdvice }>new advice</button>
      <p>this advice No { count}</p> 
      
    </div>
  )
}


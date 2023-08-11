import React ,{useEffect,useState}from 'react'
import axios from 'axios'
export  function Usehook(url,val) {
  const [data,setdata]=useState([])
  const [err,seterr]=useState(null)
  const [loading,setloading]=useState(null)
  
  useEffect(()=>{
    setloading(true)
    axios.get(url).then(res=>
      {
      setloading(false)
    setdata(res.data.val)
    seterr(false)
    }
    ).catch(_err=>{
      setloading(false)
      seterr("something went wrong")
    })
  
  },[url])
return[data,loading,err]
}

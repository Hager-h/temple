import {useEffect,useState}from 'react'
import axios from 'axios'
export  function Usehook() {
  const [data,setdata]=useState([])
  const [err,seterr]=useState(null)
  const [loading,setloading]=useState(null)
  
  useEffect(()=>{
    setloading(true)
    axios.get(url).then(res=>
      {
      setloading(false)
    setdata(res.data)
    console.log(res.data)
    seterr(false)
    }
    ).catch(err=>{
      setloading(false)
      seterr("something went wrong")
    })
  
  },[])
return[data,loading,err]
}

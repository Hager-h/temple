import React from "react "

export const Usehook = (url) => {
  
  const [data,setdata]=useState([])
  const [err,seterr]=useState(null)
  const [loading,setloading]=useState(null)

  useEffect(()=>{
    setloading(true)
    axios.get(url).then(res=>
      {
      setloading(false)
    setdata(res.data)
    seterr(false)
    }
    ).catch(err=>{
      setloading(false)
      seterr("something went wrong")
    })
  
  },[])


  return[data,err,loading]
}
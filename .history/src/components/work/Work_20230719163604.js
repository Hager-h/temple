import "./work.css"
import { useState, useEffect } from "react";
import axios from"axios"
export default function Work() {

  const [data,setdata]=useState([])
  const [err,seterr]=useState(null)
  const [loading,setloading]=useState(null)

  useEffect(()=>{
    setloading(true)
    axios.get(`js/data.json`).then(res=>
      {
      setloading(false)
    setdata(res.data.works)
    seterr(false)
    }
    ).catch(err=>{
      setloading(false)
      seterr("something went wrong")
    })
  
  },[])
const dataList=data.map(item=>{
  


  return (
    <div key={item.id}className="part first">
    <i className={item.icon_name}></i>
<h4 className="part-title">{item.title}</h4>
<hr className="line"/>
<p className="part-desc">
{item.body}
</p>
</div>
  )
})
  return (
    <div className="work">
    <div className="container">

        <h2 className="work-title"><span>My</span> Work</h2>
        <div className="all-work">
      
        {loading&&<p className="spinner"></p>}
          {dataList}
          {err&&<p className="Err">{err}</p>}
            </div>
    </div>
</div>
  )
}

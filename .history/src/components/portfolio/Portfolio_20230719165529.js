import React,{useEffect,useState} from 'react'

import "./port.css"

import axios from 'axios'

export default function Portfolio() {

    const [data,setdata]=useState([])
    const [err,seterr]=useState(null)
    const [loading,setloading]=useState(null)
    
    useEffect(()=>{
      setloading(true)
      axios.get(`js/data.json`).then(res=>
        {
        setloading(false)
      setdata(res.data.portfolio)
      seterr(false)
      }
      ).catch(err=>{
        setloading(false)
        seterr("something went wrong")
      })
    
    },[])
  
  
  
  
    const images=data.map((item)=>{
      console.log(item)
      return(

<div key={item.id} className=" col-md-3 box">
<div className="overlay"></div>
<span>Show Image</span>
<div className="show ">

<img className="port-image  " src={item.image} alt="image" />

          </div>






          
      </div>
      
      
    )
  })






  return (
    <div className="port">
<h3> <span> My</span> Portfolio</h3>

<div className="catgeory mb-5">
<p className="orange">All</p>
<p>Html</p>
<p>Photoshop</p>
<p>Wordpress</p>
<p> Mobile</p>
</div>
<div className="container">
        <div className="row ">
        




        {loading&&<p className="spinner mt-5"></p>}
          
        {images}
        
        {err&&<p className="Err">{err}</p>}
        </div>
        </div>






</div>











  )
}

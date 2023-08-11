import React,{useEffect,useState} from 'react'

import "./port.css"
import {Usehook} from "../hook2/Hook2.js"

export default function Portfolio() {


    const[data,loading,err]=Usehook('js/data.json')
  
    const images=data.map((item)=>{
      console.log(item)
      return(
<div classNmae="container">
<div classNmae="row">
<div key={item.id} className="box c">
<div className="overlay"></div>
<span>Show Image</span>
<img className="port-image" src={item.image} alt="image" />







</div>
</div>

          
      </div>
      
      
    )
  })






  return (
    <div className="port">
<h3> <span> My</span> Portfolio</h3>

<div className="catgeory">
<p className="orange">All</p>
<p>Html</p>
<p>Photoshop</p>
<p>Wordpress</p>
<p> Mobile</p>
</div>

<div className="photo">






{images}





</div>


</div>











  )
}

import "./work.css"
import {Usehook} from "../hook/Hook"
export default function Work() {
  const[data,loading,err]=Usehook('js/data.json.works')

console.log(Usehook(`js/data.json`.works))


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

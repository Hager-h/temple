import "./work.css"
import {Usehook} from "../hook/Hook"
export default function Work() {
  const[data,loading,err]=Usehook('js/data.json')



const dataList=data.map(item=>{
  const [data,setdata]=useState([])
  const [err,seterr]=useState(null)
  const [loading,setloading]=useState(null)
  
  useEffect(()=>{
    setloading(true)
    axios.get(url).then(res=>
      {
      setloading(false)
    setdata(res.data.works)
    console.log(res.data)
    seterr(false)
    }
    ).catch(err=>{
      setloading(false)
      seterr("something went wrong")
    })
  
  },[])


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

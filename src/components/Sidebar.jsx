import React, { useEffect, useState } from 'react'
import {useSearchParams,useLocation,useParams} from "react-router-dom"
const Sidebar = ({data}) => {
  const [search,setsearch]=useSearchParams()
   let inital=search.getAll("name")
   let initialsort=search.get("order")
  let [filtervalue,setfiltervalue]=useState(inital||[])
  const [order,setorder]=useState(initialsort||"")
console.log(filtervalue)

  const handelvalue=(el)=>{
    console.log(el.target.value)
    let newvalue=[...filtervalue]
    let filterval=el.target.value
    if(newvalue.includes(filterval))
    {let vls=newvalue.filter((el)=>el!=filterval)
      setfiltervalue(vls)
    }else{
      newvalue.push(filterval)
      setfiltervalue(newvalue)
      

  }
}
const handelsort=(el)=>{
  setorder(el.target.value)
}

useEffect(()=>{
  let params={
    name:filtervalue
  }
  order&&(params["order"]=order)
  setsearch(params)

},[filtervalue,order])
  return (
    <div style={{width:"15%",borderRight:"1px solid black", marginLeft:"10px"}}>
        <h3>Filter by</h3>
        {
             data.map((el)=> <div>
                <input type="checkbox" value={el} onChange={handelvalue} checked={filtervalue.includes(el)} />
                <label htmlFor="">{el}</label>
             </div>)

        }
       <h3 style={{marginTop:"10px",marginBottom:"10px"}}>Sort by price</h3>
        <div onChange={handelsort}>
            <input type="radio" value={"asc"} name="price" checked={order=="asc"}/>
            <label htmlFor="">Asending</label>
            <input type="radio"value={"desc"}  name="price" checked={order=="desc"}/>
            <label htmlFor="">Desending</label>

        </div>
       

        
    </div>
  )
}

export default Sidebar
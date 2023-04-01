import React, { useState } from 'react'

const Sidebar = ({data}) => {
  let [filtervalue,setfiltervalue]=useState([])
console.log(filtervalue)

    
  return (
    <div style={{width:"15%",borderRight:"1px solid black", marginLeft:"10px"}}>
        <h3>Filter by</h3>
        {
             data.map((el)=> <div>
                <input type="checkbox" onChange={()=>setfiltervalue([...filtervalue,el])}  />
                <label htmlFor="">{el}</label>
             </div>)

        }
       <h3>Sort by price</h3>
        <div>
            <input type="radio" name="price"/>
            <label htmlFor="">Asending</label>
            <input type="radio" name="price"/>
            <label htmlFor="">Desending</label>
        </div>
       

        
    </div>
  )
}

export default Sidebar
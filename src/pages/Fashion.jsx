import React, { useEffect, useState } from 'react'
import {useDispatch,useSelector} from "react-redux"
import { getfaishiondata } from '../Redux/Fashion/action'
import Sidebar from '../components/Sidebar'
import ProductItem from '../components/ProductItem'
import { useSearchParams } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
const Fashion = () => {
  let [search,setsearch]=useSearchParams()
  let url="https://jolly-hose-hen.cyclic.app/quickdata/?category=fashion"
  const data=["Topwear","jeans","shirt","shoes","jackets"]
  const grocerydata=useSelector(state=>state.faishion.faishion)
  console.log(grocerydata)
  const dispatch=useDispatch()
  useEffect(()=>{
    let name=search.getAll("name")
    let order=search.get("order")
    let obj={
      params:{
        name,
        _sort:order&&"price",
        _order:order
      }
    }

    dispatch(getfaishiondata(url,obj))
  },[search])
  return (
    <>
    <NavBar/>
    <div style={{display:"flex"}}>
    <Sidebar data={data}/>
    <ProductItem grocerydata={grocerydata}/>

    </div>
    <Footer/>
    </>
  )
}

export default Fashion
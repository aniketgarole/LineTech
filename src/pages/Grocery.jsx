import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import {useSelector,useDispatch} from "react-redux"
import {getgrocerydata} from "../Redux/Grocery/action.js"
import ProductItem from './ProductItem'
import { useParams, useSearchParams } from 'react-router-dom'

const Grocery = () => {
    let data=["biscuits","ghee","atta","tea","hair care","rice"]
    let url=`https://jolly-hose-hen.cyclic.app/quickdata/?category=grocery`
    let [params,setparams]=useSearchParams()
    
    console.log(params.getAll("name"))
    let grocerydata=useSelector(store=>store.grocery.grocery)
    console.log(grocerydata)
    let dispatch=useDispatch()

    // const 
    useEffect(()=>{
      let name=params.getAll("name")
      let order=params.get("order")
      console.log(name)
      let obj={
        params:{
          name,
          _sort:order&&"price",
          _order:order
        }
      }
        dispatch(getgrocerydata(url,obj))

    },[params])
  return (
    <div style={{display:"flex"}}>
        <Sidebar data={data}/>
        <ProductItem grocerydata={grocerydata}/>

    </div>
  )
}

export default Grocery
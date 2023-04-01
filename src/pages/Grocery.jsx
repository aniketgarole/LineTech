import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import {useSelector,useDispatch} from "react-redux"
import {getgrocerydata} from "../Redux/Grocery/action.js"
import ProductItem from './ProductItem'

const Grocery = () => {
    let data=["biscuits","ghee","atta","tea","hair care","rice"]
    let url=`https://jolly-hose-hen.cyclic.app/quickdata/?category=grocery`
    
    let grocerydata=useSelector(store=>store.grocery.grocery)
    console.log(grocerydata)
    let dispatch=useDispatch()

    // const 
    useEffect(()=>{
        dispatch(getgrocerydata(url))

    },[])
  return (
    <div style={{display:"flex"}}>
        <Sidebar data={data}/>
        <ProductItem grocerydata={grocerydata}/>

    </div>
  )
}

export default Grocery
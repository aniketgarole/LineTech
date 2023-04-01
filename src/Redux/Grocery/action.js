
import {GROCERY_REQUEST,GROCERY_SUCCESS,GROCERY_FAILUAR} from "./actiontype"
import axios from "axios"
export const getgrocerydata=(url,obj)=>(dispatch)=>{
    dispatch({type:GROCERY_REQUEST})
    let res=axios.get(url,obj)
    .then((res)=>dispatch({type:GROCERY_SUCCESS,payload:res.data}))
    .catch((error)=>dispatch({type:GROCERY_FAILUAR}))

}
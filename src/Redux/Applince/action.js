import {APPLANCE_REQUEST,APPLANCE_SUCCESS,APPLANCE_FAILURE} from "./actiontype"
import axios from "axios"

export const getapplince=(url,obj)=>(dispatch)=>{
console.log(url)
    dispatch({type:APPLANCE_REQUEST})
    let res=axios.get(url,obj)
    .then((res)=>dispatch({type:APPLANCE_SUCCESS,payload:res.data}))
    .catch((error)=>dispatch({type:APPLANCE_FAILURE}))


}
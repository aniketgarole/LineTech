import {FAISHION_REQUEST,FAISHION_SUCCESS,FAISHION_FAILURE} from "./actiontype"
import axios from "axios"

export const getfaishiondata=(url,obj)=>(dispatch)=>{

    dispatch({type:FAISHION_REQUEST})
    let res=axios.get(url,obj)
    .then((res)=>dispatch({type:FAISHION_SUCCESS,payload:res.data}))
    .catch((error)=>dispatch({type:FAISHION_FAILURE}))


}
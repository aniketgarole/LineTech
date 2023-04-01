
import {FAISHION_REQUEST,FAISHION_SUCCESS,FAISHION_FAILURE} from "./actiontype"
let initial={
    isLoding:false,
    faishion:[],
    isError:false
}

export let reducer=(state=initial,{type,payload})=>{
    switch(type)
    {
        case FAISHION_REQUEST:{
            return {...state,isLoding:true}
        }
        case FAISHION_SUCCESS:{
            return {...state,isLoding:false,faishion:payload}
        }case FAISHION_FAILURE:{
            return {...state,isLoding:false,isError:true}
        }
        default : return state
    }

}
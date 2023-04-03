
import {APPLANCE_REQUEST,APPLANCE_SUCCESS,APPLANCE_FAILURE} from "./actiontype"
let initial={
    isLoding:false,
    applince:[],
    isError:false
}

export let reducer=(state=initial,{type,payload})=>{
    console.log(payload,type)
    switch(type)
    {
        case APPLANCE_REQUEST:{
            return {...state,isLoding:true}
        }
        case APPLANCE_SUCCESS:{
            return {...state,isLoding:false,applince:payload}
        }case APPLANCE_FAILURE:{
            return {...state,isLoding:false,isError:true}
        }
        default : return state
    }

}
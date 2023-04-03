import {GROCERY_REQUEST,GROCERY_SUCCESS,GROCERY_FAILUAR} from "./actiontype"

let initial={
    isLoding:false,
    grocery:[],
    isError:false
}

export const reducer=(state=initial,{type,payload})=>{

    switch(type)
    {
        case GROCERY_REQUEST:{
            return {...state,isLoding:true}
        }
        case GROCERY_SUCCESS:{
            return {...state,isLoding:false,grocery:payload }
        }
        case GROCERY_FAILUAR:{
            return {...state,isLoding:false,isError:true}
        }
        default:return state

    }

}
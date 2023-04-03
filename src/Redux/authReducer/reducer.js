import { AUTH_SUCCESS } from "./actionTypes"


const initState = {
    isAuth: false
}

export const reducer = (state=initState,action) => {
    const {type} = action
    console.log("in reducer")

    switch(type) {
        case AUTH_SUCCESS: return {isAuth: true}
        
        default: return state;
    }
}
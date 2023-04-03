import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from "./actionTypes"

const authRequest = () => {
    return {type: AUTH_REQUEST}
}

const authSuccess = () => {
    return {type: AUTH_SUCCESS}

}

const authFailure = () => {
    return {type: AUTH_FAILURE}
}



export const getAuth = () => {

    
    console.log("getAuth")
    authSuccess()
    
   
}
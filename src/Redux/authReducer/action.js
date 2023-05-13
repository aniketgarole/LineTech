import axios from "axios"
import { AUTH_FAILURE, AUTH_REQUEST, AUTH_SUCCESS } from "./actionTypes"
import { useToast } from '@chakra-ui/react'

const authRequest = () => {
    return {type: AUTH_REQUEST}
}

const authSuccess = () => {
    return {type: AUTH_SUCCESS}

}

const authFailure = () => {
    return {type: AUTH_FAILURE}
}



export const getAuth = async (payload)=> {

    
   
}
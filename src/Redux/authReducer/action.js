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



const getUsers = async() => {

    let res = await axios.get(``)

    let users = res.data;

   let flag = false;

   for (let i = 0; i < users.length; i++) {
    if (email === users[i].email && password === users[i].password) {
        flag = true;
    }
   }
}
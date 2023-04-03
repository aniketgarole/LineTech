import axios from "axios"
const url="https://jolly-hose-hen.cyclic.app/quickdata";

export const addNewProduct =  (newProduct) => {
    axios.post(url , newProduct);
}

export const getProduct = ()=>{
   return axios.get(url)
}

export const dltProduct = (id) =>{
    axios.delete(`https://jolly-hose-hen.cyclic.app/quickdata/${id}`)
    
}
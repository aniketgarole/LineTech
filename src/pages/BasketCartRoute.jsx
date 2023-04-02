
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cart from './Cart'
import EmptyBasket from './EmptyBasket'
import NavBar from '../components/NavBar'
import Footer from "../components/Footer"
const getData = async () => {
    const res = await axios.get("http://localhost:8080/products")
    return res.data
  }

const BasketCartRoute = () => {
    const [data, setData] = useState([])
    const [update, setUpdate] = useState(false)

    const AddOn = () => {
      setUpdate((prev)=> !prev)
    }

    useEffect(() => {
        getData()
          .then((res) => {
            console.log(res);
            setData(res)
          })
          .catch((err) => {
            console.log(err);
          })
      }, [update])

  return (
    
    <div>
      <NavBar />
     {
      data.length>0? <Cart  updateData={AddOn}/>:<EmptyBasket />
     }
    <Footer />
    </div>
  )
}

export default BasketCartRoute




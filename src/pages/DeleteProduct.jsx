import React, { useEffect, useState } from 'react'
import { dltProduct, getProduct } from '../allApi'
import { SideBar } from '../components/SideBarAdmin'
import styles from "../styles/admin.module.css";

export const DeleteProduct = () => {

    const [products , setProducts] = useState([])

    const handelDelete = (id) => {
        alert("Product Deleted Successfully")
        dltProduct(id)
    }

    useEffect(()=>{
        getProduct().then((res)=> setProducts(res.data))
    },[products])


  return (
    <div className={styles.dltMainBox}>
        <SideBar />

    <div className={styles.proMainBox}>

        {products.map((itm)=>(
            <div key={itm.id} className={styles.dltproChild}>

                <img src={itm.image} alt="" />
                <h3>{itm.name}</h3>
                <button onClick={()=>handelDelete(itm.id)}>Delete Product</button>
            </div>
        ))}

    </div>

    </div>
  )
}

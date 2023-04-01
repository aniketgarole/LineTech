import React from 'react'
import ProductCart from './ProductCart'

const ProductItem = ({grocerydata}) => {
    console.log(grocerydata)

  return (
    <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)" ,width:"85%", gap:"10px"}}>
        {
        grocerydata.map((el)=><ProductCart key={el.id} {...el}/>)
        }


    </div>
  )
}

export default ProductItem
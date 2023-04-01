import React from 'react'

const ProductCart = ({id,name,image,discription,category,price}) => {
  return (
    <div style={{border:"1px solid red", textAlign:"center",padding:"10px"}} >
        <img src={image} alt="" width={"40%"} height="30%"/>
        <h3>{discription}</h3>
        <h4>{price}</h4>
        <button>Add to Cart</button>
    </div>
  )
}

export default ProductCart
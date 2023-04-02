import React from 'react'
import "../styles/BigCard.css"

const BigCard = ({image}) => {
  return (
    <div className='Bmycard'>
        <img src={image} alt="" />
        </div>
  )
}

export default BigCard
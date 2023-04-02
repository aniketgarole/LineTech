import React from 'react'

import "../styles/Mycard.css"

const Mycard = ({image}) => {
  return (
    <div className='mycard'>
        <img src={image} alt="" />
        </div>
  )
}

export default Mycard
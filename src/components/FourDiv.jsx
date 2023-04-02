import React from 'react'
import img1 from "../image/fourdiv-img1.jpg"
import img2 from "../image/fourdiv-img2.jpg"
import img3 from "../image/fourdiv-img3.jpg"
import img4 from "../image/fourdiv-img4.jpg"

import "../styles/FourDiv.css"

const FourDiv = () => {
  return (
    <div className='four-div'>
        <div>
            <img src={img1} alt="" />
        </div>
        <div>
        <img src={img2} alt="" />
        </div>
        <div>
        <img src={img3} alt="" />
        </div>
        <div>
        <img src={img4} alt="" />
        </div>
    </div>
  )
}

export default FourDiv
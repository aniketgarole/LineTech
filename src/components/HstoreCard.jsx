import React from 'react'
import "../styles/HstoreCard.css"


const HstoreCard = ({img, name, dis, footer}) => {
  return (
    <div className='SC-div'>
        <div className="SC-leftdiv">
            <img src={img} alt="" />
        </div>
        <div className="SC-rightdiv">
            <span className='span1'>{name}</span>
            <br />
            <span className='span2'>{dis}</span>
            <br />
            <span className='span3'>{footer}</span>
        </div>


       
    </div>
  )
}

export default HstoreCard



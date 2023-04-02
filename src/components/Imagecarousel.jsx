import React, { useRef } from 'react'
import Mycard from './Mycard'

import "../styles/Imagecarousel.css"


const Imagecarousel = () => {

    const ref = useRef()

    console.log(ref)

    const btnNext = ()=> {
        let width = ref.current.clientWidth;
        ref.current.scrollLeft = ref.current.scrollLeft + 313;
        console.log(width)

    }

    const btnPrev= () => {
        let width = ref.current.clientWidth;
        ref.current.scrollLeft = ref.current.scrollLeft - 313;
    }


  return (
    

        <div className='product-carousel'>
            <button className='pre-btn' onClick={btnPrev}><p>&lt;</p></button>
            <button className='next-btn' onClick={btnNext}><p>&gt;</p></button>

            <div className='product-container' ref={ref}>
                <Mycard image="https://cdn.plotch.io/image/upload/C/V/1676285382_MS5wbmc=.png"/>
                <Mycard image="https://cdn.plotch.io/image/upload/C/V/1676285387_Mi5wbmc=.png"/>
                <Mycard image="https://cdn.plotch.io/image/upload/C/V/1676285392_My5wbmc=.png"/>
                <Mycard image="https://cdn.plotch.io/image/upload/C/V/1676285382_MS5wbmc=.png"/>
                <Mycard image="https://cdn.plotch.io/image/upload/C/V/1676285398_NC5wbmc=.png"/>
                <Mycard image="https://cdn.plotch.io/image/upload/C/V/1676285404_NS5wbmc=.png"/>
                <Mycard image="https://cdn.plotch.io/image/upload/C/V/1676285409_Ni5wbmc=.png"/>
                <Mycard image="https://cdn.plotch.io/image/upload/C/V/1676285414_Ny5wbmc=.png"/>
                <Mycard image="https://cdn.plotch.io/image/upload/C/V/1676285382_MS5wbmc=.png"/>
                <Mycard image="https://cdn.plotch.io/image/upload/C/V/1676285387_Mi5wbmc=.png"/>
                

            </div>
        </div>
    
  )
}

export default Imagecarousel
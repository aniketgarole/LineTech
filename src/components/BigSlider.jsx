import React, { useEffect, useRef } from 'react'
import BigCard from './BigCard'

import styles from "../styles/BigSlider.module.css"

const BigSlider = () => {

    const ref = useRef()

    console.log(ref)

    const btnNext = ()=> {
        let width = ref.current.clientWidth;
        ref.current.scrollLeft = ref.current.scrollLeft + width+20;
        // console.log(width)

    }

    const btnPrev= () => {
        let width = ref.current.clientWidth;
        ref.current.scrollLeft = ref.current.scrollLeft - (width+20);
    }


    useEffect(()=> {
        let id = setInterval(() => {
            btnNext()
        }, 4000);

        return ()=> {
            clearInterval(id)
        }
    },[])



  return (
    <div className={styles["Bproduct-carousel"]}>
            <button className={styles['pre-btn']} onClick={btnPrev}><p>&lt;</p></button>
            <button className={styles['next-btn']} onClick={btnNext}><p>&gt;</p></button>

            <div className={styles['Bproduct-container']} ref={ref}>
                <BigCard image="https://cdn.plotch.io/image/upload/C/V/1676097252_Q1JBRlRTVklMTEEyLU5FV0hFUk9CQU5ORVJTLnBuZw==.png"/>
                <BigCard image="https://cdn.plotch.io/image/upload/C/V/1676286917_Q1JBRlRTVklMTEEyLU5FV0hFUk9CQU5ORVJTLnBuZw==.png"/>
                <BigCard image="https://cdn.plotch.io/image/upload/C/V/1676286917_Q1JBRlRTVklMTEEyLU5FV0hFUk9CQU5ORVJTLnBuZw==.png"/>
                <BigCard image="https://cdn.plotch.io/image/upload/C/V/1671110155_NC5wbmc=.png"/>
                <BigCard image="https://cdn.plotch.io/image/upload/C/V/1671110161_Mi5wbmc=.png"/>
                
                

            </div>
        </div>
  )
}

export default BigSlider
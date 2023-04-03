import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import Slider1 from '../components/Slider1'
import Imagecarousel from '../components/Imagecarousel'
import BigSlider from '../components/BigSlider'
import BlackDiv from '../components/BlackDiv'
import FourDiv from '../components/FourDiv'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'


// import styles from "../styles/HomePage.module.css"



const HomePage = () => {
  return (
    <div >
      <NavBar/>
        <div className='hori-lines' style={{ paddingTop: "22px", paddingBottom: "5px", display: "flex", textAlign: "center",  }}>
          <hr style={{borderStyle:"inset", width:"40%", height: "10px", borderTop:"none", borderRight:"none", borderLeft:"none", borderBottom:"1px dotted gray", marginTop: "15px"}}/>
          <span style={{fontFamily: "Poppins", fontSize: "30px",letterSpacing:"1.8px"}}>Stores Near Me</span>
          <hr style={{borderStyle:"inset", width:"40%", height: "10px", borderTop:"none", borderRight:"none", borderLeft:"none", borderBottom:"1px dotted gray", marginTop: "15px"}}/>
          
        </div>

        <br />
        

        <Slider1/>

        <br />
        <br />

        <div className='hori-lines' style={{paddingTop: "22px", paddingBottom: "5px", display: "flex", textAlign: "center",  }}>
          <hr style={{borderStyle:"inset", width:"40%", height: "10px", borderTop:"none", borderRight:"none", borderLeft:"none", borderBottom:"1px dotted gray", marginTop: "15px"}}/>
          <span style={{fontFamily: "Poppins", fontSize: "22px",letterSpacing:"1.8px"}}>Shop By Category</span>
          <hr style={{borderStyle:"inset", width:"40%", height: "10px", borderTop:"none", borderRight:"none", borderLeft:"none", borderBottom:"1px dotted gray", marginTop: "15px"}}/>
          
        </div>
        

       <Imagecarousel/>

       
       <BigSlider/>

       <BlackDiv/>

       <FourDiv/>

       <Footer/>

       
    </div>
  )
}

export default HomePage


const WRAPPER = styled.div`



  @import url('https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&family=Mulish:wght@700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400;1,500&display=swap');


  .hori-lines{
    border: 1px solid blue;
    padding-top: 30px;
    padding-bottom: 5px;
    display: flex;
    text-align: center;
  }

  

  .hori-lines span{
    font-family: Poppins, sans-serif;
    font-size: 30px;
  }
`





/*

.hori-lines hr{
    border-style: inset;
    border-bottom: 1px dotted gray;
    width: 42%;
    height: 10px;
    border-top: none;
    border-left: none;
    border-right: none;
    
  }

  */
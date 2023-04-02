import React from "react";
import styled from "styled-components";
import logo from "../image/Futuristic_Modern_Black_and_White_Logo.png";
import map from "../image/map-solid-24.png";
import user from "../image/user-solid-24.png"
import wish from "../image/heart-regular-24.png"
import cart from "../image/cart-alt-solid-24.png"
import search from "../image/search-regular-24.png"
import { Link } from "react-router-dom";
import { BasicUsage } from "./Modal";




const NavBar = () => {

  
  return (
    <DIV>
      <div className="top-div">
        <span className="offer-span">GET RS 50 OFF ON ORDERS ABOVE RS 100</span>
      </div>
      <div className="search-div">
        <div>
          <img src={`${logo}`} alt="" className="logo-img" />
        </div>

        <div className="input-div">
          <label>SEARCH</label>
          <input type="text" placeholder="Search here for proucts in Pune"/>
          <img src={`${search}`} alt="" className="wid-logo"/>
        </div>
        <div className="search-right">
            <div className="user-location">
                <img src={`${map}`} alt="" className="wid-logo"/>
                <span>Pune, Pune</span>
            </div>
            <div className="user-wish">
                <div className="user-log">
                    <img src={`${user}`} alt="" className="wid-logo"/>
                    {/* <span>Sign In/Register</span> */}
                    <BasicUsage/>
                    
                </div>
                <div className="u-wish">
                    <img src={`${wish}`} alt="" className="wid-logo"/>
                      <span>Wishlist</span>
                </div>
            </div>
            <div className="user-cart">
                <img src={`${cart}`} alt="" className="wid-logo"/>
                <span><Link to="#" style={{ textDecoration: 'none', color: "black"}}>Cart</Link></span>
            </div>
          
        </div>
      </div>
      <div className="maroon-div">

        {/* <div>Stores Near Me</div>
        <div>Prouducts Near Me</div>
        <div>Fashion</div>
        <div>Beauty & Personal Care</div>
        <div>Home Decor</div>
        <div>Electronics</div> */}
        
              <div>
                <Link to="#" style={{ textDecoration: 'none', color: "#FFFFFF"}}>Stores Near Me</Link>
              </div>
              <div>
                <Link to="#" style={{ textDecoration: 'none', color: "#FFFFFF" }}>Prouducts Near Me</Link>
              </div>
              <div>
                <Link to="#" style={{ textDecoration: 'none', color: "#FFFFFF" }}>Fashion</Link>
              </div>
              <div>
                <Link to="#" style={{ textDecoration: 'none', color: "#FFFFFF" }}>Beauty & Personal Care</Link>
              </div>
              <div>
                <Link to="#" style={{ textDecoration: 'none', color: "#FFFFFF" }}>Home Decor</Link>
              </div>
              <div>
                <Link to="#" style={{ textDecoration: 'none', color: "#FFFFFF" }}>Electronics</Link>
              </div>
       
              
      </div>
    </DIV>
  );
};

export default NavBar;

const DIV = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&display=swap");
 
  @import url('https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&family=Mulish:wght@700&display=swap');

  
  @import url('https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&family=Mulish:wght@700&display=swap');

 
  @import url('https://fonts.googleapis.com/css2?family=Jost:wght@100;200;300;400;500;600;700;800;900&family=Merriweather:ital,wght@0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400&family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400;1,500&display=swap');




  width: 100%;

  padding: 0px 0px 0px 0px;

  .top-div {
    border: 1px solid black;
    width: 100%;
    text-align: center;
    padding: 4px 0 25px 0;
  }

  .offer-span {
    font-family: Muli;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 2px;
    text-align: center;
    color: rgb(156, 0, 0);
    padding: 4px 4px 4px 4px;
  }

  .search-div {
    
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 10px 0;
  }

  .logo-img {
    width: 150px;
    margin-left: 40px;

  }

  .input-div {
    
    display:flex;
    justify-content: left;
    width: 440px;
    margin-left: 80px;
    padding: 11px 12px 0px 12px;
    align-items: center;
    height: auto;
    text-align: center;
    background-color: #DDDDDD;
  }

  .input-div label{
    margin-bottom: 10px;
    font-family: Merriweather;
    font-size: 14px;
    color: #000000;
    font-weight: 400;
    line-height: 1.42857143;
    
  }

  .input-div input{
    background-color: #DDDDDD;
        width: 393px;
        margin: 0 0 10px 5px;
        font-family: Montserrat reguluar;
        border: none;
        border-style: none;
  }

  .input-div input:focus{
    outline:none;
  }

  .input-div img {
    margin-bottom: 10px;
    margin-left: 40px;
  }

  

  .search-right{
    
    display: flex;
    width: 50%;
    height: px;
    justify-content: space-between;
    margin-left: 20px;
    text-align: center;
    
    font-family: Merriweather;
    font-size: 14px;
    
  }

 

  .user-wish{
    
    
    display:flex;
    width: 32%;
    justify-content: space-around;
    gap: 7px;
    margin-left: 180px;
  }

  .wid-logo{
    width: 20px;
    height: 20px;
    margin-right: 8px;
    margin-top: 4px;
    
  }

  .user-location span{
    cursor:pointer;
    margin-bottom: 40px;
    
  }

  .user-location{
    
    padding-bottom: 4px;
  }

  .user-location img{
    margin-top: 8px;
        
  }

  .user-location span{
   
    margin-bottom: 16px;
  }

  .input-div img{
    width: 17px;
    height: 17px;
  }

  .user-cart {
    margin-right: 30px;
    cursor: pointer;
  }


  .maroon-div{
    
    width: 100%;
    height: 54px;
    display: flex;
    
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-family: Merriweather;
    font-weight: 600;
    font-size: 16px;
    line-height: 28px;
    background-color: rgb(144,39,53);
    color: #FFFFFF;
    text-decoration: none;
  }

  Link{
    text-decoration: none;
  }

  .maroon-div div:hover{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 100%;
    
    
    background-color: rgb(249, 248, 248);
    color: rgb(144,39,53);
    text-align: center;
  }





  .user-log, .u-wish{
    cursor: pointer;
  }
 
 
`;

import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "../styles/Slider.css"
import HstoreCard from "./HstoreCard";





export default class Slider1 extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
    //   nextArrow: <SampleNextArrow />,
    //   prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="res-div">
       
        <Slider {...settings}>
          <div>
            <HstoreCard img='https://nstoreassets.s3.amazonaws.com/24395/store_logo/24395_4mwe2l2ldwohjp3.jpg' name="lazeez biryani" dis="1.4KM" footer="F&B"/>
          </div>
          <div>
            <HstoreCard img='https://d2pyicwmjx3wii.cloudfront.net/s/62ea2c599d1398fa16dbae0a/639d5c1eb5177173fb5bbcef/expo-jpg.jpg' name="ganesh enterprizes" dis="1.55KM" footer="Grocery"/>
          </div>
          <div>
            <HstoreCard img='https://lh3.googleusercontent.com/-DGkm_fPSQkHxw3urqIUrOvt08DtSn6qhLqlJPEu4Uhd-XFIo41lbLvbTmh5vjM30DuQVPH0uGclXSFqGtWuBDQ7Efhzp3hC8vfQesk' name="firangi brake" dis="0.37KM" footer="F&B"/>
          </div>
          <div>
            <HstoreCard img='https://lh3.googleusercontent.com/QIJJaFkXnGJfj4OnPwOF4KKAsUgP6px0wYg5nkw91qFo1cDhqu2fkL5LuIgk9iikO1RGeg99kmoQnC3MprttSA1-N31HMqw9N99LEUCvrw' name="smoodies" dis="1.01KM" footer="F&B"/>
          </div>
          <div>
            <HstoreCard img='https://lh3.googleusercontent.com/xUdRDsM6ekFAh6BT7KSqiDss5kwSudbipBhBbvlvaaQI5Ex6Do_l3kt6NKsWNc8V5s1BasX0iv2dQeBjF1GTY5epS-_xZC_J8FFQt5Rr' name="faasos" dis="0.35KM" footer="F&B"/>
          </div>
          <div>
            <HstoreCard img='https://lh3.googleusercontent.com/eWDKq03GYM_sKpTxpF7wYgZqqPeIXgMqv5hAINkV0UoSh9bfjFbIdqhOmcXGlwsTM0g8z_QQk5ZXVoq3fj9mp8F4-o4hGDb3yVQTPWVU' name="cakezone" dis="1.01KM" footer="F&B"/>
          </div>
          <div>
            <HstoreCard img='https://lh3.googleusercontent.com/npTWPUbAoi0LnlVin_GfDdMTfCmXKz0bwWFgd3UB6ShxogXgT53E6kZTwG5kX_mBOdldNhtBz_eian7HEuXJoaZuVgfN3R0gyTd6dOp8' name="eatfit" dis="1.01KM" footer="F&B"/>
          </div>
          <div>
            <HstoreCard img='http://lh3.googleusercontent.com/srFqRJXjE5y3JPrNTcLlt9ICSgwI-p57CdaA2K5ds4G-Z6vkl7E-nYQLcU4HS6vaRUz3AFvnb_LmgCUQf0JjgI0NcoCm' name="hakuna matata" dis="1.18KM" footer="F&B"/>
          </div>
        </Slider>
      </div>
    );
  }
}




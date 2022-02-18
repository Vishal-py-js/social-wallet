import React from "react";
import '../../../node_modules/slick-carousel/slick/slick.css'
import '../../../node_modules/slick-carousel/slick/slick-theme.css'
import Slider from "react-slick"; 
import Arrow from "./Arrow";
import styled from 'styled-components'

const SliderStyle= styled.div`
width: 90%;
//height: 30vh;
//padding: 0;
    .slick-next:before, .slick-prev:before{
        display:none;
    }
    .slick-slide {
        //line-height: 27px;
        //display: flex;
        //gap: 1rem;
        padding: 27px 27px 0 0;
      }
      .slick-prev{
        //position: relative;
        //display: none;
        left: 92%;
        z-index:111 !important;
      }
      .slick-next{
        //position: absolute;
        margin-top: 0.6rem;
        //left: 5px;
        z-index:111 !important;
      }

`
 const Slider1 =(props)=> {

    function NextArrow(props) {
        const {style, onClick } = props;
        return (
          <SliderStyle>  
         <div 
            className="slick-next" 
            style={{...style, display:"block",}}
            onClick={onClick}>
                <Arrow size={props.size}/>
              </div>
              </SliderStyle>
        );
      }
      function PrevArrow(props) {
        const {style, onClick } = props;
        return (
          <SliderStyle chat={props.size}>  
         <div 
            className="slick-prev" 
            style={{...style, display:`${props.size==="chat"?"none":"block"}`, transform: 'scaleX(-1)'}}
            onClick={onClick}>
                <Arrow size={props.size}/>
              </div>
              </SliderStyle>
        );
      }
     
    const settings = {
      dots: false,
      speed: 500,
      variableWidth: true,
      slidesToShow: props.show,
      slidesToScroll: 1,
      prevArrow: <PrevArrow size={props.size}/>,
      nextArrow: <NextArrow size={props.size}/>,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            
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
    }
     return(
          <SliderStyle>      
            <div>
              <Slider {...settings}>
                      {props.children}
              </Slider>
            </div>
          </SliderStyle>

    );
  }


export default Slider1;
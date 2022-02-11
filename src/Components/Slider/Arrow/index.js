import styled from "styled-components"; 
import { useState } from "react";
const arrow = '/assets/icons/next-arrow.svg'

const Arrow = (props) => {
    const [transition, setTransition] = useState('')

    const handleTransition = () => {
        setTransition('maketransition')
        
    }

    const ArrowButton = styled.button`
    padding: 0;
    position: absolute;
    //bottom: 25rem;
    bottom: ${
        props.size==="small"?"6rem":props.size==="big"?"21rem":"26rem"
    };
    background: none;
    right: 20px;
    width:50px;
    height:50px;
    display: flex;
    align-items: center;
    justify-content:center;
    border:none;
    //justify-center: center;
    //opacity:0.8;
    img{ 
        // display:block;
        height: 25px;
    }
    //background: linear-gradient(106.75deg, #22BDFF -2.29%, #0075FF 119.18%);


    transition: all 350ms;
    &:hover{
        transition-duration: 0.1s;
        transform: scale(1.06); 
        opacity:1;
        }
        
        text-decoration: none;
        cursor: pointer;
        transition-duration: 0.3s;
        -webkit-transition-duration: 0.3s; /* Safari */
          
          
          &:hover {
            transition-duration: 0.3s;
          }
          
          &:after {
            
            width: 100%;
            height: 100%;
            opacity: 0;
            transition: all 0.5s;
            
          }
          
          &:active:after {
            
            opacity: 1;
            transition: 0.5s;
          }
          
          &:active {
            transform: scale(1.09); 
            

          }
    `

    return <ArrowButton><img src={arrow} alt="arrow" /></ArrowButton>
}


export default Arrow
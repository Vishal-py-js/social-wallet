import { useState } from "react";
import styled from "styled-components";



const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 9rem;
    width: 6rem;
    text-align: center;
    line-height: 0;
    //border: 1px solid #FB258B;
    border-radius: 5px;
    // box-shadow: inset 0 3px 5px -5px #FB258B,
    //           inset -5px 0 3px -5px #FB258B, 
    //           inset 5px 0 2px -5px #FB258B;
    box-shadow: 5px 5px 5px 0.25px rgba(0, 0, 0, 0.25);
    padding: 1rem 2rem 1rem 2rem;
    background: linear-gradient(97.02deg, rgba(242, 194, 195, 0.12) 5.21%, rgba(242, 194, 195, 0) 97.96%);

    h4{
        color: rgba(13, 3, 51, 1);
        white-space: nowrap;
    }
    h3{
        font-weight: 500;
        font-size: 16px;
        color: rgba(13, 3, 51, 1);
        white-space: nowrap;
    }
    
`

const SellerCard = ({imgSrc}) => {
    const [active, setActive] = useState("")

    const handleSelect = () => {
        setActive("active")
    }

    const x = document.getElementsByClassName("seller-cont")
    // console.log(x);
    // console.log(x.length);
    for(let i=0; i<x.length;i++) {
        // console.log(x[i]);
        x[i].addEventListener("click", function(){
            const selectedOne = document.querySelector(".selected-seller")
            if(selectedOne){
                selectedOne.classList.remove("selected-seller")
            }
            this.classList.add("selected-seller")
        }, false)
    }

    return(
        <Container className="seller-cont" active={active} >
            <img src={imgSrc} alt=""/>
            <h4>NFT seller#01</h4>
            <h3>138.0942 ETH</h3>
        </Container>
    )
}

export default SellerCard
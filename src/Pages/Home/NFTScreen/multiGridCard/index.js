import { useState } from "react";
import styled from "styled-components";


const cardImg1 = "./assets/images/nft-card1.png"
const star = "./assets/icons/star.svg"
const starTransparent = "./assets/icons/star-transparent.svg"
const gem = "./assets/icons/gem.svg"

const Container = styled.div`
    background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.07) 5.21%, rgba(108, 255, 119, 0) 97.96%);
    width: fit-content;
    padding: 0.5rem 1rem 0rem 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: 1px solid #C8FDCB;
`

const Image = styled.div`
    
    .star{
        z-index: 1;
        position: relative;
        margin: 0 0rem 9rem 9.3rem;
        padding: 10px 0px 0 0;
    }
    .image{
        position: absolute;
    }
`

const Text = styled.div`
    display: flex;
    align-items: center;
    //position: relative;
    justify-content: space-between;
    color: #C8FDCB;
    font-size: 19px;
    div{
        display: flex;
    }
`

const MultiCard = ({imgSrc}) => {

    // const [star, setStar] = useState(false)
    return(
        <Container>
            <Image>
                <img className="image" src={imgSrc} alt=""/>
                <img className="star" src={star} alt=""/>
            </Image>
            <Text>
                <p>COMMENT</p>
                <div>
                    <img src={gem} alt=""/>
                    <span>11.44</span>
                </div>
            </Text>
        </Container>
    )
}

export default MultiCard
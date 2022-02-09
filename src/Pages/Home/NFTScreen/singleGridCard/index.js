import { useState } from "react";
import styled from "styled-components";


const cardImg1 = "./assets/images/nft-card-full1.png"
const star = "./assets/icons/star.svg"
const starTransparent = "./assets/icons/star-transparent.svg"
const gem = "./assets/icons/gem.svg"
const user1 = "./assets/icons/nft-card-user1.svg"

const Container = styled.div`
    background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.07) 5.21%, rgba(108, 255, 119, 0) 97.96%);
    width: 75vw;
    padding: 0.5rem 1rem 0rem 0;
    display: flex;

    justify-content: space-around;
    //flex-direction: column;
    gap: 1rem;
    border: 1px solid #C8FDCB;
`

const Image = styled.div`
    
    .star{
        z-index: 1;
        position: absolute;
        right: 37.7rem;
        //margin: 0 5rem 3rem 0rem;
        padding: 10px 0px 0 0;
    }
    .image{
        //position: relative;
        //padding: 0 0 0 3rem;
        width: 60vw;
        height: 40vh;
    }
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    //margin-left: 5rem;
    //position: relative;
    justify-content: center;
    color: #C8FDCB;
    gap: 1rem;
    
    .user{
        font-size: 26px;
        display: flex;
        gap: 1rem;
    }
    .price{
        display: flex;
        gap: 1.5rem;
        span{
            font-size: 24px;
        }
    }
    .sub-price{
        display: flex;
        align-items: center;
        strong{
            font-size: 25px;
        }
    }
    .dollar-value{
        align-self: flex-end;
        font-size: 22px;
    }
    button{
        padding: 15px 30px 15px 30px;
        font-size: 24px;
        font-weight: 500;
        color: rgba(108, 255, 119, 1);
        border: 2px solid rgba(108, 255, 119, 1);
        background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.0) 5.21%, rgba(108, 255, 119, 0) 97.96%);
    }
`

const SingleCard = ({imgSrc}) => {

    // const [star, setStar] = useState(false)
    return(
        <Container>
            <Image>
                <img className="image" src={imgSrc} alt=""/>
                <img className="star" src={star} alt=""/>
            </Image>
            <Text>
                <div className="user">
                    <h4>User#1</h4>
                    <img src={user1} alt="" />
                </div>
                <div className="price">
                    <span>Price</span>
                    <div className="sub-price">
                        <img src={gem} alt=""/>
                        <strong>11.44</strong>
                    </div>
                </div>
                <div className="dollar-value">
                    <span>$ 36.566.20</span>
                </div>
                <br />
                <br />
                <div>
                    <button>SELL NOW</button>
                </div>
            </Text>
        </Container>
    )
}

export default SingleCard
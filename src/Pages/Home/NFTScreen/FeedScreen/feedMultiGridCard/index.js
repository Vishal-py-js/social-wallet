import { useState } from "react";
import styled from "styled-components";


const cardImg1 = "./assets/images/nft-card1.png"
const star = "./assets/icons/star.svg"
const starTransparent = "./assets/icons/star-transparent.svg"
const gem = "./assets/icons/gem.svg"
const userIcon = "./assets/icons/signup1.svg"

const Container = styled.div`
    background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.07) 5.21%, rgba(108, 255, 119, 0) 97.96%);
    width: fit-content;
    padding: 0.5rem 0.6rem 0.5rem 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border: 1px solid #C8FDCB;
`

const Image = styled.div`
    img{
        width: 13rem;
    }
    
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    //align-items: center;
    //position: relative;
    justify-content: center;
    gap: 0.5rem;
    color: #C8FDCB;
    font-size: 19px;
    .user-detail{
        display: flex;
        justify-content: flex-start;
        gap: 10px;
        align-items: center;
        strong{
            font-size: 17px;
            font-weight: 500;
        }
    }
    .user-stats{
        display: flex;
        justify-content: space-between;
        .likes{
            display: flex;
            align-items: center;
            gap: 4px;
            img{
                height: 20px;
            }
        }
        span{
            font-weight: 300;
        }
    }
`

const FeedMultiCard = ({imgSrc}) => {

    // const [star, setStar] = useState(false)
    return(
        <Container>
            <Image>
                <img className="image" src={imgSrc} alt=""/>
                {/* <img className="star" src={star} alt=""/> */}
            </Image>
            <Text>
                <div className="user-detail">
                    <img src={userIcon} />
                    <strong>User#1's collections</strong>
                </div>
                <div className="user-stats">
                    <div className="likes">
                        <img src={star} alt="star"/>
                        <span>5k</span>
                    </div>
                    <span>Comment</span>
                    <img src={gem} alt="gem"/>
                </div>
            </Text>
        </Container>
    )
}

export default FeedMultiCard
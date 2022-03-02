import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";


const cardImg1 = "./assets/images/nft-card-full1.png"
const star = "./assets/icons/star.svg"
const starTransparent = "./assets/icons/star-transparent.svg"
const gem = "./assets/icons/gem.svg"
const user1 = "./assets/icons/nft-card-user1.svg"

const Container = styled.div`
    background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.07) 5.21%, rgba(108, 255, 119, 0) 97.96%);
    width: ${
        props=>props.chatDisplay?"50vw":"75vw"
    };
    transition: 0.7s;
    margin-left: 1vw;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    display: flex;

    //justify-content: space-around;
    flex-direction: column;
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
        width: 100%;
        height: 40vh;
    }
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
    color: #C8FDCB;
    gap: 1rem;
    
    .user{
        font-size: 26px;
        display: flex;
        justify-content: space-between;
        gap: 1rem;
    }
    .user-action{
        display: flex;
        align-items: center;
        gap: 20px;
        strong{
            font-size: 22px;
            font-weight: 400;
        }
    }
    .gem{
        img{
            height: 35px;
        }
    }

    .likes{
        display: flex;
        align-items: center;
        gap: 4px;
        img{
            height: 20px;
        }
    }
    .price{
        display: flex;
        justify-content: space-between;
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
    .like-container{
        display: flex;
        justify-content: space-between;
        gap: 4rem;
        align-items: center;
        span{
            font-size: 20px;
        }
    }
`

const FeedSingleCard = ({imgSrc}) => {

    const chatDisplay=useSelector(state=>state.chat)
    // const [star, setStar] = useState(false)
    return(
        <Container chatDisplay={chatDisplay}>
            <Image>
                <img className="image" src={imgSrc} alt=""/>
                {/* <img className="star" src={star} alt=""/> */}
            </Image>
            <Text>
                <div className="user">
                    <div className="user-action">
                        <img src={user1} alt="user"/>
                        <strong>User#1 added to their collections</strong>
                    </div>
                    <div className="gem">
                        <img src={gem} alt="" />
                    </div>
                </div>
                <div className="price">
                    <div className="like-container">
                        <div className="likes">
                            <img src={star} alt="star"/>
                            <span>5k</span>
                        </div>
                        <div>
                            <span>Comment</span>
                        </div>
                    </div>
                    <div>
                        <span>$ 36.566.20</span>
                    </div>
                </div>
                
                
                
            </Text>
        </Container>
    )
}

export default FeedSingleCard
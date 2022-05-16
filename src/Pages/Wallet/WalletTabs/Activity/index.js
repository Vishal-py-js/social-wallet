import { useSelector } from "react-redux";
import styled from "styled-components";

const user1 = "./assets/icons/signup1.svg"
const user2 = "./assets/icons/signup2.svg"
const user3 = "./assets/icons/friend1.svg"
const user4 = "./assets/icons/friend3.svg"


const nft1 = "./assets/icons/nft-icon1.svg"
const nft2 = "./assets/icons/nft-icon2.svg"
const nft3 = "./assets/icons/nft-icon3.svg"
const nft4 = "./assets/icons/nft-icon4.svg"
const gem = "/assets/icons/gem.svg"

const Container = styled.div`
    //height: 30rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    //padding: 1rem 2rem 0 1rem;
    padding: ${
        props=>props.chatDisplay?"1rem 0.3rem 0 4rem":"1rem 2rem 0 4rem"
    };
    .title{
        display: flex;
        //gap: 14vw;
        //color: gray;
        color: rgba(13, 3, 51, 1);
        font-size: 16px;
        font-weight: 500;
        justify-content: space-between;
        padding: 1rem 1.2rem 0 1.2rem;
    }
`

const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;
    // box-shadow: inset 0 3px 0px -2px rgba(108, 255, 119, 1),
    //                 inset -4px 0 3px -3px rgba(108, 255, 119, 1), 
    //                 inset 4px 0 0px -3px rgba(108, 255, 119, 1);
    box-shadow: 10px 10px 20px 0.25px rgba(0, 0, 0, 0.25);
    padding: 1rem 0.5rem 1rem 1rem;
    //color: #fff;
    background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.07) 5.21%, rgba(108, 255, 119, 0) 97.96%);
    .seller{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 6px 6px;
        //color: #C8FDCB;
        color: rgba(13, 3, 51, 1);
        img{
            // box-shadow: inset 0 6px 0px -4px rgba(108, 255, 119, 1),
            //         inset -4px 0 4px -3px rgba(108, 255, 119, 1), 
            //         inset 5px 0 0px -3px rgba(108, 255, 119, 1);
            border: 2px solid rgba(200, 253, 203, 1);
            padding: 8px 8px;
            border-radius: 5px;
            //height: 30px;
        }
    }
    .nft{
        img{
            //height: 43px;
        }
    }
    .price{
        display: flex;
        flex-direction: column;
        gap: 5px;
        span{
            //color: rgba(200, 253, 203, 1);
            color: rgba(13, 3, 51, 1);
            align-self: center;
        }
        div{
            display: flex;
            strong{
                //color: rgba(200, 253, 203, 1);
                color: rgba(13, 3, 51, 1);
                font-size: 22px;
            }
        }
    }
    .time{
        //color: gray;
        color: rgba(13, 3, 51, 1);
    }
`

const ActivityCard = ({nftImg, buyerImg}) => {
    return (
        <CardContainer>
            <div className="seller">
                <img src={user1}/>
                <span>User#1</span>
            </div>
            <div className="nft">
                <img src={nftImg} alt="nft" />
            </div>
            <div className="price">
                <div>
                    <img src={gem} alt=""/>
                    <strong>0.032</strong>
                </div>
                <span>$309</span>
            </div>
            <div className="seller">
                <img src={buyerImg}/>
                <span>User#2</span>
            </div>
            <div className="time">
                <span>1 hour ago</span>
            </div>
        </CardContainer>
    )
}

const Activity = () => {
    const chatDisplay = useSelector(state=>state.chat)
    return(
        <Container chatDisplay={chatDisplay}>
            <div className="title">
                <span style={{marginRight: "0px"}}>SELLER</span>
                <span>NFT</span>
                <span>PRICE</span>
                <span>BUYER</span>
                <span>TIME</span>
            </div>
            <ActivityCard nftImg={nft2} buyerImg={user2}/>
            <ActivityCard nftImg={nft3} buyerImg={user3}/>
            <ActivityCard nftImg={nft4} buyerImg={user4}/>
        </Container>
    )
}

export default Activity
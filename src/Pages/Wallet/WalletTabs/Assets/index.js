import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const cardImg1 = "assets/images/asset-card1.png"
const cardImg2 = "assets/images/asset-card2.png"
const cardImg3 = "assets/images/asset-card3.png"
const dropdown = "assets/icons/dropdown-icon.svg"


const Container = styled.div`
    //height: 4rem;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-left: 4rem;
    padding-right: 2rem;
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    color: gray;
    //height: 6rem;
    justify-content: space-between;
    .container1{
        display: flex;
        align-items: center;
        //justify-content: center;
        gap: 1rem;
        .img{
            height: 8rem;
        }
        .container1-content{
            display: flex;
            flex-direction: column;
            padding-bottom: 1rem;
            //align-items: center;
            p{
                font-size: 20px;
                font-weight: 500;
            }
            div{
                display: flex;
                gap: 10px;
                align-items: center;
                small{
                    font-size: 15px;
                    //font-weight: 400;
                }
                span{
                    font-size: 17px;
                    font-weight: 500;
                }
            }
        }
    }
    .container2{
        display: flex;
        //flex-direction: column;
        align-items: center;
        gap: 12rem;
        .container2-content{
            display: flex;
            flex-direction: column;
            //justify-content: space-around;
            //padding: 10px 0 10px 0;
            //padding-top: 1rem;
            //padding-bottom: 1rem;
            //padding: 15px 0 15px 0;
            line-height: 0;
            gap: 0;
            .usd{
                height: 2.5rem;
                display: flex;
                align-items: center;
                //margin-top: 1rem;
                //justify-content: center;
                gap: 3px;
                h4{
                    font-size: 22px;
                    color: #6CFF77;
                    font-weight: 500;
                }
                small{
                    color: #FB258B;
                    font-size: 12px;
                    padding-top: 6px;
                }
                h3{
                    font-size: 12px;
                    padding-top: 5px;
                }
                h6{
                    font-size: 18px;
                    font-weight: 400;
                }
            }
            .eth{
                height: 2.5rem;
                display: flex;
                align-items: center;
                //margin-bottom: 1rem;
                //justify-content: center;
                gap: 3px;
                h4{
                    font-size: 22px;
                    color: #6CFF77;
                    font-weight: 500;
                }
                small{
                    color: #FB258B;
                    font-size: 12px;
                    padding-top: 6px;
                }
                h3{
                    font-size: 12px;
                    padding-top: 5px;
                }
                h6{
                    font-size: 18px;
                    font-weight: 400;
                }
            }
        }
    }
    .dropd-image{
        transform: rotate(-90deg);
        height: 15px;
    }
`

const AssetCard = ({imgSrc, title}) => {
    return(
        <CardContainer>
            <div className="container1">
                <img className="img" src={imgSrc} alt=""/>
                <div className="container1-content">
                    <p>{title}</p>
                    <div>
                        <small>3rd Feb</small>
                        <span>234rytvce37cs8</span>
                    </div>
                </div>
            </div>
            <div className="container2">
                <div className="container2-content">
                    <div className="usd">
                        <h4>100</h4>
                        <small>USD</small>
                    </div>
                    <div className="eth">
                        <h6>0.032</h6>
                        <h3>ETH</h3>
                    </div>
                </div>
                <div>
                    <img className="dropd-image" src={dropdown} alt=""/>
                </div>
            </div>
            {/* <div>
                <img className="dropd-image" src={dropdown} alt=""/>
            </div> */}
            
        </CardContainer>
    )
}

const Assets = () => {
    const NFTs = useSelector(state => state.nfts.nfts)

    return(
        <Container>
            {
                NFTs.length===0?<h3 style={{color: "white"}}>You don't have any NFT yet</h3>:
                NFTs.map(nft=>(
                    <AssetCard title={nft.meta.name} imgSrc={nft.meta.content[1].url}/>
                ))
            }
        </Container>
    )
}

export default Assets
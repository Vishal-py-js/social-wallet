import React from "react";
import styled from "styled-components";
// import FeedMultiCard from "../ProfileScreen/multiGridCard";
// import FeedSingleCard from "../ProfileScreen/singleGridCard";
import FeedMultiCard from "./feedMultiGridCard";
import FeedSingleCard from "./feedSingleGridCard";

const cardImg1 = "./assets/images/nft-feed-card1.png"
const cardImg2 = "./assets/images/nft-feed-card2.png"
const cardImg3 = "./assets/images/nft-feed-card3.png"
const cardImg4 = "./assets/images/nft-feed-card4.png"
const cardImg5 = "./assets/images/nft-card5.png"
const cardImg6 = "./assets/images/nft-card6.png"
const cardImg7 = "./assets/images/nft-card-full1.png"
const cardImg8 = "./assets/images/nft-feed-card-full1.png"
const cardImg9 = "./assets/images/nft-feed-card-full2.png"

const Content = styled.div`
    display: grid;
    //align-items: center;
    grid-gap: 2rem;
    grid-template-columns: ${
        props=>props.gridView==="MV"?"repeat(5, minmax(0, 1fr))":
        "repeat(1, minmax(0, 1fr))"
    };
`

const FeedScreen = ({gridView}) => {
    return(
        <Content gridView={gridView}>
                    {
                        gridView==="MV"?
                        <React.Fragment>
                            <FeedMultiCard imgSrc={cardImg1}/>
                            <FeedMultiCard imgSrc={cardImg2}/>
                            <FeedMultiCard imgSrc={cardImg3}/>
                            <FeedMultiCard imgSrc={cardImg4}/>
                            <FeedMultiCard imgSrc={cardImg2}/>
                            <FeedMultiCard imgSrc={cardImg1}/>
                            {/* <FeedMultiCard imgSrc={cardImg5}/>
                            <FeedMultiCard imgSrc={cardImg3}/>
                            <FeedMultiCard imgSrc={cardImg4}/>
                            <FeedMultiCard imgSrc={cardImg2}/>
                            <FeedMultiCard imgSrc={cardImg1}/>
                            <FeedMultiCard imgSrc={cardImg3}/> */}
                        </React.Fragment>:
                        gridView==="SV"?
                        <React.Fragment>
                        <FeedSingleCard imgSrc={cardImg8}/>
                        <FeedSingleCard imgSrc={cardImg9}/>
                        <FeedSingleCard imgSrc={cardImg8}/>
                        <FeedSingleCard imgSrc={cardImg9}/>
                        <FeedSingleCard imgSrc={cardImg8}/>
                        {/* <FeedSingleCard imgSrc={cardImg6}/>
                        <FeedSingleCard imgSrc={cardImg5}/>
                        <FeedSingleCard imgSrc={cardImg3}/>
                        <FeedSingleCard imgSrc={cardImg4}/>
                        <FeedSingleCard imgSrc={cardImg2}/>
                        <FeedSingleCard imgSrc={cardImg1}/>
                        <FeedSingleCard imgSrc={cardImg3}/> */}
                    </React.Fragment>:""
                    }
                
                </Content>
    )
}

export default FeedScreen
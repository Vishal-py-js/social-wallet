import React from "react";
import styled from "styled-components";
import ProfileMultiCard from "./multiGridCard";
import ProfileSingleCard from "./singleGridCard";

const cardImg1 = "./assets/images/nft-card1.png"
const cardImg2 = "./assets/images/nft-card2.png"
const cardImg3 = "./assets/images/nft-card3.png"
const cardImg4 = "./assets/images/nft-card4.png"
const cardImg5 = "./assets/images/nft-card5.png"
const cardImg6 = "./assets/images/nft-card6.png"
const cardImg7 = "./assets/images/nft-card-full1.png"

const Content = styled.div`
    display: grid;
    //align-items: center;
    grid-gap: 2rem;
    grid-template-columns: ${
        props=>props.gridView==="MV"?"repeat(6, minmax(0, 1fr))":
        "repeat(1, minmax(0, 1fr))"
    };
`

const ProfileScreen = ({gridView}) => {
    return(
        <Content gridView={gridView}>
                    {
                        gridView==="MV"?
                        <React.Fragment>
                            <ProfileMultiCard imgSrc={cardImg1}/>
                            <ProfileMultiCard imgSrc={cardImg2}/>
                            <ProfileMultiCard imgSrc={cardImg3}/>
                            <ProfileMultiCard imgSrc={cardImg4}/>
                            <ProfileMultiCard imgSrc={cardImg5}/>
                            <ProfileMultiCard imgSrc={cardImg6}/>
                            <ProfileMultiCard imgSrc={cardImg5}/>
                            <ProfileMultiCard imgSrc={cardImg3}/>
                            <ProfileMultiCard imgSrc={cardImg4}/>
                            <ProfileMultiCard imgSrc={cardImg2}/>
                            <ProfileMultiCard imgSrc={cardImg1}/>
                            <ProfileMultiCard imgSrc={cardImg3}/>
                        </React.Fragment>:
                        gridView==="SV"?
                        <React.Fragment>
                        <ProfileSingleCard imgSrc={cardImg1}/>
                        <ProfileSingleCard imgSrc={cardImg2}/>
                        <ProfileSingleCard imgSrc={cardImg3}/>
                        <ProfileSingleCard imgSrc={cardImg4}/>
                        <ProfileSingleCard imgSrc={cardImg5}/>
                        <ProfileSingleCard imgSrc={cardImg6}/>
                        <ProfileSingleCard imgSrc={cardImg5}/>
                        <ProfileSingleCard imgSrc={cardImg3}/>
                        <ProfileSingleCard imgSrc={cardImg4}/>
                        <ProfileSingleCard imgSrc={cardImg2}/>
                        <ProfileSingleCard imgSrc={cardImg1}/>
                        <ProfileSingleCard imgSrc={cardImg3}/>
                    </React.Fragment>:""
                    }
                
                </Content>
    )
}

export default ProfileScreen
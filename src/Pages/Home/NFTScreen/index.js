import React, { useState } from "react";
import styled from "styled-components";
import Banner from "./Banner";
import MultiCard from "./multiGridCard";
import SingleCard from "./singleGridCard";

const layout1 = "/assets/icons/nft-layout1.svg"
const layout2 = "/assets/icons/nft-layout2.svg"

const cardImg1 = "./assets/images/nft-card1.png"
const cardImg2 = "./assets/images/nft-card2.png"
const cardImg3 = "./assets/images/nft-card3.png"
const cardImg4 = "./assets/images/nft-card4.png"
const cardImg5 = "./assets/images/nft-card5.png"
const cardImg6 = "./assets/images/nft-card6.png"
const cardImg7 = "./assets/images/nft-card-full1.png"


const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 5rem;
    margin: 0 7rem 0 7rem;
`

const Body = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const Selector = styled.div`
    display: flex;
    justify-content: space-between;
    select{
        background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.07) 5.21%, rgba(108, 255, 119, 0) 97.96%);
        color: #C8FDCB;
        height: 3rem;
        border-radius: 5px;
        font-size: 19px;
        padding: 0 1rem 0 1rem;
        text-align: center;
        option{
            color: #C8FDCB;
            background: black;
            border-radius: 5px;
        }
    }
    .layout-select{
        width
    }
`

const Content = styled.div`
    display: grid;
    //align-items: center;
    grid-gap: 5rem;
    grid-template-columns: ${
        props=>props.gridView==="MV"?"repeat(6, minmax(0, 1fr))":
        "repeat(1, minmax(0, 1fr))"
    };
    //grid-template-columns: repeat(6, minmax(0, 1fr));
`

const NFT = (props) => {
    const [gridView, setGridView] = useState("MV")
    const handleChange = (e) => {
        setGridView(e.target.value)
        console.log(e.target.value);
    }
    return(
        <Container>
            <Banner />
            <Body>
                <Selector>
                    <select>
                        <option>PROFILE</option>
                        <option>PROFILE</option>
                        <option>PROFILE</option>
                    </select>
                    {/* <form></form> */}
                    <select onChange={e=>handleChange(e)}>
                        <option>MV</option>
                        <option>SV</option>
                    </select>
                </Selector>
                <Content gridView={gridView}>
                    {
                        gridView==="MV"?
                        <React.Fragment>
                            <MultiCard imgSrc={cardImg1}/>
                            <MultiCard imgSrc={cardImg2}/>
                            <MultiCard imgSrc={cardImg3}/>
                            <MultiCard imgSrc={cardImg4}/>
                            <MultiCard imgSrc={cardImg5}/>
                            <MultiCard imgSrc={cardImg6}/>
                            <MultiCard imgSrc={cardImg5}/>
                            <MultiCard imgSrc={cardImg3}/>
                            <MultiCard imgSrc={cardImg4}/>
                            <MultiCard imgSrc={cardImg2}/>
                            <MultiCard imgSrc={cardImg1}/>
                            <MultiCard imgSrc={cardImg3}/>
                        </React.Fragment>:
                        gridView==="SV"?
                        <React.Fragment>
                        <SingleCard imgSrc={cardImg1}/>
                        <SingleCard imgSrc={cardImg2}/>
                        <SingleCard imgSrc={cardImg3}/>
                        <SingleCard imgSrc={cardImg4}/>
                        <SingleCard imgSrc={cardImg5}/>
                        <SingleCard imgSrc={cardImg6}/>
                        <SingleCard imgSrc={cardImg5}/>
                        <SingleCard imgSrc={cardImg3}/>
                        <SingleCard imgSrc={cardImg4}/>
                        <SingleCard imgSrc={cardImg2}/>
                        <SingleCard imgSrc={cardImg1}/>
                        <SingleCard imgSrc={cardImg3}/>
                    </React.Fragment>:""
                    }

                    {/* <SingleCard imgSrc={cardImg7}/>
                    <SingleCard imgSrc={cardImg7}/>
                    <SingleCard imgSrc={cardImg7}/> */}
                
                </Content>
            </Body>
        </Container>
    )
}

export default NFT
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { shareModalOff } from "../../../Redux/Modal/ShareModal/Actions";
import ShareNFTModal from "../../../Shared/ShareNFTModal";
import Banner from "./Banner";
import FeedScreen from "./FeedScreen";
import ProfileScreen from "./ProfileScreen";

const layout1 = "/assets/icons/nft-layout1.svg"
const layout2 = "/assets/icons/nft-layout2.svg"

const Container = styled.div`
    height: 100%;
    display: flex;
    //width: 60vw;
    //opacity: 0.4;
    flex-direction: column;
    gap: 5rem;
    margin: 0 5rem 0 5rem;
    .share-modal{
        position: fixed;
        z-index: 111 !important;
        height: 100vh;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100vw;
        backdrop-filter: brightness(10%);
    }
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

const NFT = (props) => {
    const [gridView, setGridView] = useState("MV")
    const [selectScreen, setSelectScreen] = useState("PROFILE")

    const shareModal = useSelector(state=>state.share)
    const dispatch = useDispatch()

    const handleViewChange = (e) => {
        setGridView(e.target.value)
        console.log(e.target.value);
    }

    const handleScreenChange = (e) => {
        setSelectScreen(e.target.value)
        console.log(e.target.value);
    }

    const shareModalHandler = () => {
        dispatch(shareModalOff())
    }

    return(
        <Container>
            {
                shareModal?<div className="share-modal"><ShareNFTModal /></div>:""
            }
            <Banner />
            <Body>
                <Selector>
                    <select onChange={e=>handleScreenChange(e)}>
                        <option>PROFILE</option>
                        <option>FEED</option>
                    </select>
                    {
                        selectScreen==="PROFILE"?
                        <select onChange={e=>handleViewChange(e)}>
                            <option>MV</option>
                            <option>SV</option>
                        </select>:
                        <select onChange={e=>handleViewChange(e)}>
                            <option>MV</option>
                            <option>SV</option>
                            <option>AV</option>
                        </select>
                    }
                </Selector>
                {
                    selectScreen==="PROFILE"?<ProfileScreen gridView={gridView}/>:<FeedScreen gridView={gridView}/>
                }
            </Body>
        </Container>
    )
}

export default NFT
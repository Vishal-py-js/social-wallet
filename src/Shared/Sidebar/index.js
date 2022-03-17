import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
//import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { showChat, hideChat } from "../../Redux/Chat/Actions"
import { hashModalOff, hashModalOn } from "../../Redux/Modal/HashModal/Actions";
import SideBarItem from "./SidebarItem";
import { useEffect } from "react";

const userIcon = "assets/icons/signup1.svg"
const hashIcon = "assets/icons/hash-icon.svg"
const galleryIcon = "assets/icons/gallery-icon.svg"
const coinIcon = "assets/icons/coin-icon.svg"
const chatIcon = "assets/icons/chat-icon.svg"
const settingsIcon = "assets/icons/settings-icon.svg"


const Container = styled.div`
    background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.07) 5.21%, rgba(108, 255, 119, 0) 97.96%);
    height: 100vh;
    width: 114px;
    position: fixed;
    display: flex;
    //top: 0;
    //left: ;
    //right: 33.6vw;
    right: ${
        props=>props.chatDisplay?"33.6vw":"0"
    };
    transition: 0.7s;
    flex-direction: column;
    justify-content: space-around;
    .selected-item{
        transition: 0.3s;
        box-shadow: inset 0px 2px 0px 0px #C8FDCB,
                    inset -5px 0 7px -5px #C8FDCB, 
                    inset 5px 0px 7px -5px #C8FDCB;
        padding: 10px 0px 0 0px;
        margin: 0 17px 0 7px;
        margin: ${
            props=>props.chatDisplay?"0 17px 0 7px":"0 7px 0 7px"
        };
        border-radius: 10px;
    }
    @media (max-width: 768px) {
        width: 85px;
    }
`

const Sidebar = (props) => {

    const chatDisplay = useSelector(state=>state.chat)
    const hashModal = useSelector(state=>state.hash)
    const dispatch = useDispatch()

    const history = useHistory()

    const handleUserClick = () => {
        history.push("/editprofile")
    }

    const handleChatClick = () => {
        if(chatDisplay) {
            dispatch(hideChat())
            console.log("hidden");
        } else {
            dispatch(showChat())
            console.log("showing");
        }
    }

    const handleHashClick = () => {
        if(hashModal) {
            dispatch(hashModalOff())
        } else {
            dispatch(hashModalOn())
        }
    }

    const handleCoinsClick = () => {
        history.push("/wallet")
    }

    // const doc = document.getElementsByClassName("chat-sec")
    // console.log(doc);
    // doc.addEventListener("click", function(){
    //     const itm = document.querySelector("#myChat")
    //     itm.classList.add("chat-select")
    //     //this.classList.add("chat-select")
    // })

    return(
        <Container chatDisplay={chatDisplay}>
            <SideBarItem imgSrc={userIcon} title="USER" onClick={handleUserClick}/>
            <SideBarItem imgSrc={hashIcon} title="HASH" onClick={handleHashClick}/>
            {/* <SideBarItem imgSrc={galleryIcon} title="GALLERY"/> */}
            <SideBarItem imgSrc={coinIcon} title="WALLET" onClick={handleCoinsClick}/>
            <SideBarItem className="chat-sec" imgSrc={chatIcon} title="CHAT" onClick={handleChatClick}/>
            <SideBarItem imgSrc={settingsIcon} title="SETTINGS"/>
        </Container>
    )
}

export default Sidebar
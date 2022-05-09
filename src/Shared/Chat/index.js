import React from "react"
import styled from "styled-components";
import {useState, useEffect} from "react"
import {messages} from "./messages"
import { useDispatch, useSelector } from "react-redux";
import PrivateChat from "./PrivateChat";
import GroupChat from "./GroupChat";
import { hideFullScreenChat, showFullScreenChat } from "../../Redux/FullScreenChat/Actions";

const expand = "assets/icons/expand.svg"


const Container = styled.div`
    position: fixed;
    z-index: 111 !important;
    //background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.05) 5.21%, rgba(108, 255, 119, 0) 97.96%);
    background: black;
    //background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.15) 5.21%, rgba(108, 255, 119, 0.06) 97.96%);
    opacity: 0.95;
    height: ${
        props=>props.chatDisplay?"100vh":"0"
    };
    color: white;
    width: ${
        props=>
        props.chatDisplay&&props.fullScreen?"100%":
        props.chatDisplay?"33%":"0"
    };
    display: flex;
    ::-webkit-scrollbar{
        display: none;
    }
    padding-right: 1rem;
    padding-top: 1rem;
    flex-direction: column;
    gap: 1rem;
    //max-width: 35rem;
    transition: width 0.7s;
    //transition: width 0.8s;
    border-left: 3px solid rgba(108, 255, 119, 1);
    top: 0;
    left: auto;
    right: 0;
    hr{
        width: 29rem;
        color: gray;
        height:1px;
        border-width:0;
        background-color:gray;
    }
    .selected-friend-card{
        border: 1px solid;
        border-image: linear-gradient(180deg, #C8FDCB 80%, rgba(0, 0, 0, 0) 100%);
        border-image-slice: 1;
        transition: 0.5s;
        //transform: scale(1.05);
    }
    .expand2{
        filter: invert(74%) sepia(68%) saturate(370%) hue-rotate(67deg) brightness(100%) contrast(108%);
        height: 50px;
    }
    .expand{
        position: absolute;
        height: 50px;
        right: 30px;
        cursor: pointer;
        filter: invert(74%) sepia(68%) saturate(370%) hue-rotate(67deg) brightness(100%) contrast(108%);
    }
`

const ToggleContainer = styled.div`
    display: ${
        props=>props.chatDisplay?"flex":"none"
    };

    justify-content: center;
    gap: 2rem;
    width: ${
        props=>props.chatDisplay?"100%":"0px"
    };
    
    transition: 0.7s;
    align-items: center;
    .activate{
        //background: rgba(255, 158, 205, 0.15);
        border: 2px solid #C8FDCB;
        color: rgba(200, 253, 203, 0.8);
    }
    div{
        width: ${
            props=>props.chatDisplay?"3px":"0px"
        };
        //width: 3px;
        background: #6CFF77;
    }
    .expand2{
        filter: invert(74%) sepia(68%) saturate(370%) hue-rotate(67deg) brightness(100%) contrast(108%);
        height: 50px;
    }
    .expand{
        position: absolute;
        height: 50px;
        right: 30px;
        cursor: pointer;
        filter: invert(74%) sepia(68%) saturate(370%) hue-rotate(67deg) brightness(100%) contrast(108%);
    }
`

const Button = styled.button`
    
    padding: 10px 20px;
    background: rgba(200, 253, 203, 0.15);
    //color: rgba(200, 253, 203, 0.8);
    color: rgba(200, 253, 203, 0.5);
    font-size: 19px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 20px;
    border: 2px solid rgba(200, 253, 203, 0.15);
`

const FullScreenContainer = styled.div`
    display: flex;
    flex-direction: row;
    
    overflow: scroll;
    justify-content: space-around;
    ::-webkit-scrollbar{
        display: none;
    }
`

const PlaceHolder = styled.div`
    display: flex;
    flex-direction: row;

    overflow: scroll;
    justify-content: space-around;
    ::-webkit-scrollbar{
        display: none;
    }
`


const Chat = () => {

    const [active, setActive] = useState("Private")    
    const chatDisplay=useSelector(state=>state.chat)
    const fullScreen = useSelector(state=>state.fullScreenChat)

    const dispatch = useDispatch()

    const handleActive = (clickedComp) => {
        setActive(clickedComp)
    }

    const showFullScreen = () => {
        dispatch(showFullScreenChat())
    }

    const hideFullScreen = () => {
        dispatch(hideFullScreenChat())
    }
    
    return(
        <Container chatDisplay={chatDisplay} fullScreen={fullScreen} id="myChat">
            {/* <img onClick={hideFullScreen} className="expand2" src={expand} alt=""/>
            <img onClick={showFullScreen} className="expand" src={expand} alt=""/> */}
            <ToggleContainer chatDisplay={chatDisplay} fullScreen={fullScreen}>
            
                <Button className={active==="Private"?"activate":""} onClick={()=>handleActive("Private")}>CHAT</Button>
                <div></div>
                <img onClick={hideFullScreen} className="expand2" src={expand} alt=""/>
                <img onClick={showFullScreen} className="expand" src={expand} alt=""/>
                <Button className={active==="Group"?"activate":""} active={active} onClick={()=>handleActive("Group")}>GROUP CHAT</Button>
                
            </ToggleContainer>
            

            {
                active==="Private"&&fullScreen==false?<PlaceHolder><PrivateChat /></PlaceHolder>
                :active==="Group"&&fullScreen==false?<PlaceHolder><GroupChat /></PlaceHolder>:""
            }
            {
                fullScreen?
                <FullScreenContainer>
                    <PrivateChat />
                    <GroupChat />
                </FullScreenContainer>:""
            }
            
        </Container>
    )
}

export default Chat
import React from "react"
import styled from "styled-components";
import {useState, useEffect} from "react"
import {messages} from "./messages"
import { useSelector } from "react-redux";
import PrivateChat from "./PrivateChat";


const Container = styled.div`
    position: fixed;
    z-index: 111 !important;
    //background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.05) 5.21%, rgba(108, 255, 119, 0) 97.96%);
    background: black;
    opacity: 0.95;
    height: ${
        props=>props.chatDisplay?"100vh": "0"
    };
    color: white;
    width: ${
        props=>props.chatDisplay?"33%":"0"
    };
    display: flex;
    
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
        box-shadow: inset 0 6px 0px -5px rgba(108, 255, 119, 1),
                    inset -4px 0 4px -2px rgba(108, 255, 119, 1), 
                    inset 5px 0 0px -3px rgba(108, 255, 119, 1);
        transition-duration: 0.3s;
        transform: scale(1.05);
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
    .activate{
        //background: rgba(255, 158, 205, 0.15);
        border: 2px solid #C8FDCB;
        color: rgba(200, 253, 203, 0.8);
    }
    div{
        width: 3px;
        background: #6CFF77;
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


const Chat = () => {

    const [active, setActive] = useState("Private")    
    const chatDisplay=useSelector(state=>state.chat)

    const handleActive = (clickedComp) => {
        setActive(clickedComp)
    }
    
    return(
        <Container chatDisplay={chatDisplay} id="myChat">
            <ToggleContainer chatDisplay={chatDisplay}>
                <Button className={active==="Private"?"activate":""} onClick={()=>handleActive("Private")}>CHAT</Button>
                <div></div>
                <Button className={active==="Group"?"activate":""} active={active} onClick={()=>handleActive("Group")}>GROUP CHAT</Button>
            </ToggleContainer>

            {
                active==="Private"?<PrivateChat />: ""
            }
            
        </Container>
    )
}

export default Chat
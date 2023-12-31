import React from "react"
import styled from "styled-components";
import {useState, useEffect} from "react"
import RecievedMessage from "../RecievedMessage";
import SentMessage from "../SentMessage";
import {messages} from "../messages"
import Slider1 from "../../../Components/Slider";
import FriendCard from "../FriendCard";
import { useSelector } from "react-redux";
import PrivateChatSearch from "./ChatSearch";

const userIcon = "assets/icons/signup1.svg"
const userIcon2 = "assets/icons/signup2.svg"

const friendIcon3 = '/assets/icons/friend1.svg'
const friendIcon4 = '/assets/icons/friend2.svg'
const friendIcon5 = '/assets/icons/friend3.svg'

const plusIcon = "assets/icons/plus-icon.svg"
const inputIcon = "assets/icons/msg-input-icon.svg"

const searchIcon = "assets/icons/magnifier.svg"
const back = "assets/icons/back.svg"

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const RecentChats = styled.div`
    //display: flex;
    display: ${
        props=>props.chatDisplay?"flex":"none"
    };
    //remove width
    //width: 50%;
    flex-direction: column;
    margin: 0rem 3rem 0 4rem;
    gap: 0rem;
`

const CardContainer = styled.div`
    //display: flex;
    //flex-direction: row;
    //gap: 0rem;
    width: 25rem;
    align-self: flex-end;
    //padding: 0 6rem 0rem 0;
`

const Messages = styled.div`
    padding: 2rem 0rem 0 0rem;
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
    visibility: ${
        props=>props.chatSearch?"hidden":"visible"
    };
    //overflow: scroll;
    //transition: height 1s;
    scroll-snap-align: end;
    //scroll-snap-type: y proximity;
    ::-webkit-scrollbar{
        display: none;
    }
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    overflow-y: scroll;
    gap: 35px;
    .message{
        color: black;
        display: flex;
        background: #6CFF77;
        padding: 5px 15px;
        border: 1px solid #6CFF77;
        
        p{
            word-wrap: no-wrap;
        }
    }
`

const Search = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: ${
        props=>props.fullScreen?"relative":"relative"
    };
    top: ${
        props=>props.fullScreen?"4.5rem":"4.3rem"
    };
    //right: 0;
    //left: 20rem;
    left: ${
        props=>props.fullScreen?"-2.4rem":""
    };
    width: ${
        props=>props.chatSearch?"31rem":"2rem"
    };
    right: ${
        props=>props.chatSearch?"0rem":"3rem"
    };
    //transition: 0.7s;
    border: 2px solid rgba(108, 255, 119, 1);
    padding: 1rem 1rem;
    background: none;
    .back-arrow{
        display: ${
            props=>props.chatSearch?"flex":"none"
        };
    }
    input{
        background: none;
        border: none;
        font-size: 20px;
        color: #C8FDCB;
        display: ${
            props=>props.chatSearch?"flex":"none"
        };
        :focus{
            outline: none;
        }
    }
    img{
        height: 30px;
    }
`

const MessageInput = styled.form`
    //display: flex;
    display: ${
        props=>props.chatSearch?"none":"flex"
    };
    justify-content: space-between;
    padding: 10px 10px 10px 10px;
    margin-left: 2em;
    margin-bottom: 2rem;
    background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.07) 5.21%, rgba(185, 11, 122, 0.06) 97.96%);
    background: rgba(144, 255, 153, 1);
    //border: 1px solid #6CFF77; 
    border: 1px solid rgba(13, 3, 51, 1);
    img{
        height: 30px;
    }
    div{
        display: flex;
        gap: 1.5rem;
        input{
            width: 20rem;
            border: none;
            background: none;
            color: black;
            font-size: 18px;
            :focus{
                outline: none;
            }
        }
    }
`

const PrivateChat = () => {

    const [inputtext, setinputText] = useState("")
    const [textMsgs, setTextMsgs] = useState(messages)
    const [chatSearch, setChatSearch] = useState(false)

    const chatDisplay=useSelector(state=>state.chat)
    const fullScreen = useSelector(state=>state.fullScreenChat)

    const scrollToBottom = () => {
        const chatComp = document.getElementById("chat-list");
        chatComp.scrollTop = chatComp.scrollHeight
    }
    
    useEffect(() => {
        if(chatSearch==false){
            scrollToBottom()
        } else {

        }
    }, [textMsgs])


    const textHandler = (e) => {
        setinputText(e.target.value)
    }

    const chatShowhHandler = () => {
        setChatSearch(true)
    }

    const chatHideHandler = () => {
        setChatSearch(false)
    }

    const messageHandler = (e) => {
        e.preventDefault()
        //setTextMsgs(textMsgs => [...textMsgs, {type:"sent", text:inputtext}])
        setTextMsgs([...textMsgs, {type:"sent", text:inputtext}])
        setinputText("")
    }

    return(
        <MainContainer>
            <RecentChats chatDisplay={chatDisplay}>
                <Search fullScreen={fullScreen} chatSearch={chatSearch}>
                    <img onClick={chatHideHandler} className="back-arrow" src={back} style={{height: "25px"}}/>
                    <input placeholder="Search the user to chat" />
                    <img onClick={chatShowhHandler} src={searchIcon} alt=""/>
                </Search>
                {
                    chatSearch==false?
                    <CardContainer>
                        <Slider1 show={3} size="chat">
                            <FriendCard imgSrc={userIcon} title="User#1"/>
                            <FriendCard imgSrc={userIcon2} title="User#2"/>
                            <FriendCard imgSrc={friendIcon3} title="User#3"/>
                            <FriendCard imgSrc={friendIcon4} title="User#4"/>
                            <FriendCard imgSrc={friendIcon5} title="User#5"/>
                            <FriendCard imgSrc={userIcon2} title="User#6"/>
                            <FriendCard imgSrc={userIcon} title="User#7"/>
                            <FriendCard imgSrc={friendIcon3} title="User#8"/>
                            <FriendCard imgSrc={friendIcon5} title="User#9"/>
                        </Slider1>
                    </CardContainer>
                    :""
                }   
            </RecentChats>
            <hr />
            <PrivateChatSearch chatSearch={chatSearch}/>   
            <Messages chatSearch={chatSearch} chatDisplay={chatDisplay} id="chat-list">
                {
                    textMsgs.map(message=>(
                        message.type==="sent"? <SentMessage text={message.text} />:
                        message.type==="recieved"? <RecievedMessage text={message.      text} />:""
                    ))
                }
            </Messages>
            <MessageInput chatSearch={chatSearch} onSubmit={messageHandler}>
                <div>
                    <img src={plusIcon} alt="" />
                    <input onChange={textHandler} type="text" value={inputtext} placeholder="Type message" />
                </div>
                <img src={inputIcon} alt=""/>
            </MessageInput>
        </MainContainer>
    )
}

export default PrivateChat
import React from "react"
import styled from "styled-components";
import {useState, useEffect} from "react"
import RecievedMessage from "../RecievedMessage";
import SentMessage from "../SentMessage";
import {messages} from "../messages"
import Slider1 from "../../../Components/Slider";
import FriendCard from "../FriendCard";
import { useSelector } from "react-redux";

const userIcon = "assets/icons/signup1.svg"
const userIcon2 = "assets/icons/signup2.svg"

const friendIcon3 = '/assets/icons/friend1.svg'
const friendIcon4 = '/assets/icons/friend2.svg'
const friendIcon5 = '/assets/icons/friend3.svg'

const plusIcon = "assets/icons/plus-icon.svg"
const inputIcon = "assets/icons/msg-input-icon.svg"
const groupIcon = "assets/icons/group.svg"

const MainContainer = styled.div`

`

const RecentChats = styled.div`
    //display: flex;
    display: ${
        props=>props.chatDisplay?"flex":"none"
    };
    flex-direction: column;
    margin: 2rem 3rem 0 4rem;
    gap: 0rem;
`
const MySlide = styled(Slider1)`
    display: block;
    flex-direction: column;
`

const CardContainer = styled.div`
    //display: flex;
    //flex-direction: row;
    width: 25rem;
    align-self: flex-end;
    
    //gap: 0rem;
    //padding: 0 6rem 0rem 0;
`


const Group = styled.div`
    position: absolute;
    top: 7.3rem;
    right: 31rem;
    border: 2px solid rgba(108, 255, 119, 1);
    padding: 0.7rem 0.7rem;
`

const Messages = styled.div`
    padding: 2rem 0rem 0 0rem;
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
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

const MessageInput = styled.form`
    display: flex;
    justify-content: space-between;
    padding: 10px 10px 10px 10px;
    margin-left: 2em;
    margin-bottom: 2rem;
    background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.07) 5.21%, rgba(185, 11, 122, 0.06) 97.96%);
    border: 1px solid #6CFF77; 
    div{
        display: flex;
        gap: 1.5rem;
        input{
            width: 20rem;
            border: none;
            background: none;
            color: white;
            font-size: 18px;
            :focus{
                outline: none;
            }
        }
    }
`

const GroupChat = () => {

    const [inputtext, setinputText] = useState("")
    const [textMsgs, setTextMsgs] = useState(messages)

    const chatDisplay=useSelector(state=>state.chat)

    const scrollToBottom = () => {
        const chatComp = document.getElementById("chat-list");
        chatComp.scrollTop = chatComp.scrollHeight
    }
    
    useEffect(() => {
        scrollToBottom()
    }, [textMsgs])


    const textHandler = (e) => {
        setinputText(e.target.value)
    }

    const messageHandler = (e) => {
        e.preventDefault()
        //setTextMsgs(textMsgs => [...textMsgs, {type:"sent", text:inputtext}])
        setTextMsgs([...textMsgs, {type:"sent", text:inputtext}])
        setinputText("")
    }

    return(
        <React.Fragment>
            <RecentChats chatDisplay={chatDisplay}>
                <Group>
                    <img src={groupIcon} alt=""/>
                </Group>
                <CardContainer>
                    
                    <Slider1 show={3} size="chat">
                        <FriendCard imgSrc={userIcon} title="GroupA"/>
                        <FriendCard imgSrc={userIcon2} title="GroupB"/>
                        <FriendCard imgSrc={friendIcon3} title="GroupC"/>
                        <FriendCard imgSrc={friendIcon4} title="GroupD"/>
                        <FriendCard imgSrc={friendIcon5} title="GroupE"/>
                        <FriendCard imgSrc={userIcon2} title="GroupF"/>
                        <FriendCard imgSrc={userIcon} title="GroupG"/>
                        <FriendCard imgSrc={friendIcon3} title="GroupH"/>
                        <FriendCard imgSrc={friendIcon5} title="GroupI"/>
                    </Slider1>
                </CardContainer>
                
            </RecentChats>
            <hr />
            <Messages chatDisplay={chatDisplay} id="chat-list">
                {
                    textMsgs.map(message=>(
                        message.type==="sent"? <SentMessage text={message.text} />:
                        message.type==="recieved"? <RecievedMessage text={message.      text} />:""
                    ))
                }
            </Messages>
            <MessageInput onSubmit={messageHandler}>
                <div>
                    <img src={plusIcon} alt="" />
                    <input onChange={textHandler} type="text" value={inputtext} placeholder="Type message" />
                </div>
                <img src={inputIcon} alt=""/>
            </MessageInput>
        </React.Fragment>
    )
}

export default GroupChat
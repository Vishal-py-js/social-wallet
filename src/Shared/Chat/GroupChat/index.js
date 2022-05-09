import React from "react"
import styled from "styled-components";
import {useState, useEffect} from "react"
import RecievedMessage from "../RecievedMessage";
import SentMessage from "../SentMessage";
import {messages} from "../messages"
import Slider1 from "../../../Components/Slider";
import FriendCard from "../FriendCard";
import { useSelector } from "react-redux";
import GroupChatSearch from "./ChatSearch";
import CreateGroup from "./CreateGroupChat";

const userIcon = "assets/icons/signup1.svg"
const userIcon2 = "assets/icons/signup2.svg"

const friendIcon3 = '/assets/icons/friend1.svg'
const friendIcon4 = '/assets/icons/friend2.svg'
const friendIcon5 = '/assets/icons/friend3.svg'

const plusIcon = "assets/icons/plus-icon.svg"
const inputIcon = "assets/icons/msg-input-icon.svg"
const groupIcon = "assets/icons/group.svg"
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
    flex-direction: column;
    margin: 2rem 3rem 0 4rem;
    gap: 0rem;
    span{
        display: ${
            props=>props.chatSearch?"none":"flex"
        };
        position: absolute;
        align-self: flex-end;
        right: 0;
        top: 10.4rem;
        color: rgba(108, 255, 119, 1);
        cursor: pointer;
    }
`
const MySlide = styled(Slider1)`
    display: block;
    flex-direction: column;
`

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 25rem;
    align-self: flex-end;
    
    //gap: 0rem;
    //padding: 0 6rem 0rem 0;
    span{
        display: ${
            props=>props.chatSearch?"none":"flex"
        };
        align-self: flex-end;
    }
`


const Group = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: ${
        props=>props.fullScreen?"relative":"absolute"
    };
    top: ${
        props=>props.fullScreen?"4.5rem":"7.3rem"
    };
    //right: 31rem;
    width: ${
        props=>props.chatSearch?"31rem":"2rem"
    };
    right: ${
        props=>props.chatSearch?"1.6rem":"2.5rem"
    };
    //transition: 0.7s;
    border: 2px solid rgba(108, 255, 119, 1);
    padding: 1rem 1rem;
    background: black;
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

const Messages = styled.div`
    padding: 2rem 0rem 0 0rem;
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
    overflow: scroll;
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
    const [chatSearch, setChatSearch] = useState(false)
    const [createGroup, setCreateGroup] = useState(false)

    const chatDisplay=useSelector(state=>state.chat)
    const fullScreen = useSelector(state=>state.fullScreenChat)

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

    const chatShowhHandler = () => {
        setChatSearch(true)
    }

    const chatHideHandler = () => {
        setChatSearch(false)
    }

    const createGroupHandler = () => {
        setCreateGroup(true)
    }

    return(
        <MainContainer>
            <RecentChats chatSearch={chatSearch} chatDisplay={chatDisplay}>
                <Group fullScreen={fullScreen} chatSearch={chatSearch}>
                    <img onClick={chatHideHandler} className="back-arrow" src={back} style={{height: "25px"}}/>
                    <input placeholder="Search the group to chat" />
                    <img onClick={createGroupHandler} src={groupIcon} alt=""/>
                </Group>
                
                {
                    chatSearch==false && createGroup==false?
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
                    :""
                } 
                <span onClick={chatShowhHandler}>SEE ALL</span>
            </RecentChats>
            <hr />
            <GroupChatSearch chatSearch={chatSearch}/>
            <CreateGroup createGroup={createGroup} setCreateGroup={setCreateGroup}/>
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
        </MainContainer>
    )
}

export default GroupChat
import styled from "styled-components";
import RecievedMessage from "./RecievedMessage";
import SentMessage from "./SentMessage";

const userIcon = "assets/icons/signup1.svg"
const plusIcon = "assets/icons/plus-icon.svg"
const inputIcon = "assets/icons/msg-input-icon.svg"

const Container = styled.div`
    position: fixed;
    z-index: 111 !important;
    //background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.05) 5.21%, rgba(108, 255, 119, 0) 97.96%);
    background: black;
    opacity: 0.95;
    height: 100vh;
    color: white;
    display: flex;
    padding-right: 1rem;
    flex-direction: column;
    gap: 1rem;
    max-width: 35rem;
    transition: width 2s;
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
`

const RecentChats = styled.div`
    display: flex;
    flex-direction: column;
    margin: 3rem 0 0 4rem;
    gap: 0rem;
   
    .friend-card{
        //border: 2px solid green;
        padding: 10px 30px 0 30px;
        box-shadow: inset 0 6px 5px -5px rgba(108, 255, 119, 1),
              inset -5px 0 6px -5px rgba(108, 255, 119, 1), 
              inset 5px 0 6px -5px rgba(108, 255, 119, 1);
        //box-shadow: -1px -1px 1px 0px rgba(108, 255, 119, 1);
    }
`

const CardContainer = styled.div`
    display: flex;
    gap: 1rem;
`

const Messages = styled.div`
    padding: 2rem 0rem 0 0rem;
    display: flex;
    flex-direction: column;
    padding-bottom: 5rem;
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

const MessageInput = styled.div`
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

const Chat = () => {
    
    return(
        <Container id="myChat">
            <RecentChats>
                <h3>CHAT</h3>
                <CardContainer>
                    <div className="friend-card">
                        <img src={userIcon} alt="user"/>
                        <p>USER</p>
                    </div>
                    <div className="friend-card">
                        <img src={userIcon} alt="user"/>
                        <p>USER</p>
                    </div>
                    <div className="friend-card">
                        <img src={userIcon} alt="user"/>
                        <p>USER</p>
                    </div>
                </CardContainer>
                
            </RecentChats>
            <hr />
            <Messages>
                {/* <div className="message">
                    <p>Lorem ipsum dolor sit amet. Qui galisum dolorem et consectetur voluptatibus qui nostrum quasi et mollitia sapiente.</p>
                </div>
                <img src={userIcon} /> */}
                <RecievedMessage />
                <SentMessage />
                <SentMessage />
                <RecievedMessage />
                <SentMessage />
                <RecievedMessage />
                <RecievedMessage />
                <SentMessage />
                <SentMessage />
                <RecievedMessage />
                <SentMessage />
                <RecievedMessage />
                <RecievedMessage />
                <SentMessage />
                <SentMessage />
                <RecievedMessage />
                <SentMessage />
                <RecievedMessage />
                {/* <RecievedMessage /> */}
            </Messages>
            <MessageInput>
                <div>
                    <img src={plusIcon} alt="" />
                    <input placeholder="Type message" />
                </div>
                <img src={inputIcon} alt=""/>
            </MessageInput>
        </Container>
    )
}

export default Chat
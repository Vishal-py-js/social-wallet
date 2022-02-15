import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Chat from "../Chat";
import { showChat, hideChat } from "../../Redux/Chat/Actions"
import { hashModalOff, hashModalOn } from "../../Redux/Modal/HashModal/Actions";


const userIcon = "assets/icons/signup1.svg"
const hashIcon = "assets/icons/hash-icon.svg"
const transactionIcon = "assets/icons/transaction-icon.svg"
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
    //left: auto;
    //right: 30vw;
    flex-direction: column;
    justify-content: space-around;
    @media (max-width: 768px) {
        width: 85px;
    }

    div{
        cursor: pointer;
        display: flex;
        flex-direction: column;
        line-height: 0;
        align-items: center;
        p{
            font-size: 12px;
            color: #fff;
        }
    }
`

const Sidebar = (props) => {

    const chatDisplay = useSelector(state=>state.chat)
    const hashModal = useSelector(state=>state.hash)
    const dispatch = useDispatch()

    const history = useHistory()

    const handleUserClick = () => {
        history.push("/profile")
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

    return(
        // <Main>
        <Container chatDisplay={chatDisplay}>
            <div>
                <img onClick={handleUserClick} src={userIcon} alt="user"/>
                <p>USER</p>
            </div>
            <div>
                <img onClick={handleHashClick} src={hashIcon} alt="hash"/>
                <p>HASH</p>
            </div>
            <div>
                <img src={transactionIcon} alt="transaction"/>
                <p>TRANSACTION</p>
            </div>
            <div>
                <img src={galleryIcon} alt="gallery"/>
                <p>GALLERY</p>
            </div>
            <div>
                <img src={coinIcon} alt="coins"/>
                <p>COINS</p>
            </div>
            <div onClick={handleChatClick}>
                <img src={chatIcon} alt="chat"/>
                <p>CHAT</p>
            </div>
            <div>
                <img src={settingsIcon} alt="settings"/>
                <p>SETTINGS</p>
            </div>
        </Container>
        // </Main>
    )
}

export default Sidebar
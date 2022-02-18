import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
//import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from "react-redux";
import { showChat, hideChat } from "../../Redux/Chat/Actions"
import { hashModalOff, hashModalOn } from "../../Redux/Modal/HashModal/Actions";


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
    .selected-item{
        transition: 0.3s;
        box-shadow: inset 0px 2px 0px 0px #C8FDCB,
                    inset -5px 0 7px -5px #C8FDCB, 
                    inset 5px 0px 7px -5px #C8FDCB;
        //padding-top: 8px;
        padding: 10px 0px 0 0px;
        margin: 0 7px 0 7px;

        //transition-duration: 0.3s;
        //transform: scale(1.07);
        //border: 3px solid;

        //border-image-source: linear-gradient(107.63deg, #F079C5 59.66%, rgba(0, 0, 0, 0) 112.84%);


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
        //document.getElementById("idOne").classList.add("chat-select")
        if(chatDisplay) {
            // document.getElementById("myChat").classList.remove("chat-select")
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

    const x = document.getElementsByClassName("sidebar-item")
    console.log(x);
    console.log(x.length);
    for(let i=0; i<x.length;i++) {
        console.log(x[i]);
        x[i].addEventListener("click", function(){
            const selectedOne = document.querySelector(".selected-item")
            if(selectedOne){
                selectedOne.classList.remove("selected-item")
            }
            this.classList.add("selected-item")
        }, false)
    }

    // chatd.addEventListener("click", function(){
    //     const selectchat = document.querySelector("#myChat")
    //     selectchat.classList.add("chat-select")
    // })
    // const chatC = document.getElementsByClassName("myChat")

    return(
        // <Main>
        <Container chatDisplay={chatDisplay}>
            <div className="sidebar-item">
                <img  onClick={handleUserClick} src={userIcon} alt="user"/>
                <p>USER</p>
            </div>
            <div className="sidebar-item">
                <img onClick={handleHashClick} src={hashIcon} alt="hash"/>
                <p>HASH</p>
            </div>
            <div className="sidebar-item">
                <img src={galleryIcon} alt="gallery"/>
                <p>GALLERY</p>
            </div>
            <div className="sidebar-item" onClick={handleCoinsClick}>
                <img  src={coinIcon} alt="coins"/>
                <p>COINS</p>
            </div>
            <div className="sidebar-item" onClick={handleChatClick}>
                <img src={chatIcon} alt="chat"/>
                <p>CHAT</p>
            </div>
            <div className="sidebar-item">
                <img src={settingsIcon} alt="settings"/>
                <p>SETTINGS</p>
            </div>
        </Container>
        // </Main>
    )
}

export default Sidebar
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";


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
    width: 110px;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

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

    const history = useHistory()

    const handleUserClick = () => {
        history.push("/profile")
    }

    return(
        <Container>
            <div onClick={handleUserClick}>
                <img src={userIcon} alt="user"/>
                <p>USER</p>
            </div>
            <div>
                <img src={hashIcon} alt="hash"/>
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
            <div>
                <img src={chatIcon} alt="chat"/>
                <p>CHAT</p>
            </div>
            <div>
                <img src={settingsIcon} alt="settings"/>
                <p>SETTINGS</p>
            </div>
        </Container>
    )
}

export default Sidebar
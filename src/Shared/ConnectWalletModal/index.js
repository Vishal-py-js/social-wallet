import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import MetaMaskAuth from "../../Pages/Signup/MetaMask";
import SolanaAuth from "../../Pages/Signup/SolanaAuth";
import { walletModalOff } from "../../Redux/Modal/WalletModal/Actions";

const metamask = "assets/icons/metamask.svg"
const phantom = "assets/images/phantom.jpg"

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 120vh;
    backdrop-filter: blur(5px);
    //cursor: none;
`
const WalletContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    border-radius: 5px;
    z-index: 111 !important;
    //background: 	rgb(107,142,35);
    background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.5) 5.21%, rgba(108, 255, 119, 0.5) 97.96%);
    width: 30rem;
    height: 30rem;
    font-size: 40px;
    border: 1px solid green;
    top: 10rem;
    left: 37rem; 
    span{
        font-size: 18px;
        cursor: pointer;
    }
`

const Wallets = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

const WalletCont = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    h7{
        font-size: 20px;
        color: #fff;
        weight: 500;
    }
    img{
        max-height: 35px;
    }
`

const Wallet = ({imgSrc, walletName}) => {
    return(
        <WalletCont>
            <img src={imgSrc} />
            <h7>{walletName}</h7>
        </WalletCont>
    )
}



const ConnectWalletModal = () => {

    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(walletModalOff())
    }

    const walletMod = useSelector(state=>state.wallet)

    return(
        <Container>
            <WalletContainer>
                <span onClick={handleClose} style={{alignSelf: "flex-end"}}>close</span>
                <h5>Select Wallet</h5>
                <Wallets>
                    <MetaMaskAuth />
                    <SolanaAuth />
                    {/* <Wallet imgSrc={metamask} walletName="Metamask" />
                    <Wallet imgSrc={phantom} walletName="Phantom" /> */}
                </Wallets>
            </WalletContainer>
        </Container>
    )
}

export default ConnectWalletModal
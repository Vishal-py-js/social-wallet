import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import WalletTabs from "./WalletTabs";
import WalletType from "./WalletType";
import axios from "axios"
import React, { useEffect, useState } from "react";
import ConnectWalletModal from "../../Shared/ConnectWalletModal";
import { walletModalOn } from "../../Redux/Modal/WalletModal/Actions";
//import 'bootstrap/dist/css/bootstrap.css';

const metamask = "assets/icons/metamask.svg"
const solana = "assets/images/phantom.jpg"

const Container = styled.div`
    width: 100%;
    display: flex;
    padding: 3rem 0rem 3rem 0rem;
    flex-direction: column;
    gap: 5rem;
    z-index: 1;
    //align-items: center;
    //justify-content: center;
    height: 100vh;
    //background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.09) 5.21%, rgba(185, 11, 122, 0.12) 97.96%);
    background: rgba(221, 164, 252, 1);
    h1{
        align-self: center;
        color: #6CFF77;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
      }
    button{
        z-index: none;
        width: fit-content;
        padding: 15px 30px 15px 30px;
        align-self: center;
        color: #C8FDCB;
        cursor: pointer;
        font-size: 20px;
        display: flex;
        gap: 17px;
        align-items: center;
        border-radius: 5px;
        background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.12) 5.21%, rgba(108, 255, 119, 0) 97.96%);
        border: 4px solid linear-gradient(107.63deg, #C8FDCB 38.04%, rgba(0, 0, 0, 0) 112.84%);
        transition: all 350ms;
            
        //position: relative;
        cursor:pointer;
        user-select:none;
        text-align: center;
        text-decoration: none;
        cursor: pointer;
        transition-duration: 0.3s;
        -webkit-transition-duration: 0.2s; /* Safari */
        
        }
`

const WalletContainer = styled.div`
    hr{
        width: 84%;
        margin-left: 3rem;
    }
`

const Wallet = () => {
    const [ETHtoUSD, setETHtoUSD] = useState("")
    const walletInfo = useSelector(state=>state.balance)
    const solanaBal = useSelector(state=>state.solana)
    axios.get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR")
    .then(res=>{
        console.log(res.data.USD);
        setETHtoUSD(res.data.USD)
    })

    const walletAdd = useSelector(state=>state.nfts.address)
    const solAdd = useSelector(state=>state.solana.address)
    
    const slicedAdd = `${walletAdd.slice(0, 6)}...${walletAdd.slice(
        walletAdd.length - 4,
        walletAdd.length
        )}`
    console.log(slicedAdd);

    const SolanaAddress = `${solAdd.slice(0, 4)}...${solAdd.slice(
        solAdd.length - 4,
        solAdd.length
        )}`

    const dispatch = useDispatch()

    const handleConnect = () => {
        dispatch(walletModalOn())
    }
    const wallets = useSelector(state=>state.wallets)
    console.log(wallets);
    useEffect(()=>{

    }, [wallets])

    const walletMod = useSelector(state=>state.wallet)
    
    return(
        <Container>
            <h1>WALLETS</h1>
            {
                walletMod?<ConnectWalletModal />:""
            }
            <WalletContainer>
                {
                    wallets.map(wallet=>(
                        wallet==="Metamask"?(<React.Fragment><WalletType imgSrc={metamask} title="Metamask" hashCode={walletAdd} balance={`${walletInfo.balance} ETH`} balanceUSD={walletInfo.balance*ETHtoUSD}/><hr/></React.Fragment>):
                        wallet==="Phantom"?(<React.Fragment><WalletType imgSrc={solana} title="Phantom" hashCode={solAdd} balance={`${solanaBal.balance} SOL`} balanceUSD={solanaBal.balance*ETHtoUSD}/><hr/></React.Fragment>):
                        ""
                    ))
                }
                {/* <WalletType imgSrc={metamask} title="Metamask" hashCode={slicedAdd} balance={`${walletInfo.balance} ETH`} balanceUSD={walletInfo.balance*ETHtoUSD}/>
                <hr/>
                <WalletType imgSrc={solana} title="Phantom" hashCode={SolanaAddress} balance={`${solanaBal.balance} SOL`} balanceUSD={solanaBal.balance*ETHtoUSD}/>
                <hr/> */}
            </WalletContainer>
            <button onClick={handleConnect}>Connect wallet</button>
        </Container>
    )
}

export default Wallet


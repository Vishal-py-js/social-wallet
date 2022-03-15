import styled from "styled-components";
import Button from "../../Shared/Button";
import { useEthers, useEtherBalance } from "@usedapp/core";
import * as solanaWeb3 from '@solana/web3.js';

import React, { FC, useEffect, useMemo } from 'react';
import { useDispatch } from "react-redux";
import { setBalance } from "../../Redux/Wallets/MetaMask/Actions";
import MetaMaskAuth from "./MetaMask";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import SolanaAuth from "./SolanaAuth";
import { setSolanaBalance } from "../../Redux/Wallets/Solana/Actions";
import MathWallet from "./MathWallet";

const userIcon1 = "assets/icons/signup1.svg"
const userIcon2 = "assets/icons/signup2.svg"
const instaIcon = "assets/icons/signup-insta.svg"
const twitterIcon = "assets/icons/signup-twitter.svg"
const arrowIcon = "assets/icons/arrow-icon.svg"

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url('assets/images/signup-bg.png');
    background-repeat: no-repeat;
    background-size: 70% 70%;
    color: #fff; 
    display: flex;
    gap: 5rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    h1{
        background: -webkit-linear-gradient(90.07deg, #C8FDCB 0.06%, #FF57A7 106.93%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    p{
        font-size: 17px;
    }
`

const Header = styled.div`
    strong{
        cursor: pointer;
        font-size: 21px;
        background: #6CFF77;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`

const UserLogin = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    align-items: center;
    div{
        display: flex;
        gap: 4rem;
    }
`
//XmgUWrJJ785RZlEp

const Signup = (props) => {

    const {activateBrowserWallet, account} = useEthers()
    const history = useHistory()
    const dispatch = useDispatch()
        
    const coinbaseAuth = () => {
        axios.get("https://www.coinbase.com/oauth/authorize?response_type=code&client_id=a6c624fa2a7eb7b0dbf95a2bbd4afd9bf319be59ea85e88a302ca7db96b9f14a&redirect_uri=http://127.0.0.1:3000/home")
        .then(()=>{
            history.push("/home")
        })
    }
    return(
        <Container>
            {/* <button onClick={getInfo}>Create Account</button> */}
            {/* <button onClick={coinbaseAuth}>Coinbase</button> */}
            <a style={{fontSize: "20px", color: "white"}} href="https://www.coinbase.com/oauth/authorize?client_id=a6c624fa2a7eb7b0dbf95a2bbd4afd9bf319be59ea85e88a302ca7db96b9f14a&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fhome&response_type=code&scope=wallet%3Auser%3Aread">Connect to Coinbase</a>
            <Header>
                <h1>WELCOME TO COIN WALLET</h1>
                <p>Already have an account? <strong>Login</strong></p>
            </Header>

            <UserLogin>
                <p>Sign up with your wallet or with your social media</p>
                <div>
                    <MetaMaskAuth />
                    <SolanaAuth />
                    {/* <MathWallet /> */}
                    {/* <Button text="User#01" imageSrc={userIcon1} arrowIcon={arrowIcon}/> */}
                    {/* <Button text="Usertwin" imageSrc={userIcon2} arrowIcon={arrowIcon}/> */}
                </div>
            </UserLogin>

            <UserLogin>
                <p>Sign up with Social media accounts</p>
                <div>
                    <Button text="Twitter" imageSrc={twitterIcon} arrowIcon={arrowIcon}/>
                    <Button text="Instagram" imageSrc={instaIcon} arrowIcon={arrowIcon}/>
                </div>
            </UserLogin>
        </Container>
    )
}

export default Signup
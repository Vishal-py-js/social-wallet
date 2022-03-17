import React, { useEffect, useState } from "react"
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setAddress, setBalance, setNFTs } from "../../../Redux/Wallets/MetaMask/Actions";
import { useEthers, useEtherBalance } from "@usedapp/core";
import {formatEther} from "@ethersproject/units"
import * as solanaWeb3 from '@solana/web3.js';
import { ethers } from "ethers";

import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { addWallet } from "../../../Redux/WalletList/Actions";
import { walletModalOff } from "../../../Redux/Modal/WalletModal/Actions";

//const web3 = require("web3")
const meta = "./assets/icons/metamask.svg"
const arrowIcon = "assets/icons/arrow-icon.svg"

const ButtonContainer = styled.button`
padding: 15px 30px 15px 30px;
color: #C8FDCB;
cursor: pointer;

display: flex;
gap: 17px;
align-items: center;
background: linear-gradient(97.02deg, rgba(108, 255, 119, 1) 5.21%, rgba(108, 255, 119, 1) 97.96%);
//background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.12) 5.21%, rgba(108, 255, 119, 0) 97.96%);
border: 4px solid linear-gradient(107.63deg, #C8FDCB 38.04%, rgba(0, 0, 0, 0) 112.84%);

strong{
  font-size: 23px;
  weight: 600;
  color: #fff;
}

transition: all 350ms;
&:hover{
    // transition-duration: 0.3s;
    // transform: scale(1.04); 
    }
    
    position: relative;
    cursor:pointer;
    user-select:none;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    transition-duration: 0.3s;
    -webkit-transition-duration: 0.2s; /* Safari */
      
      
      &:hover {
        transition-duration: 0.3s;
      }
      
      &:after {
        content: "";
        position: absolute;
        border-radius: 4em;
        left: 0;
        top:0;
        width: 100%;
        height: 100%;
        opacity: 0;
        //transition: all 0.2s;
        
      }
      
      &:active:after {
        //position: absolute;
        left: 0;
        top:0;
        opacity: 1;
        //transition: 0.2s;
      }
      
      &:active {
        top: 2px;
        //transform: scale(1.05);
      }
`

const MetaMaskAuth = () => {

  const {activateBrowserWallet, account} = useEthers()
  const network = useSelector(state=>state.network)
  console.log(network);

  // useEffect(() => {
  //   //activateBrowserWallet()
  //   getBalance()
  //   //console.log(network);
  // }, [])

    const dispatch = useDispatch()
    const history = useHistory()

  
    const [walletAddress, setWalletAddress] = useState(null)
    const [nfts, setnfts] = useState([])

    

    const connectWallet = async () =>{

      if(typeof window.ethereum !== "undefined") {
        const accounts = await window.ethereum.request({method: 'eth_requestAccounts'})
        //console.log(accounts);
        setWalletAddress(accounts[0])
        const acc = accounts[0]
        dispatch(addWallet("Metamask"))
        dispatch(walletModalOff())
        dispatch(setAddress(accounts[0]))
        const bal = await window.ethereum.request({
          method: "eth_getBalance",
          params: [acc, "latest"]
        })
        dispatch(setBalance(ethers.utils.formatEther(bal)))
        console.log(ethers.utils.formatEther(bal));
        
        //history.push("/home")
      }
    }

    console.log(walletAddress);

    const getNFTdata = async () => {
      if(!walletAddress){
        return
      }
      const resp = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${walletAddress}`)
      const data = await resp.json()
      console.log(data);
      setnfts(data.items)
    }

    

    useEffect(() => {
      getNFTdata()
    }, [walletAddress])

   

    return(
        <ButtonContainer onClick={connectWallet}>
            <img src={meta} />
            <strong>Metamask</strong>
            <img src={arrowIcon} />
        </ButtonContainer>
    )
}

export default MetaMaskAuth

//C:\Windows.old\Windows\System32\DriverStore\FileRepository\iclsclient.inf_amd64_76523213b78d9046\lib
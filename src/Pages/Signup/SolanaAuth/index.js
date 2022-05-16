import React, { useEffect } from "react"
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setAddress, setBalance } from "../../../Redux/Wallets/MetaMask/Actions";
import { useEthers, useEtherBalance } from "@usedapp/core";
import {formatEther} from "@ethersproject/units"
import * as solanaWeb3 from '@solana/web3.js';
//import { getParsedNftAccountsByOwner,isValidSolanaAddress, createConnectionConfig,} from "@nfteyez/sol-rayz";
import { setSolanaAddress, setSolanaBalance } from "../../../Redux/Wallets/Solana/Actions";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { addWallet } from "../../../Redux/WalletList/Actions";
import { walletModalOff } from "../../../Redux/Modal/WalletModal/Actions";

const meta = "./assets/images/phantom.jpg"
const arrowIcon = "assets/icons/arrow-icon.svg"

const ButtonContainer = styled.button`
padding: 15px 30px 15px 30px;
color: #C8FDCB;
cursor: pointer;
font-size: 20px;
display: flex;
gap: 17px;
align-items: center;
background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.12) 5.21%, rgba(108, 255, 119, 0) 97.96%);
border: 4px solid linear-gradient(107.63deg, #C8FDCB 38.04%, rgba(0, 0, 0, 0) 112.84%);
img{
  max-height: 35px;
}
  
strong{
  font-size: 23px;
  weight: 600;
  color: #fff;
  color: black;
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

const SolanaAuth = () => {


    const dispatch = useDispatch()
    const history = useHistory()

    const getInfo = async() => {
      try {
          const resp = await window.solana.connect();
          resp.publicKey.toString()
          console.log(resp);
          console.log(resp.publicKey.toString());
          console.log("Hello");
          
          dispatch(setSolanaAddress(resp.publicKey.toString()))

          const balnc = await axios.post(`https://api.devnet.solana.com`, {
            "jsonrpc": '2.0',
            "id": 1,
            "method": 'getBalance',
            "params": [
              resp.publicKey.toString()
            ]
          });
          console.log(balnc.data.result.value);
          dispatch(setSolanaBalance(balnc.data.result.value))
          dispatch(addWallet("Phantom"))
          dispatch(walletModalOff())

          // (async () => {
          //     const publicKey = new solanaWeb3.PublicKey(
          //         resp.publicKey
          //     );
          //     const solana =  new solanaWeb3.Connection("https://api.devnet.solana.com");
          //     console.log(await solana.getBalance(publicKey));
          //     console.log(await solana.getAccountInfo(publicKey));
          //     dispatch(setSolanaBalance(await solana.getBalance(publicKey)))
          //     })();
          //     history.push("/home")
          // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo 
      } catch (err) {
      }            

    }


    const connectWallet = async () =>{

      //activateBrowserWallet()

      const resp = await window.solana.connect();
      console.log(resp.publicKey.toString());        

      if(typeof window.solana !== "undefined") {
        const reslt = await axios.post("https://api.devnet.solana.com", {
          "jsonrpc": "2.0",
          //"id": 1,
          "method": "getBalance",
          "params": [
            resp.publicKey.toString(),
            {
              "encoding": "base58"
            }
            //"83astBRguLMdt2h5U1Tpdq5tjFoJ6noeGwaY3mDLVcri",
            //{"encoding": "json","transactionDetails":"full","rewards":false}
          ]
        })
        console.log(reslt);
        // const accounts = await window.solana.request({method: 'getAccountInfo'})
        // setWalletAddress(accounts[0])
        // console.log(accounts);
        // dispatch(setNFTs(nfts))
        // dispatch(setAddress(accounts[0]))
      }
    }

   

    return(
        <ButtonContainer onClick={getInfo}>
            <img src={meta} />
            <strong>Phantom</strong>
            <img src={arrowIcon} />
        </ButtonContainer>
    )
}

export default SolanaAuth

//C:\Windows.old\Windows\System32\DriverStore\FileRepository\iclsclient.inf_amd64_76523213b78d9046\lib
import React, { useEffect } from "react"
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setAddress, setBalance } from "../../../Redux/Wallets/MetaMask/Actions";
import { useEthers, useEtherBalance } from "@usedapp/core";
import {formatEther} from "@ethersproject/units"
import * as solanaWeb3 from '@solana/web3.js';
import { setSolanaBalance } from "../../../Redux/Wallets/Solana/Actions";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const meta = "./assets/icons/solana.svg"
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

const MathWallet = () => {


    const dispatch = useDispatch()
    const history = useHistory()

    const getProvider = async() => {
        await window.solana.connect()
        if ("solana" in window) {
          const provider = window.solana;
          if (provider.isMathWallet) {
              console.log(provider);
            return provider;
          }
        }
        window.open("https://mathwallet.org/", "_blank");
      };

    const getInfo = async() => {
      try {
          const resp = await window.solana.connect();
          resp.publicKey.toString()
          console.log(resp.publicKey.toString());

          (async () => {
              const publicKey = new solanaWeb3.PublicKey(
                  resp.publicKey.toString()
              );
              const solana = new solanaWeb3.Connection("http://127.0.0.1:8899");
              console.log(await solana.getBalance(publicKey));
              //dispatch(setSolanaBalance(await solana.getBalance(publicKey)))
              })();
              setTimeout(()=> {
                history.push("/home")
              }, 2000)
          // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo 
      } catch (err) {
      }            

    }

    return(
        <ButtonContainer onClick={getProvider}>
            <img src={meta} />
            MathWallet
            <img src={arrowIcon} />
        </ButtonContainer>
    )
}

export default MathWallet

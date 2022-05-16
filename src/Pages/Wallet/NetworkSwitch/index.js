import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBalance } from "../../../Redux/Wallets/MetaMask/Actions";
import { ethers } from "ethers";
import { setBSC, setETH, setPoly } from "../../../Redux/Wallets/NetworkSwitch/Actions";
import styled from "styled-components";
//import ErrorMessage from "./ErrorMessage";

const networks = {
    eth: {
        chainId: `0x${Number(4).toString(16)}`,
        chainName: "Rinkeby Test Network",
        nativeCurrency: {
            name: "ETH",
            symbol: "ETH",
            decimals: 18
        },
        rpcUrls: ["https://rpc.goerli.mudit.blog/"],
        blockExplorerUrls: ["https://rinkeby.etherscan.io"]
        },
  polygon: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18
    },
    rpcUrls: ["https://polygon-rpc.com/"],
    blockExplorerUrls: ["https://polygonscan.com/"]
  },
  polyT: {
    chainId: `0x${Number(80001).toString(16)}`,
    chainName: "Matic Mumbai",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18
    },
    rpcUrls: ["https://matic-mumbai.chainstacklabs.com","https://rpc-mumbai.maticvigil.com","https://matic-testnet-archive-rpc.bwarelabs.com"],
    blockExplorerUrls: ["https://polygonscan.com/"]
  },
  bsc: {
    chainId: `0x${Number(56).toString(16)}`,
    chainName: "Binance Smart Chain Mainnet",
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "BNB",
      decimals: 18
    },
    rpcUrls: [
      "https://bsc-dataseed1.binance.org",
      "https://bsc-dataseed2.binance.org",
      "https://bsc-dataseed3.binance.org",
      "https://bsc-dataseed4.binance.org",
      "https://bsc-dataseed1.defibit.io",
      "https://bsc-dataseed2.defibit.io",
      "https://bsc-dataseed3.defibit.io",
      "https://bsc-dataseed4.defibit.io",
      "https://bsc-dataseed1.ninicoin.io",
      "https://bsc-dataseed2.ninicoin.io",
      "https://bsc-dataseed3.ninicoin.io",
      "https://bsc-dataseed4.ninicoin.io",
      "wss://bsc-ws-node.nariox.org"
    ],
    blockExplorerUrls: ["https://bscscan.com"]
  }
};

const changeNetwork = async ({ networkName, setError }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks[networkName]
        }
      ]
    });
  } catch (err) {
    setError(err.message);
  }
};



export default function NetworkSwitch() {
    const [error, setError] = useState();
    const [networkName, setNetworkname] = useState("")

    const ddispatch = useDispatch()

    const walletAdd = useSelector(state=>state.balance.address)

    const getBalance = async() => {
    const bal = await window.ethereum.request({
        method: "eth_getBalance",
        params: [walletAdd, "latest"]
    })
    console.log(ethers.utils.formatEther(bal));
    ddispatch(setBalance(ethers.utils.formatEther(bal)))
    }

  const handleNetworkSwitch = async (networkName) => {
    setError();
    await changeNetwork({ networkName, setError });
  };

  const networkChanged = (chainId) => {
    console.log({ chainId });
  };

  const dispatch = useDispatch()

  const handleChange = async(e) => {
      setNetworkname(e.target.value)
      await handleNetworkSwitch(e.target.value)
      getBalance()
      if(e.target.value==="eth"){
          dispatch(setETH())
      }
      else if(e.target.value==="polygon"){
        dispatch(setPoly())
      } else if(e.target.value==="bsc") {
          dispatch(setBSC())
      } else{

      }
  }
  console.log(networkName);

//   useEffect(() => {
//     getBalance()
//   }, [networkName])

  useEffect(() => {
    window.ethereum.on("chainChanged", networkChanged);

    return () => {
      window.ethereum.removeListener("chainChanged", networkChanged);
    };
  }, []);

  return (
    <Select onChange={(e)=>handleChange(e)}>
        <option value="eth">ETH</option>
        <option value="polygon">Polygon</option>
        <option value="bsc">BSC</option>
        <option value="polyT">Polygon Test Network</option>
    </Select>
  );
}

const Select = styled.select`
    background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.07) 5.21%, rgba(108, 255, 119, 0) 97.96%);
    //color: #fff;
    color: rgba(13, 3, 51, 1);
    border: 1px solid rgba(13, 3, 51, 1);
    font-size: 17px;
    height: 3rem;
    border-radius: 5px;
    option{
        //background: black;
        background: rgba(152, 80, 191, 1);
        align-items: center;
        text-align: center;
    }
`
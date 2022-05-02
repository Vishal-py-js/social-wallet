import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Slider1 from "../../../Components/Slider";
import LineDemo from "./Chart";
import FriendCardHome from "./FriendCardHome";
import AnimatedNumber from "react-animated-number"
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Searchbar from "../../../Shared/SearchBar";
import { hideSuggestions } from "../../../Redux/SearchSuggestions/Actions";

const friendIcon1 = '/assets/icons/signup1.svg'
const friendIcon2 = '/assets/icons/signup2.svg'
const friendIcon3 = '/assets/icons/friend1.svg'
const friendIcon4 = '/assets/icons/friend2.svg'
const friendIcon5 = '/assets/icons/friend3.svg'
const arrowIcon = "assets/icons/arrow-icon.svg"
const meta = "/assets/icons/metamask.svg"

const Container = styled.div`
    .selected-friend-card{
        border: 1px solid;
        border-image: linear-gradient(180deg, #C8FDCB 0%, rgba(0, 0, 0, 0) 100%);
        border-image-slice: 1;
        transition: 0.5s;
    }
    .search-bar{
        display: flex;
        gap: 1rem;
        margin-left: 8rem;
        align-items: center;
        h2{
            color: rgba(200, 253, 203, 1);
        }
    }
`

const Selector = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 7.5vw;
    
    h3{
        font-weight: 400;
        letter-spacing: 2px;
    }
    div{
        display: flex;
        justify-content: left;
        gap: 1rem;
        align-items: center;
        strong{
            font-size: 22px;
            color: #FB258B;
        }
    }
    
    select{
        background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.07) 5.21%, rgba(108, 255, 119, 0) 97.96%);
        color: #C8FDCB;
        height: 3rem;
        border-radius: 5px;
        font-size: 19px;
        text-align: center;
        cursor: pointer;
        option{
            color: #C8FDCB;
            background: black;
            border-radius: 5px;
            cursor: pointer;
            li{
                cursor: pointer;
            }
        }
    }
`

const CoinSelector = styled.div`
    margin: 1rem 0 2rem 7.5vw;
    
    select{
        cursor: pointer;
        background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.07) 5.21%, rgba(108, 255, 119, 0) 97.96%);
        color: #C8FDCB;
        height: 3rem;
        border-radius: 5px;
        font-size: 19px;
        text-align: center;
        option{
            color: #C8FDCB;
            background: black;
            border-radius: 5px;
        }
    }
`
const Graph = styled.div`
    margin: 0 5rem 0 7.5vw;
    border: 1px solid #C8FDCB;
`

const Friends = styled.div`
    margin-left: 7.5vw;  
`

const ImageContainer = styled.div`
    gap: 2vw;
    margin-right: 55%;
    
`

const HomeScreen = (props) => {

    const [currency, setCurrency] = useState("USD")
    const [ETHtoUSD, setETHtoUSD] = useState("")
    const [exchange, setExchange] = useState({})
    const [selectedWallet, setSelectedwallet] = useState("Metamask")

    const handleChange = (e) => {
        setCurrency(e.target.value)
    }

    const selectWallet = (e) => {
        setSelectedwallet(e.target.value)
        console.log(e.target.value);
    }

    const chatDisplay = useSelector(state=>state.chat)
    const wallets = useSelector(state=>state.wallets)
    const metaMaskInfo = useSelector(state=>state.balance)
    const solanaInfo = useSelector(state=>state.solana)
    console.log(metaMaskInfo.balance);
    console.log(solanaInfo.balance);
    const metaB = metaMaskInfo.balance
    const solanaB = solanaInfo.balance
    axios.get("https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR")
    .then(res=>{
        console.log(res.data.USD);
        setETHtoUSD(res.data.USD)
    })
    
    const exchangeRates = () => {
        axios.get("https://api.exchangerate.host/latest?base=USD&symbols=INR,CAD")
        .then(res=>{
            console.log(res.data.rates);
            setExchange(res.data.rates)
        })
    }

    const dispatch = useDispatch()
    const handleSuggestions = () => {
        dispatch(hideSuggestions())
    }
    
    useEffect(() => {
        exchangeRates()
    }, [currency])

    return(
        <Container>
            <div className="search-bar">
                <h2>Search</h2>
                {/* <Searchbar /> */}
            </div>
            <Selector>
                    <h3>WALLET VALUE</h3>
                    <div>
                        <h1>$<AnimatedNumber
                        //value={768}
                    value={
                            selectedWallet==="Metamask"&&currency==="USD"?metaMaskInfo.balance*ETHtoUSD:
                            selectedWallet==="Metamask"&&currency==="CAD"?metaMaskInfo.balance*ETHtoUSD*exchange.CAD:
                            selectedWallet==="Metamask"&&currency==="INR"?metaMaskInfo.balance*ETHtoUSD*exchange.INR:
                            selectedWallet==="Phantom"?solanaInfo.balance:""
                        }
                    duration={1000}
                    formatValue={(n) => n.toFixed(2)}
                    frameStyle={(percentage) =>
                        percentage > 20 && percentage < 80 ? { opacity: 0.5 } : {}
                    }
                /><strong> {currency}</strong></h1>
                        <select onChange={(e)=>handleChange(e)}>
                            <option>USD</option>
                            <option>INR</option>
                            <option>CAD</option>
                        </select>
                    </div>
                </Selector>
                <CoinSelector>
                    <select onChange={(e)=>selectWallet(e)}>
                        {
                            wallets.map(wallet=>(
                                <option>{wallet}</option>
                            ))
                        }
                        {/* <option>MAIN ETHEREUM NETWORK</option>
                        <option>MAIN ETHEREUM NETWORK</option>
                        <option>MAIN ETHEREUM NETWORK</option>
                        <option>MAIN ETHEREUM NETWORK</option> */}
                    </select>
                </CoinSelector>
                <Graph>
                    <LineDemo />
                </Graph>
                <Friends>
                    <h4>TOP FRIENDS</h4>
                    <ImageContainer>
                        <Slider1 show={chatDisplay?3:5} size="chat">
                            <FriendCardHome imgSrc={friendIcon1} title="User#01"/>
                            <FriendCardHome imgSrc={friendIcon2} title="User#02"/>
                            <FriendCardHome imgSrc={friendIcon3} title="User#03"/>
                            <FriendCardHome imgSrc={friendIcon4} title="User#04"/>
                            <FriendCardHome imgSrc={friendIcon5} title="User#05"/>
                            <FriendCardHome imgSrc={friendIcon1} title="User#06"/>
                            <FriendCardHome imgSrc={friendIcon2} title="User#07"/>
                            <FriendCardHome imgSrc={friendIcon3} title="User#08"/>
                            <FriendCardHome imgSrc={friendIcon4} title="User#09"/>
                        </Slider1>
                        {/* <img className="arrow" src src={arrowIcon} /> */}
                    </ImageContainer>
                </Friends>  
        </Container>
    )
}

export default HomeScreen
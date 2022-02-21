import React, {useState} from "react";
import styled from "styled-components";
import Slider1 from "../../../Components/Slider";
import LineDemo from "./Chart";
import FriendCardHome from "./FriendCardHome";
import AnimatedNumber from "react-animated-number"

const friendIcon1 = '/assets/icons/signup1.svg'
const friendIcon2 = '/assets/icons/signup2.svg'
const friendIcon3 = '/assets/icons/friend1.svg'
const friendIcon4 = '/assets/icons/friend2.svg'
const friendIcon5 = '/assets/icons/friend3.svg'
const arrowIcon = "assets/icons/arrow-icon.svg"

const Container = styled.div`
    .selected-friend-card{
        box-shadow: inset 0 6px 0px -5px rgba(108, 255, 119, 1),
                    inset -4px 0 4px -2px rgba(108, 255, 119, 1), 
                    inset 5px 0 0px -3px rgba(108, 255, 119, 1);
        transition-duration: 0.3s;
        transform: scale(1.05);
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


    const handleChange = (e) => {
        setCurrency(e.target.value)
    }

    
    return(
        <Container>
            <Selector>
                    <h3>WALLET VALUE</h3>
                    <div>
                        <h1>$<AnimatedNumber
                    value={768}
                    duration={1000}
                    formatValue={(n) => n.toFixed(0)}
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
                    <select>
                        <option>MAIN ETHEREUM NETWORK</option>
                        <option>MAIN ETHEREUM NETWORK</option>
                        <option>MAIN ETHEREUM NETWORK</option>
                        <option>MAIN ETHEREUM NETWORK</option>
                    </select>
                </CoinSelector>
                <Graph>
                    <LineDemo />
                </Graph>
                <Friends>
                    <h4>TOP FRIENDS</h4>
                    <ImageContainer>
                        <Slider1 show={3} size="chat">
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
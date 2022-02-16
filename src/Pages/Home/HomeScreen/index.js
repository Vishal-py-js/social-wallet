import React, {useState} from "react";
import styled from "styled-components";
import LineDemo from "./Chart";

const friendIcon1 = '/assets/icons/signup1.svg'
const friendIcon2 = '/assets/icons/signup2.svg'
const friendIcon3 = '/assets/icons/friend1.svg'
const friendIcon4 = '/assets/icons/friend2.svg'
const friendIcon5 = '/assets/icons/friend3.svg'
const arrowIcon = "assets/icons/arrow-icon.svg"



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
        option{
            color: #C8FDCB;
            background: black;
            border-radius: 5px;
        }
    }
`

const CoinSelector = styled.div`
    margin: 1rem 0 2rem 7.5vw;
    
    select{
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
    //width: 50vw;
    //height: fit-content;
    border: 1px solid #C8FDCB;
    //background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.07) 5.21%, rgba(108, 255, 119, 0.01) 97.96%);
`

const Friends = styled.div`
    margin-left: 7.5vw;
    
    
`

const ImageContainer = styled.div`
    display: flex;
    gap: 2vw;
    align-items: center;
    img{
        border: 1px solid #C8FDCB;
        padding: 10px 10px;
    }
    div{
        display: flex;
        flex-direction: column;
        line-height: 0;
    }
    .arrow{
        border: none;
        margin-bottom: 2rem;
    }

`

const HomeScreen = (props) => {

    const [currency, setCurrency] = useState("USD")


    const handleChange = (e) => {
        setCurrency(e.target.value)
    }
    return(
        <React.Fragment>
            <Selector>
                    <h3>WALLET VALUE</h3>
                    <div>
                        <h1>$768.00 <strong>{currency}</strong></h1>
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
                        <div>
                            <img src={friendIcon1} />
                            <h4>User#1</h4>
                        </div>
                        <div>
                            <img src={friendIcon2} />
                            <h4>User#2</h4>
                        </div>
                        <div>
                            <img src={friendIcon3} />
                            <h4>User#3</h4>
                        </div>
                        <div>
                            <img src={friendIcon4} />
                            <h4>User#4</h4>
                        </div>
                        <div>
                            <img src={friendIcon5} />
                            <h4>User#5</h4>
                        </div>
                        <div>
                            <img src={friendIcon1} />
                            <h4>User#5</h4>
                        </div>
                        <div>
                            <img src={friendIcon2} />
                            <h4>User#5</h4>
                        </div>
                        <img className="arrow" src src={arrowIcon} />
                    </ImageContainer>
                </Friends>  
        </React.Fragment>
    )
}

export default HomeScreen
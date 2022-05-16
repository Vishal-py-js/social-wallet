import { useState } from "react";
import styled from "styled-components";
import NetworkSwitch from "../NetworkSwitch";
import WalletTabs from "../WalletTabs";

const copy = "assets/icons/copy-icon.svg"
const dropdown = "assets/icons/dropdown-icon2.svg"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
    padding: 1rem 0rem 1rem 14%;
    
    .title{
        display: flex;
        align-items: center;
        gap: 10px;
        //color: #fff;
        color: rgba(13, 3, 51, 1);
        font-size: 18px;
        font-weight: 500;
        img{
            max-height: 35px;
        }
    }
    .details{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .hash{
            display: flex;
            align-items: center;
            gap: 10px;
            small{
                //color: gray;
                color: rgba(13, 3, 51, 1);
                font-size: 18px;
            }
        }
    }
    .details2{
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding-top: 8px;
        span{
            //color: #6CFF77;
            color: rgba(13, 3, 51, 1);
        }
    }
    .value{
        display: flex;
        flex-direction: column;
        line-height: 0;
        div{
            display: flex;
            align-items: center;
            gap: 6px;
            h3{
                font-size: 26px;
                font-weight: 500;
                //color: #6CFF77;
                color: rgba(13, 3, 51, 1);
            }
            span{
                font-size: 13px;
                //color: #FB258B;
                color: rgba(13, 3, 51, 1);
            }
            small{
                //color: gray;
                color: rgba(13, 3, 51, 1);
                font-size: 17px;
            }
            p{
                //color: gray;
                color: rgba(13, 3, 51, 1);
                font-size: 13px;
            }
        }
    }
    .dropdown{
        align-items: center;
        display: flex;
        // img{
        //     height: 15px;
        // }
    }
    .img-cont{
        //height: 15px;
        transition: 0.5s;
        transform: rotate(-180deg);
    }
`

const WalletType = ({imgSrc, title, hashCode, balance, balanceUSD}) => {

    const [moreDetails, setMoreDetails] = useState(false);
    console.log(balance);
    const copyToClipboard = (hashC) => {
        navigator.clipboard.writeText(hashC)
        alert("Copied")
    }

    const dropDownHandler = () => {
        const element = document.getElementById("dropd")
        element.addEventListener("click", function(){
            if(moreDetails){
                element.classList.add("img-cont")
            }else{
                element.classList.remove("img-cont")
            }
        })
        setMoreDetails(!moreDetails)
    }   
    

    return(
        <Wrapper>
            <div className="title">
                <img src={imgSrc} alt=""/>
                <span>{title}</span>
            </div>
            <div className="details">
                <div className="details2">
                    <span>Account 1</span>
                    <div className="hash">
                        <small>{hashCode.slice(0, 4)}...{hashCode.slice(
        hashCode.length - 4,
        hashCode.length
        )}</small>
                        <img onClick={()=>copyToClipboard(hashCode)} src={copy} alt=""/>
                    </div>
                </div>
                <div className="value">
                    <div>
                        <h3>{balanceUSD.toFixed(2)}</h3>
                        <span>USD</span>
                    </div>
                    <div>
                        <small>{balance}</small>
                        {/* <p>ETH</p> */}
                    </div>
                </div>
                <div>
                    <NetworkSwitch />
                </div>
                <div className="dropdown">
                    <img id="dropd" onClick={()=>dropDownHandler()} src={dropdown} alt=""/>
                </div>
            </div>
            {
                moreDetails?<WalletTabs />:""
            }
        </Wrapper>
    )
}

export default WalletType
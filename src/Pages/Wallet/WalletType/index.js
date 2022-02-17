import { useState } from "react";
import styled from "styled-components";
import WalletTabs from "../WalletTabs";

const copy = "assets/icons/copy-icon.svg"
const dropdown = "assets/icons/dropdown-icon.svg"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
    //color: white;
    //gap: 10px;
    padding: 1rem 0rem 1rem 14%;
    //padding-right: 5rem;
    
    .title{
        display: flex;
        //padding-left: 13%;
        align-items: center;
        gap: 10px;
        color: #fff;
        font-size: 18px;
        font-weight: 500;
    }
    .details{
        display: flex;
        align-items: center;
        justify-content: space-between;
        //margin-left: 2.6%;
        //gap: 29%;
        .hash{
            display: flex;
            align-items: center;
            gap: 10px;
            small{
                color: gray;
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
            color: #6CFF77;
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
                color: #6CFF77;
            }
            span{
                font-size: 13px;
                color: #FB258B;
            }
            small{
                color: gray;
                font-size: 17px;
            }
            p{
                color: gray;
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
        transform: rotate(180deg);
    }
`

const WalletType = ({imgSrc, title}) => {

    const [moreDetails, setMoreDetails] = useState(false);

    const dropDownHandler = () => {
        const element = document.getElementById("dropd")
        element.addEventListener("click", function(){
            ///element.className = "img"
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
                        <small>fdgdgsh4321452</small                    >
                        <img src={copy} alt=""/>
                    </div>
                </div>
                <div className="value">
                    <div>
                        <h3>$70</h3>
                        <span>USD</span>
                    </div>
                    <div>
                        <small>0.00032</small>
                        <p>ETH</p>
                    </div>
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
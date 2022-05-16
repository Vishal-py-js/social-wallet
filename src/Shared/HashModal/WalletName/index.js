import styled from "styled-components";
import {copy as copyClip} from "react-copy-to-clipboard"

const copyIcon = "assets/icons/copy-icon.svg"


const WalletContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    justify-content: space-between;
    align-items: center;

    div{
        display: flex;
        align-items: center;
        gap: 10px;
        strong{
            font-size: 18px;
            font-weight: 500;
        }
        span{
            font-size: 17px;
        }
    }
`

const copyToClipboard = (hashC) => {
    navigator.clipboard.writeText(hashC)
    alert("Copied")
}

const WalletName = ({imgSrc, title, hashCode}) => {
    return(
        <WalletContainer className="wallet">
            <div >
                <img src={imgSrc} alt="metamask"/>
                <strong>{title}</strong>
            </div>
            <div>
                <span className="hash-code">{hashCode}</span>
                <img onClick={()=>copyToClipboard(hashCode)} src={copyIcon} alt="copy" />
            </div>
        </WalletContainer>
    )
}

export default WalletName
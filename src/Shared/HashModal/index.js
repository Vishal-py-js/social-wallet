import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { hashModalOff } from "../../Redux/Modal/HashModal/Actions";
import WalletName from "./WalletName";

const close = "assets/icons/close-icon.svg"
const metamask = "assets/icons/metamask.svg"
const solana = "assets/icons/solana.svg"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    //display: none;
    gap: 10px;
    background: linear-gradient(97.02deg, #1A382C 5.21%, #113025 97.96%);
    background: rgba(221, 164, 252, 1);
    box-shadow: -6px 10px 15px 0px rgba(0, 0, 0, 1);
    padding: 5px 8rem 20px 4rem;
    position: fixed;
    width: 20rem;
    height: fit-content;
    top: 20.4rem;
    //left: 7.5rem;
    right: ${
        props=>props.chatDisplay?"43.2rem":"7.3rem"
    };
    transition: 0.7s;
    //border: 1px solid rgba(108, 255, 119, 1);
    // box-shadow: inset 0 4px 5px -5px rgba(108, 255, 119, 1),
    //           inset -5px 0 4px -5px rgba(108, 255, 119, 1), 
    //           inset 5px 0 4px -5px rgba(108, 255, 119, 1);
    border: 2px solid;
    border-image: linear-gradient(107.63deg, #C8FDCB 64.34%, rgba(0, 0, 0, 0) 112.84%);
    border-image: linear-gradient(107.63deg, black 64.34%, rgba(0, 0, 0, 0) 112.84%);
    border-image-slice: 1;
    
    .close{
        position: absolute;
        top: 0.3rem;
        left: 30.6rem;
        align-self: flex-end;
        margin-bottom: 7px;
    }
`


const HashModal = () => {

    const dispatch = useDispatch()
    const chatDisplay = useSelector(state=>state.chat)

    const handleClose = () => {
        dispatch(hashModalOff())
    }

    const copyToClipboard = (item) => {
        console.log(item.innerHtml);
    }


    return(
        <Container chatDisplay={chatDisplay}>
            <img onClick={handleClose} className="close" src={close} alt="close" />
            <WalletName imgSrc={metamask} title="Metamask" hashCode="sft23322ifhfg45trr"/>
            <WalletName imgSrc={solana} title="Solana" hashCode="ett23322ifhfg45ruy"/>
        </Container>
    )
}

export default HashModal
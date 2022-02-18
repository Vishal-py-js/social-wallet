import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { hashModalOff } from "../../Redux/Modal/HashModal/Actions";

const close = "assets/icons/close-icon.svg"
const metamask = "assets/icons/metamask.svg"
const solana = "assets/icons/solana.svg"
const copy = "assets/icons/copy-icon.svg"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    //display: none;
    gap: 10px;
    background: linear-gradient(97.02deg, #1A382C 5.21%, #113025 97.96%);
    padding: 5px 8rem 20px 4rem;
    position: fixed;
    width: 20rem;
    height: fit-content;
    top: 10.4rem;
    //left: 7.5rem;
    right: ${
        props=>props.chatDisplay?"43.2rem":"7.3rem"
    };
    //border: 1px solid rgba(108, 255, 119, 1);
    box-shadow: inset 0 4px 5px -5px rgba(108, 255, 119, 1),
              inset -5px 0 4px -5px rgba(108, 255, 119, 1), 
              inset 5px 0 4px -5px rgba(108, 255, 119, 1);
    // box-shadow: inset 0 3px 5px -5px rgba(108, 255, 119, 1),
    //           inset -5px 0 3px -5px rgba(108, 255, 119, 1), 
    //           inset 5px 0 2px -5px rgba(108, 255, 119, 1);
    .close{
        position: absolute;
        top: 0.3rem;
        left: 30.6rem;
        align-self: flex-end;
        margin-bottom: 7px;
    }
`
const Wallet = styled.div`
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

const HashModal = () => {

    const dispatch = useDispatch()
    const chatDisplay = useSelector(state=>state.chat)

    const handleClose = () => {
        dispatch(hashModalOff())
    }

    return(
        <Container chatDisplay={chatDisplay}>
            <img onClick={handleClose} className="close" src={close} alt="close" />
            <Wallet className="wallet">
                <div >
                    <img src={metamask} alt="metamask"/>
                    <strong>Metamask</strong>
                </div>
                <div>
                    <span>2313ewru57ytt</span>
                    <img src={copy} alt="copy" />
                </div>
            </Wallet>

            <Wallet className="wallet">
                <div >
                    <img src={solana} alt="solana"/>
                    <strong>Solana</strong>
                </div>
                <div>
                    <span>2313ewru57ytt</span>
                    <img src={copy} alt="copy" />
                </div>
            </Wallet>
        </Container>
    )
}

export default HashModal
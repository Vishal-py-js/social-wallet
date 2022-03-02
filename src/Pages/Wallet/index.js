import styled from "styled-components";
import WalletTabs from "./WalletTabs";
import WalletType from "./WalletType";
//import 'bootstrap/dist/css/bootstrap.css';

const metamask = "assets/icons/metamask.svg"
const solana = "assets/icons/solana.svg"

const Container = styled.div`
    width: 100%;
    display: flex;
    padding: 3rem 0rem 3rem 0rem;
    flex-direction: column;
    gap: 5rem;
    //align-items: center;
    //justify-content: center;
    height: fit-content;
    background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.09) 5.21%, rgba(185, 11, 122, 0.12) 97.96%);
    h1{
        align-self: center;
        color: #6CFF77;
    }
    
`

const WalletContainer = styled.div`
    hr{
        width: 78%;
        opacity: 0.4;
    }
`

const Wallet = () => {
    return(
        <Container>
            <h1>WALLETS</h1>
            <WalletContainer>
                <WalletType imgSrc={metamask} title="Metamask" hashCode="avgtr345red"/>
                <hr/>
                <WalletType imgSrc={solana} title="Solana" hashCode="avgtr345gfh"/>
                <hr/>
                <WalletType imgSrc={metamask} title="Metamask" hashCode="avgtr345kju"/>
                <hr/>
                <WalletType imgSrc={solana} title="Solana" hashCode="avgtr345qse"/>
                <hr/>
                <WalletType imgSrc={metamask} title="Metamask" hashCode="avgtr345okl"/>
                <hr/>
                <WalletType imgSrc={solana} title="Solana" hashCode="avgtr345ytu"/>
                <hr/>
            </WalletContainer>
        </Container>
    )
}

export default Wallet
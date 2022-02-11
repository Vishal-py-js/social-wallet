import styled from "styled-components";



const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 0;
    border: 1px solid #FB258B;
    padding: 1rem 2rem 1rem 2rem;
    background: linear-gradient(97.02deg, rgba(242, 194, 195, 0.12) 5.21%, rgba(242, 194, 195, 0) 97.96%);

    h4{
        color: #C8FDCB;
    }
    h3{
        font-weight: 500;
        font-size: 16px;
    }
`

const SellerCard = ({imgSrc}) => {
    return(
        <Container>
            <img src={imgSrc} alt=""/>
            <h4>NFT seller#01</h4>
            <h3>138.0942 ETH</h3>
        </Container>
    )
}

export default SellerCard
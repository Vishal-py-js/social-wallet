import styled from "styled-components";

const bannerImg = "./assets/images/nft-banner.png"

const Container = styled.div`
align-items: center;
display: flex;
flex-direction: column;
    img{
        width: 70vw;
        height: 45vh;
    }
    div{
        position: absolute;
        margin-top: 6rem;
        z-index: 1;
        display: flex;
        align-items: center;
        text-align: center;
        flex-direction: column;
        h1{
            color: rgba(200, 253, 203, 1);
        }
        p{
            font-size: 19px;
            letter-spacing: 2px;
            max-width: 60vw;
        }
        button{
            padding: 10px 20px 10px 20px;
            font-size: 24px;
            font-weight: 600;
            color: rgba(108, 255, 119, 1);
            border: 2px solid rgba(108, 255, 119, 1);
            background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.0) 5.21%, rgba(108, 255, 119, 0) 97.96%);
        }
    }
`

const Banner = () => {
    return(
        <Container>
            <img src={bannerImg} alt="banner"/>
            <div>
                <h1>NFTs GALLERY</h1>
                <p>LOREM IPSUM DOLOR SIT AMET. QUI GALISUM DOLOREM ET CONSECTETUR VOLUPTATIBUS QUI NOSTRUM QUASI ET MOLLITIA SAPIENTE.</p>
                <button>MINT</button>
            </div>
        </Container>
    )
}

export default Banner
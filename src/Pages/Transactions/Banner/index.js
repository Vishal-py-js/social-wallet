import styled from "styled-components";

const bannerImg = "./assets/images/transaction-banner.png"
const gem = "/assets/icons/gem.svg"
const share = "/assets/icons/share-icon.svg"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    //align-items: center;
    border: 1px solid #6CFF77;
    width: 70vw;
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    img{
        
    }
`
const Details = styled.div`
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 1rem 0 0 0;
    .price-cont{
        display: flex;
        flex-direction: column;
        gap: 5px;
        
        span{
            display: flex;
            color: rgba(200, 253, 203, 1);
            justify-content: flex-end;
            margin-left: 1.6rem;
        }
    }
    .price{
        display: flex;
        align-items: center;
        img{
            height: 30px;
        }
        strong{
            color: rgba(200, 253, 203, 1);
            font-size: 25px;
        }
    }
    .actions{
        display: flex;
        align-items: center;
        gap: 2rem;
        button{
            padding: 10px 20px 10px 20px;
            font-size: 24px;
            font-weight: 600;
            color: rgba(108, 255, 119, 1);
            border: 2px solid rgba(108, 255, 119, 1);
            background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.0) 5.21%, rgba(108, 255, 119, 0) 97.96%);
        }
        img{
            height: 25px;
        }
    }
` 
const Image = styled.img`
    width: 100%;
    height: 30rem;
`

const TransactionBanner = () => {
    return(
        <Container>
            <Image src={bannerImg} />
            <Details>
                <div className="price-cont">
                    <div className="price">
                        <img src={gem} />
                        <strong>11.44</strong>
                    </div>
                    <span>$ 36.566.20</span>
                </div>

                <div className="actions">
                    <button>Sell Now</button>
                    <img src={share} alt="share" />
                </div>
            </Details>
        </Container>
    )
}

export default TransactionBanner
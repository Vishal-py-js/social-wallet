import styled from "styled-components";

const user1 = "./assets/icons/signup1.svg"
const user2 = "./assets/icons/signup2.svg"

const nft1 = "./assets/icons/nft-icon1.svg"
const gem = "/assets/icons/gem.svg"


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #6CFF77;
    padding: 1rem 0.5rem 1rem 1rem;
    background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.07) 5.21%, rgba(108, 255, 119, 0) 97.96%);
    .seller{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 6px 6px;
        img{
            padding: 8px 8px;
            border-top: 2px solid #6CFF77;
            border-right: 2px solid #6CFF77;
            border-left: 2px solid #6CFF77;
        }
    }
    .price{
        display: flex;
        flex-direction: column;
        gap: 5px;
        span{
            color: rgba(200, 253, 203, 1);
            align-self: flex-end;
        }
        div{
            display: flex;
            strong{
                color: rgba(200, 253, 203, 1);
                font-size: 22px;
            }
        }
    }
`

const TransactionCard = () => {
    return(
        <Container>
            <div className="seller">
                <img src={user1}/>
                <span>User#1</span>
            </div>
            <div>
                <img src={nft1} alt="nft" />
            </div>
            <div className="price">
                <div>
                    <img src={gem} alt=""/>
                    <strong>11.44</strong>
                </div>
                <span>$ 36.566.20</span>
            </div>
            <div className="seller">
                <img src={user2}/>
                <span>User#2</span>
            </div>
            <div>
                <span>1 hour ago</span>
            </div>
        </Container>
    )
}

export default TransactionCard
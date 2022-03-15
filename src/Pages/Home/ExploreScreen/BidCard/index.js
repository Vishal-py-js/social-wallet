import styled from "styled-components";

const bidder1 = "/assets/icons/bidder1.svg"
const bidder2 = "/assets/icons/bidder2.svg"
const bidder3 = "/assets/icons/bidder3.svg"
const gem = "/assets/icons/gem.svg"


const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 15rem;
    //border: 1px solid rgba(108, 255, 119, 1);
    box-shadow: inset 0 -5px 5px -5px rgba(108, 255, 119, 1), 
              inset 0 5px 5px -5px rgba(108, 255, 119, 1), 
              inset 5px 0 5px -5px rgba(108, 255, 119, 1);
    padding: 0.8rem 0.8rem 0.8rem 0.8rem;
    background: linear-gradient(97.02deg, rgba(242, 194, 195, 0.12) 5.21%, rgba(242, 194, 195, 0) 97.96%);

    h4{
        color: #C8FDCB;
    }
    h3{
        font-weight: 500;
        font-size: 16px;
    }
    .card-content{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        div{
            display: flex;
            align-items: center;
            justify-content: space-between;
            h3{
                font-weight: 700;
                font-size: 18px;
            }
            span{
                color: rgba(200, 253, 203, 1);
            }
        }
    }
    .bidder-content{
        display: flex;
        gap: 0.5rem;
    }
`

const BidCard = ({imgSrc}) => {

    const x = document.getElementsByClassName("bid-cont")
    // console.log(x);
    // console.log(x.length);
    for(let i=0; i<x.length;i++) {
        // console.log(x[i]);
        x[i].addEventListener("click", function(){
            const selectedOne = document.querySelector(".selected-bid")
            if(selectedOne){
                selectedOne.classList.remove("selected-bid")
            }
            this.classList.add("selected-bid")
        }, false)
    }

    return(
        <CardContainer className="bid-cont">
            <img src={imgSrc} alt=""/>
            <div className="card-content">
                <div>
                    <h3>CoinwalletNFT</h3>
                    <span>40k Bids</span>
                </div>
                <div>
                    <div className="bidder-content">
                        <img src={bidder1} alt=""/>
                        <img src={bidder2} alt=""/>
                        <img src={bidder3} alt=""/>
                    </div>
                    <div>
                        <img src={gem} alt="gem" />
                        <span>11.44</span>
                    </div>
                </div>
            </div>
        </CardContainer>
    )
}

export default BidCard
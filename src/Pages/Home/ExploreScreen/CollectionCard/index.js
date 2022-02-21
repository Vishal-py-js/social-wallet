import styled from "styled-components";

const bidder1 = "/assets/icons/bidder1.svg"
const bidder2 = "/assets/icons/bidder2.svg"
const bidder3 = "/assets/icons/bidder3.svg"

const topCollection1 = "/assets/icons/top-collection1.svg"
const topCollection2 = "/assets/icons/top-collection2.svg"
const topCollection3 = "/assets/icons/top-collection3.svg"
const topCollection4 = "/assets/icons/top-collection4.svg"
const topCollection5 = "/assets/icons/top-collection5.svg"
const topCollection6 = "/assets/icons/top-collection6.svg"
const topCollection7 = "/assets/icons/top-collection7.svg"
const gem = "/assets/icons/gem.svg"
const flag = "/assets/icons/top-collection-flag.svg"

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    //border: 0.1px solid rgba(108, 255, 119, 1);
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

const CollectionCard = ({imgSrc}) => {

    const x = document.getElementsByClassName("collection-cont")
    // console.log(x);
    // console.log(x.length);
    for(let i=0; i<x.length;i++) {
        // console.log(x[i]);
        x[i].addEventListener("click", function(){
            const selectedOne = document.querySelector(".selected-collection")
            if(selectedOne){
                selectedOne.classList.remove("selected-collection")
            }
            this.classList.add("selected-collection")
        }, false)
    }

    return(
        <CardContainer className="collection-cont">
            <img src={imgSrc} alt=""/>
            <div className="card-content">
                <div>
                    <h3>CW-NFT Collections</h3>
                    <img src={flag} alt=""/>
                </div>
                <div className="image-content">
                    <img src={topCollection1} alt=""/>
                    <img src={topCollection2} alt=""/>
                    <img src={topCollection3} alt=""/>
                </div>
                <div>
                    <div className="bidder-content">
                        <img src={bidder1} alt=""/>
                        <span>By NFTuser#012</span>
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

export default CollectionCard
import styled from "styled-components";
import BidCard from "./BidCard";
import CollectionCard from "./CollectionCard";
import SellerCard from "./SellerCard";
import Slider1 from "../../../Components/Slider";

const seller1 = "/assets/icons/seller1.svg"
const seller2 = "/assets/icons/seller2.svg"
const seller3 = "/assets/icons/seller3.svg"
const seller4 = "/assets/icons/seller4.svg"
const prevArrow = "/assets/icons/prev-arrow.svg"
const nextArrow = "/assets/icons/next-arrow.svg"
const bids1 = "/assets/images/bids1.png"
const bids2 = "/assets/images/bids2.png"


const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 5%;
    height: fit-content;
    .seller-slider{
        height: 39vh;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding-right: 2%;
    }
    .bidder-slider{
        //line-height: 0;
        height: 50vh;
        padding-right: 2%;
    }
    .collection-slider{
        //line-height: 0;
        height: fit-content;
        padding-right: 2%;
    }
    .selected{
        box-shadow: inset 0 7px 0px -5px #FB258B,
        inset -5px 0 6px -5px #FB258B, 
        inset 5px 0 6px -5px #FB258B;

        transition-duration: 0.3s;
        transform: scale(1.07);
        //border: 3px solid;

        //border-image-source: linear-gradient(107.63deg, #F079C5 59.66%, rgba(0, 0, 0, 0) 112.84%);


    }
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding-right: 9%;
    align-items: center;
    h2{
        color: rgba(108, 255, 119, 1);
        //font
    }
    select{
        background: linear-gradient(97.02deg, rgba(108, 255, 119, 0.07) 5.21%, rgba(108, 255, 119, 0) 97.96%);
        color: #C8FDCB;
        height: 3rem;
        border-radius: 5px;
        font-size: 19px;
        text-align: center;
        option{
            color: #C8FDCB;
            background: black;
            border-radius: 5px;
        }
    }
`

const Explore = (props) => {
    const x = document.getElementsByClassName("seller-cont")
    console.log(x);
    console.log(x.length);
    for(let i=0; i<x.length;i++) {
        console.log(x[i]);
        x[i].addEventListener("click", function(){
            const selectedOne = document.querySelector(".selected")
            if(selectedOne){
                selectedOne.classList.remove("selected")
            }
            this.classList.add("selected")
        }, false)
    }
    
    return(
        <Container>
            <div className="seller-slider">
                <Header>
                    <h2>Popular Sellers</h2>
                    <select>
                        <option>TODAY</option>
                        <br/>
                        <option>THIS WEEK</option>
                        <br/>
                        <option>2 WEEKS</option>
                    </select>
                </Header>
                <Slider1 show={4} size="small">
                    <SellerCard imgSrc={seller1} />
                    <SellerCard  imgSrc={seller2} />
                    <SellerCard  imgSrc={seller3} />
                    <SellerCard imgSrc={seller4} />
                    <SellerCard imgSrc={seller1} />
                    <SellerCard imgSrc={seller2} />
                    <SellerCard imgSrc={seller2} />
                    <SellerCard imgSrc={seller4} />
                </Slider1>
            </div> 

            <div className="bidder-slider">
                <Header>
                    <h2>Hot Bids</h2> 
                </Header>
                <Slider1 show={3} size="big">
                    <BidCard imgSrc={bids1}/>
                    <BidCard imgSrc={bids2}/>
                    <BidCard imgSrc={bids1}/>
                    <BidCard imgSrc={bids2}/>
                    <BidCard imgSrc={bids1}/>
                    <BidCard imgSrc={bids2}/>
                </Slider1>
            </div>
            
            <div className="collection-slider">
                <Header>
                    <h2>Top Collections</h2> 
                </Header>
                <Slider1 show={3} size="bigger">
                    <CollectionCard imgSrc={bids1}/>
                    <CollectionCard imgSrc={bids2}/>
                    <CollectionCard imgSrc={bids1}/>
                    <CollectionCard imgSrc={bids2}/>
                    <CollectionCard imgSrc={bids1}/>
                    <CollectionCard imgSrc={bids2}/>
                </Slider1>
            </div>

        </Container>
    )
}

export default Explore